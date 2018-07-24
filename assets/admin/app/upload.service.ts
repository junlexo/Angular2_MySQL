import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UploadService {
  progress;
  progressObserver;
  constructor () {
    this.progress = Observable.create(observer => {
      this.progressObserver = observer
    }).share();
  }

  makeFileRequest (url: string, params: string[], files: File[], id: string): Observable<any> {

    var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < 1; i++) {
        var lp = files[i].name.lastIndexOf('.');
        var name = files[i].name.slice(lp, files[i].name.length);
        formData.append("uploads", files[i], id+name);
      }

      formData.append('id', id);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);

        this.progressObserver.next(this.progress);
      };

      xhr.open('POST', url + '?token=' + token, true);
      xhr.send(formData);
    });
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var UploadService = (function () {
    function UploadService() {
        var _this = this;
        this.progress = Rx_1.Observable.create(function (observer) {
            _this.progressObserver = observer;
        }).share();
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, id) {
        var _this = this;
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            for (var i = 0; i < 1; i++) {
                var lp = files[i].name.lastIndexOf('.');
                var name = files[i].name.slice(lp, files[i].name.length);
                formData.append("uploads", files[i], id + name);
            }
            formData.append('id', id);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                _this.progressObserver.next(_this.progress);
            };
            xhr.open('POST', url + '?token=' + token, true);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC91cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUduQztJQUdFO1FBSEYsaUJBOENDO1FBMUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDeEMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWlCLEdBQVcsRUFBRSxNQUFnQixFQUFFLEtBQWEsRUFBRSxFQUFVO1FBQXpFLGlCQW9DQztRQWxDQyxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRS9FLE1BQU0sQ0FBQyxlQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTtZQUMvQixJQUFJLFFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRSxFQUNyQyxHQUFHLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7WUFFN0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RCxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFFRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUxQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBQyxLQUFLO2dCQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUU3RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUM7WUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsU0FBUyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTlDSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBK0NiLG9CQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxxQkFBYSxnQkE4Q3pCLENBQUEiLCJmaWxlIjoiYWRtaW4vYXBwL3VwbG9hZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcGxvYWRTZXJ2aWNlIHtcbiAgcHJvZ3Jlc3M7XG4gIHByb2dyZXNzT2JzZXJ2ZXI7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgdGhpcy5wcm9ncmVzc09ic2VydmVyID0gb2JzZXJ2ZXJcbiAgICB9KS5zaGFyZSgpO1xuICB9XG5cbiAgbWFrZUZpbGVSZXF1ZXN0ICh1cmw6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSwgZmlsZXM6IEZpbGVbXSwgaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpLFxuICAgICAgICB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgIHZhciBscCA9IGZpbGVzW2ldLm5hbWUubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgdmFyIG5hbWUgPSBmaWxlc1tpXS5uYW1lLnNsaWNlKGxwLCBmaWxlc1tpXS5uYW1lLmxlbmd0aCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZHNcIiwgZmlsZXNbaV0sIGlkK25hbWUpO1xuICAgICAgfVxuXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcih4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwKTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzT2JzZXJ2ZXIubmV4dCh0aGlzLnByb2dyZXNzKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsICsgJz90b2tlbj0nICsgdG9rZW4sIHRydWUpO1xuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

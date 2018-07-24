import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {PostService} from './post.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {UploadService} from '../upload.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {NgForm} from '@angular/common';
import {TinyEditor} from '../tinymce';

/* -- Import Component -- */
import {BannerComponent} from '../banner.component';
import {SpinnerComponent} from '../spinner.component';

@Component({
    selector: 'create',
    template: `
    	<banner [title]="bannerTitle"></banner>
      <div class="uk-grid">
  			<div class="uk-width-large-5-10 uk-container-center">
        <div class="uk-alert" [hidden]="!postCreated">
          Post Created Successfully!
        </div>
  			<form #f="ngForm" class="uk-form uk-margin-large-bottom" (ngSubmit)="onSubmit(f)">
  				<fieldset>
  						<legend> <h2> Create Post Form </h2> </legend>
  						<div class="uk-form-row">
  							<input type="text" required="required" ngControl="title" #title="ngForm" placeholder="" [ngClass]="{ 'uk-width-form-large': true }">
  						</div>

              <div class="uk-form-row">
  							<textarea required="required" [tinyMce]="f" ngControl="body" #body="ngForm" placeholder="" [ngClass]="{ 'uk-width-1-1': true }"></textarea>
  						</div>
              <div class="uk-form-row">
                <input type="file" required="required" (change)="onChange($event)"/>
              </div>
  						<button class="uk-button uk-margin-top" type="submit">login</button>
  				</fieldset>
  			</form>
  			</div>
  		</div>
		  <spinner [isLoading]=isLoading></spinner>
    `,
    directives: [BannerComponent, SpinnerComponent, TinyEditor],
    providers: [PostService, HTTP_PROVIDERS, UploadService, AuthService]
})

export class PostCreateComponent {
  bannerTitle: string = "Create New Post";
  postCreated: boolean = false;
  files: File[];
	isLoading: boolean = false;

	constructor(private router: Router, private _authService: AuthService, private _postService: PostService, private _uploadService: UploadService) {
    // if( !this._authService.isAuthenticated()) {
    //   this.router.navigate(['']);
    // }
  }
	ngOnInit() {
    this._uploadService.progress.subscribe(
     data => {
       console.log('progress = '+data);
     });
	}
  ngOnDestroy() {

  }

  onSubmit(f) {
		this._postService.createPost({'title': f.value.title, 'body': f.value.body})
				.subscribe(
					data => {
						console.log(data.post);
            this._uploadService.makeFileRequest('http://localhost:3000/posts/upload', [], this.files, data.post.id).subscribe(data => {
              console.log('sent');
              this.postCreated = true;
            });

					},
					error => {
						console.error(error);
					}
				);
	}
  onChange(event) {
    console.log('onChange');
    this.files = event.srcElement.files;
    console.log(this.files);
  }
}

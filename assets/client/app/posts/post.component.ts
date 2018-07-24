import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {StripHtml} from '../striphtml.pipe';

/* -- Import Component -- */
import {SpinnerComponent} from '../spinner.component';

@Component({
    selector: 'posts',
    template: `
      <div  class="uk-width-large-5-10 uk-container-center" *ngFor="let post of posts; let i=index">
        <div class="uk-grid uk-margin-large post-holder">
          <div class="uk-width-large-1-5">
            <div class="post-image" [style.background-image]="'url(uploads/'+post.id+'.jpg)'"></div>
          </div>
    			<div class="uk-width-large-4-5">
    				<article class="uk-article">
    				    <h1 class="uk-article-title">
    				    	<a [routerLink]="['post', post.id]">
    				    		{{ post.title }}
    				    	</a>
    				    </h1>
    				    <p class="uk-article-meta">
    				    	Posted on: {{ post.createdAt | date:"MM/dd/yy" }}
    				    </p>
    			    		{{ post.body | stripHtml }}
    				</article>
    			</div>
        </div>
      </div>
			<spinner [isLoading]=isLoading></spinner>
    `,
    directives: [SpinnerComponent, ROUTER_DIRECTIVES],
    providers: [PostService, HTTP_PROVIDERS],
    pipes: [StripHtml]
})

export class PostComponent {
	posts = [];
	isLoading: boolean = true;
	constructor(private _postService: PostService) {

	}
	ngOnInit() {
		this._postService.getPosts()
			.subscribe(json => {
				this.posts = json.posts;
				this.isLoading = false;
		});
	}
}

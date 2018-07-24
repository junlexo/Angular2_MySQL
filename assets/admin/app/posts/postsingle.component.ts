import {Component, OnInit, OnDestroy} from '@angular/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';

/* -- Import Component -- */
import {BannerComponent} from '../banner.component';
import {SpinnerComponent} from '../spinner.component';

@Component({
    selector: 'single',
    template: `
    	<banner [title]=" isLoading ? '' : singlePost.title "></banner>
    	<div class="uk-grid" *ngIf="singlePost">
			<div class="uk-width-large-5-10 uk-container-center">
				<article class="uk-article">
				    <p class="uk-article-meta">
				    	{{ singlePost.createdAt }}
				    </p>
			    	<div [innerHTML]="singlePost.body"></div>
			    	<hr class="uk-article-divider">
			    	...
				</article>
			</div>
		</div>
		<spinner [isLoading]=isLoading></spinner>
    `,
    directives: [BannerComponent, SpinnerComponent, ROUTER_DIRECTIVES],
    providers: [PostService, HTTP_PROVIDERS]
})
export class PostSingleComponent {
	singlePost;
  sub;
	isLoading: boolean = true;
	constructor(private _postService: PostService, private _routeParams: ActivatedRoute) {

	}
	ngOnInit() {
		/*this._postService.getPost(this._routeParams.get("id"))
			.subscribe(json => {
				this.singlePost = json;
				this.isLoading = false;
		});*/

    this.sub = this._routeParams.params.subscribe(params => {
      let id = +params['id'];
      this._postService.getPost(id)
          .subscribe( json => {
            this.singlePost = json.post;
            this.isLoading = false;
          });
    });

	}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

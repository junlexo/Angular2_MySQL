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
var post_service_1 = require('./post.service');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
/* -- Import Component -- */
var banner_component_1 = require('../banner.component');
var spinner_component_1 = require('../spinner.component');
var PostSingleComponent = (function () {
    function PostSingleComponent(_postService, _routeParams) {
        this._postService = _postService;
        this._routeParams = _routeParams;
        this.isLoading = true;
    }
    PostSingleComponent.prototype.ngOnInit = function () {
        /*this._postService.getPost(this._routeParams.get("id"))
            .subscribe(json => {
                this.singlePost = json;
                this.isLoading = false;
        });*/
        var _this = this;
        this.sub = this._routeParams.params.subscribe(function (params) {
            var id = +params['id'];
            _this._postService.getPost(id)
                .subscribe(function (json) {
                _this.singlePost = json.post;
                _this.isLoading = false;
            });
        });
    };
    PostSingleComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostSingleComponent = __decorate([
        core_1.Component({
            selector: 'single',
            template: "\n    \t<banner [title]=\" isLoading ? '' : singlePost.title \"></banner>\n    \t<div class=\"uk-grid\" *ngIf=\"singlePost\">\n\t\t\t<div class=\"uk-width-large-5-10 uk-container-center\">\n\t\t\t\t<article class=\"uk-article\">\n\t\t\t\t    <p class=\"uk-article-meta\">\n\t\t\t\t    \t{{ singlePost.createdAt }}\n\t\t\t\t    </p>\n\t\t\t    \t<div [innerHTML]=\"singlePost.body\"></div>\n\t\t\t    \t<hr class=\"uk-article-divider\">\n\t\t\t    \t...\n\t\t\t\t</article>\n\t\t\t</div>\n\t\t</div>\n\t\t<spinner [isLoading]=isLoading></spinner>\n    ",
            directives: [banner_component_1.BannerComponent, spinner_component_1.SpinnerComponent, router_1.ROUTER_DIRECTIVES],
            providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_1.ActivatedRoute])
    ], PostSingleComponent);
    return PostSingleComponent;
}());
exports.PostSingleComponent = PostSingleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcG9zdHMvcG9zdHNpbmdsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsdUJBQWdELGlCQUFpQixDQUFDLENBQUE7QUFFbEUsNEJBQTRCO0FBQzVCLGlDQUE4QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3BELGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBdUJ0RDtJQUlDLDZCQUFvQixZQUF5QixFQUFVLFlBQTRCO1FBQS9ELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBRG5GLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFHMUIsQ0FBQztJQUNELHNDQUFRLEdBQVI7UUFDQzs7OzthQUlLO1FBTE4saUJBZ0JDO1FBVEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2xELElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQkFDeEIsU0FBUyxDQUFFLFVBQUEsSUFBSTtnQkFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFFTixDQUFDO0lBQ0EseUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQS9DSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUseWlCQWVUO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSxvQ0FBZ0IsRUFBRSwwQkFBaUIsQ0FBQztZQUNsRSxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHFCQUFjLENBQUM7U0FDM0MsQ0FBQzs7MkJBQUE7SUE0QkYsMEJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLDJCQUFtQixzQkEyQi9CLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9wb3N0cy9wb3N0c2luZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tICcuL3Bvc3Quc2VydmljZSc7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKiAtLSBJbXBvcnQgQ29tcG9uZW50IC0tICovXG5pbXBvcnQge0Jhbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnR9IGZyb20gJy4uL3NwaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaW5nbGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8YmFubmVyIFt0aXRsZV09XCIgaXNMb2FkaW5nID8gJycgOiBzaW5nbGVQb3N0LnRpdGxlIFwiPjwvYmFubmVyPlxuICAgIFx0PGRpdiBjbGFzcz1cInVrLWdyaWRcIiAqbmdJZj1cInNpbmdsZVBvc3RcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIj5cblx0XHRcdFx0PGFydGljbGUgY2xhc3M9XCJ1ay1hcnRpY2xlXCI+XG5cdFx0XHRcdCAgICA8cCBjbGFzcz1cInVrLWFydGljbGUtbWV0YVwiPlxuXHRcdFx0XHQgICAgXHR7eyBzaW5nbGVQb3N0LmNyZWF0ZWRBdCB9fVxuXHRcdFx0XHQgICAgPC9wPlxuXHRcdFx0ICAgIFx0PGRpdiBbaW5uZXJIVE1MXT1cInNpbmdsZVBvc3QuYm9keVwiPjwvZGl2PlxuXHRcdFx0ICAgIFx0PGhyIGNsYXNzPVwidWstYXJ0aWNsZS1kaXZpZGVyXCI+XG5cdFx0XHQgICAgXHQuLi5cblx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PHNwaW5uZXIgW2lzTG9hZGluZ109aXNMb2FkaW5nPjwvc3Bpbm5lcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtCYW5uZXJDb21wb25lbnQsIFNwaW5uZXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtQb3N0U2VydmljZSwgSFRUUF9QUk9WSURFUlNdXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RTaW5nbGVDb21wb25lbnQge1xuXHRzaW5nbGVQb3N0O1xuICBzdWI7XG5cdGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IEFjdGl2YXRlZFJvdXRlKSB7XG5cblx0fVxuXHRuZ09uSW5pdCgpIHtcblx0XHQvKnRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3QodGhpcy5fcm91dGVQYXJhbXMuZ2V0KFwiaWRcIikpXG5cdFx0XHQuc3Vic2NyaWJlKGpzb24gPT4ge1xuXHRcdFx0XHR0aGlzLnNpbmdsZVBvc3QgPSBqc29uO1xuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pOyovXG5cbiAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlUGFyYW1zLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0KGlkKVxuICAgICAgICAgIC5zdWJzY3JpYmUoIGpzb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGVQb3N0ID0ganNvbi5wb3N0O1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcblxuXHR9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==

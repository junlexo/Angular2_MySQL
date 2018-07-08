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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzaW5nbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLHVCQUFnRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxFLDRCQUE0QjtBQUM1QixpQ0FBOEIscUJBQXFCLENBQUMsQ0FBQTtBQUNwRCxrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQXVCdEQ7SUFJQyw2QkFBb0IsWUFBeUIsRUFBVSxZQUE0QjtRQUEvRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQURuRixjQUFTLEdBQVksSUFBSSxDQUFDO0lBRzFCLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBQ0M7Ozs7YUFJSztRQUxOLGlCQWdCQztRQVRFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNsRCxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQ3hCLFNBQVMsQ0FBRSxVQUFBLElBQUk7Z0JBQ2QsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUNBLHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUEvQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLHlpQkFlVDtZQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsb0NBQWdCLEVBQUUsMEJBQWlCLENBQUM7WUFDbEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxDQUFDO1NBQzNDLENBQUM7OzJCQUFBO0lBNEJGLDBCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSwyQkFBbUIsc0JBMkIvQixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3RzaW5nbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qIC0tIEltcG9ydCBDb21wb25lbnQgLS0gKi9cbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7U3Bpbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vc3Bpbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpbmdsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxiYW5uZXIgW3RpdGxlXT1cIiBpc0xvYWRpbmcgPyAnJyA6IHNpbmdsZVBvc3QudGl0bGUgXCI+PC9iYW5uZXI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwidWstZ3JpZFwiICpuZ0lmPVwic2luZ2xlUG9zdFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTUtMTAgdWstY29udGFpbmVyLWNlbnRlclwiPlxuXHRcdFx0XHQ8YXJ0aWNsZSBjbGFzcz1cInVrLWFydGljbGVcIj5cblx0XHRcdFx0ICAgIDxwIGNsYXNzPVwidWstYXJ0aWNsZS1tZXRhXCI+XG5cdFx0XHRcdCAgICBcdHt7IHNpbmdsZVBvc3QuY3JlYXRlZEF0IH19XG5cdFx0XHRcdCAgICA8L3A+XG5cdFx0XHQgICAgXHQ8ZGl2IFtpbm5lckhUTUxdPVwic2luZ2xlUG9zdC5ib2R5XCI+PC9kaXY+XG5cdFx0XHQgICAgXHQ8aHIgY2xhc3M9XCJ1ay1hcnRpY2xlLWRpdmlkZXJcIj5cblx0XHRcdCAgICBcdC4uLlxuXHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8c3Bpbm5lciBbaXNMb2FkaW5nXT1pc0xvYWRpbmc+PC9zcGlubmVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0Jhbm5lckNvbXBvbmVudCwgU3Bpbm5lckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1Bvc3RTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdFNpbmdsZUNvbXBvbmVudCB7XG5cdHNpbmdsZVBvc3Q7XG4gIHN1Yjtcblx0aXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6IFBvc3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZVBhcmFtczogQWN0aXZhdGVkUm91dGUpIHtcblxuXHR9XG5cdG5nT25Jbml0KCkge1xuXHRcdC8qdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdCh0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoXCJpZFwiKSlcblx0XHRcdC5zdWJzY3JpYmUoanNvbiA9PiB7XG5cdFx0XHRcdHRoaXMuc2luZ2xlUG9zdCA9IGpzb247XG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0fSk7Ki9cblxuICAgIHRoaXMuc3ViID0gdGhpcy5fcm91dGVQYXJhbXMucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3QoaWQpXG4gICAgICAgICAgLnN1YnNjcmliZSgganNvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZVBvc3QgPSBqc29uLnBvc3Q7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG5cdH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzaW5nbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLHVCQUFnRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRWxFLDRCQUE0QjtBQUM1QixpQ0FBOEIscUJBQXFCLENBQUMsQ0FBQTtBQUNwRCxrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQXVCdEQ7SUFJQyw2QkFBb0IsWUFBeUIsRUFBVSxZQUE0QjtRQUEvRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQURuRixjQUFTLEdBQVksSUFBSSxDQUFDO0lBRzFCLENBQUM7SUFDRCxzQ0FBUSxHQUFSO1FBQ0M7Ozs7YUFJSztRQUxOLGlCQWdCQztRQVRFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNsRCxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQ3hCLFNBQVMsQ0FBRSxVQUFBLElBQUk7Z0JBQ2QsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUNBLHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUEvQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLHlpQkFlVDtZQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsb0NBQWdCLEVBQUUsMEJBQWlCLENBQUM7WUFDbEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxDQUFDO1NBQzNDLENBQUM7OzJCQUFBO0lBNEJGLDBCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSwyQkFBbUIsc0JBMkIvQixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3RzaW5nbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG4vKiAtLSBJbXBvcnQgQ29tcG9uZW50IC0tICovXHJcbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuLi9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2luZ2xlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBcdDxiYW5uZXIgW3RpdGxlXT1cIiBpc0xvYWRpbmcgPyAnJyA6IHNpbmdsZVBvc3QudGl0bGUgXCI+PC9iYW5uZXI+XHJcbiAgICBcdDxkaXYgY2xhc3M9XCJ1ay1ncmlkXCIgKm5nSWY9XCJzaW5nbGVQb3N0XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8YXJ0aWNsZSBjbGFzcz1cInVrLWFydGljbGVcIj5cclxuXHRcdFx0XHQgICAgPHAgY2xhc3M9XCJ1ay1hcnRpY2xlLW1ldGFcIj5cclxuXHRcdFx0XHQgICAgXHR7eyBzaW5nbGVQb3N0LmNyZWF0ZWRBdCB9fVxyXG5cdFx0XHRcdCAgICA8L3A+XHJcblx0XHRcdCAgICBcdDxkaXYgW2lubmVySFRNTF09XCJzaW5nbGVQb3N0LmJvZHlcIj48L2Rpdj5cclxuXHRcdFx0ICAgIFx0PGhyIGNsYXNzPVwidWstYXJ0aWNsZS1kaXZpZGVyXCI+XHJcblx0XHRcdCAgICBcdC4uLlxyXG5cdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxzcGlubmVyIFtpc0xvYWRpbmddPWlzTG9hZGluZz48L3NwaW5uZXI+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0Jhbm5lckNvbXBvbmVudCwgU3Bpbm5lckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdFNpbmdsZUNvbXBvbmVudCB7XHJcblx0c2luZ2xlUG9zdDtcclxuICBzdWI7XHJcblx0aXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTogUG9zdFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvKnRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3QodGhpcy5fcm91dGVQYXJhbXMuZ2V0KFwiaWRcIikpXHJcblx0XHRcdC5zdWJzY3JpYmUoanNvbiA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaW5nbGVQb3N0ID0ganNvbjtcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0fSk7Ki9cclxuXHJcbiAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlUGFyYW1zLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdChpZClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoIGpzb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZVBvc3QgPSBqc29uLnBvc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHR9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

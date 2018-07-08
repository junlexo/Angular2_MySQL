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
var striphtml_pipe_1 = require('../striphtml.pipe');
/* -- Import Component -- */
var spinner_component_1 = require('../spinner.component');
var PostComponent = (function () {
    function PostComponent(_postService) {
        this._postService = _postService;
        this.posts = [];
        this.isLoading = true;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts()
            .subscribe(function (json) {
            _this.posts = json.posts;
            _this.isLoading = false;
        });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "\n      <div  class=\"uk-width-large-5-10 uk-container-center\" *ngFor=\"let post of posts; let i=index\">\n        <div class=\"uk-grid uk-margin-large post-holder\">\n          <div class=\"uk-width-large-1-5\">\n            <div class=\"post-image\" [style.background-image]=\"'url(uploads/'+post.id+'.jpg)'\"></div>\n          </div>\n    \t\t\t<div class=\"uk-width-large-4-5\">\n    \t\t\t\t<article class=\"uk-article\">\n    \t\t\t\t    <h1 class=\"uk-article-title\">\n    \t\t\t\t    \t<a [routerLink]=\"['post', post.id]\">\n    \t\t\t\t    \t\t{{ post.title }}\n    \t\t\t\t    \t</a>\n    \t\t\t\t    </h1>\n    \t\t\t\t    <p class=\"uk-article-meta\">\n    \t\t\t\t    \tPosted on: {{ post.createdAt | date:\"MM/dd/yy\" }}\n    \t\t\t\t    </p>\n    \t\t\t    \t\t{{ post.body | stripHtml }}\n    \t\t\t\t</article>\n    \t\t\t</div>\n        </div>\n      </div>\n\t\t\t<spinner [isLoading]=isLoading></spinner>\n    ",
            directives: [spinner_component_1.SpinnerComponent, router_1.ROUTER_DIRECTIVES],
            providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS],
            pipes: [striphtml_pipe_1.StripHtml]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELCtCQUF3QixtQkFBbUIsQ0FBQyxDQUFBO0FBRTVDLDRCQUE0QjtBQUM1QixrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQWdDdEQ7SUFHQyx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFGN0MsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFHMUIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDZCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBMUNGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSx1NkJBc0JUO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsMEJBQWlCLENBQUM7WUFDakQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxDQUFDO1lBQ3hDLEtBQUssRUFBRSxDQUFDLDBCQUFTLENBQUM7U0FDckIsQ0FBQzs7cUJBQUE7SUFlRixvQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlkscUJBQWEsZ0JBYXpCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U3RyaXBIdG1sfSBmcm9tICcuLi9zdHJpcGh0bWwucGlwZSc7XG5cbi8qIC0tIEltcG9ydCBDb21wb25lbnQgLS0gKi9cbmltcG9ydCB7U3Bpbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vc3Bpbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Bvc3RzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiAgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIiAqbmdGb3I9XCJsZXQgcG9zdCBvZiBwb3N0czsgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVrLWdyaWQgdWstbWFyZ2luLWxhcmdlIHBvc3QtaG9sZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTEtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QtaW1hZ2VcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCIndXJsKHVwbG9hZHMvJytwb3N0LmlkKycuanBnKSdcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwidWstd2lkdGgtbGFyZ2UtNC01XCI+XG4gICAgXHRcdFx0XHQ8YXJ0aWNsZSBjbGFzcz1cInVrLWFydGljbGVcIj5cbiAgICBcdFx0XHRcdCAgICA8aDEgY2xhc3M9XCJ1ay1hcnRpY2xlLXRpdGxlXCI+XG4gICAgXHRcdFx0XHQgICAgXHQ8YSBbcm91dGVyTGlua109XCJbJ3Bvc3QnLCBwb3N0LmlkXVwiPlxuICAgIFx0XHRcdFx0ICAgIFx0XHR7eyBwb3N0LnRpdGxlIH19XG4gICAgXHRcdFx0XHQgICAgXHQ8L2E+XG4gICAgXHRcdFx0XHQgICAgPC9oMT5cbiAgICBcdFx0XHRcdCAgICA8cCBjbGFzcz1cInVrLWFydGljbGUtbWV0YVwiPlxuICAgIFx0XHRcdFx0ICAgIFx0UG9zdGVkIG9uOiB7eyBwb3N0LmNyZWF0ZWRBdCB8IGRhdGU6XCJNTS9kZC95eVwiIH19XG4gICAgXHRcdFx0XHQgICAgPC9wPlxuICAgIFx0XHRcdCAgICBcdFx0e3sgcG9zdC5ib2R5IHwgc3RyaXBIdG1sIH19XG4gICAgXHRcdFx0XHQ8L2FydGljbGU+XG4gICAgXHRcdFx0PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cdFx0XHQ8c3Bpbm5lciBbaXNMb2FkaW5nXT1pc0xvYWRpbmc+PC9zcGlubmVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1NwaW5uZXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtQb3N0U2VydmljZSwgSFRUUF9QUk9WSURFUlNdLFxuICAgIHBpcGVzOiBbU3RyaXBIdG1sXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RDb21wb25lbnQge1xuXHRwb3N0cyA9IFtdO1xuXHRpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTogUG9zdFNlcnZpY2UpIHtcblxuXHR9XG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3RzKClcblx0XHRcdC5zdWJzY3JpYmUoanNvbiA9PiB7XG5cdFx0XHRcdHRoaXMucG9zdHMgPSBqc29uLnBvc3RzO1xuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=

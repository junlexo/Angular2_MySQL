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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELCtCQUF3QixtQkFBbUIsQ0FBQyxDQUFBO0FBRTVDLDRCQUE0QjtBQUM1QixrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQWdDdEQ7SUFHQyx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFGN0MsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFHMUIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDZCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBMUNGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSx1NkJBc0JUO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsMEJBQWlCLENBQUM7WUFDakQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxDQUFDO1lBQ3hDLEtBQUssRUFBRSxDQUFDLDBCQUFTLENBQUM7U0FDckIsQ0FBQzs7cUJBQUE7SUFlRixvQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlkscUJBQWEsZ0JBYXpCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdHJpcEh0bWx9IGZyb20gJy4uL3N0cmlwaHRtbC5waXBlJztcclxuXHJcbi8qIC0tIEltcG9ydCBDb21wb25lbnQgLS0gKi9cclxuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuLi9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9zdHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiAgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIiAqbmdGb3I9XCJsZXQgcG9zdCBvZiBwb3N0czsgbGV0IGk9aW5kZXhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWstZ3JpZCB1ay1tYXJnaW4tbGFyZ2UgcG9zdC1ob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS0xLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QtaW1hZ2VcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCIndXJsKHVwbG9hZHMvJytwb3N0LmlkKycuanBnKSdcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTQtNVwiPlxyXG4gICAgXHRcdFx0XHQ8YXJ0aWNsZSBjbGFzcz1cInVrLWFydGljbGVcIj5cclxuICAgIFx0XHRcdFx0ICAgIDxoMSBjbGFzcz1cInVrLWFydGljbGUtdGl0bGVcIj5cclxuICAgIFx0XHRcdFx0ICAgIFx0PGEgW3JvdXRlckxpbmtdPVwiWydwb3N0JywgcG9zdC5pZF1cIj5cclxuICAgIFx0XHRcdFx0ICAgIFx0XHR7eyBwb3N0LnRpdGxlIH19XHJcbiAgICBcdFx0XHRcdCAgICBcdDwvYT5cclxuICAgIFx0XHRcdFx0ICAgIDwvaDE+XHJcbiAgICBcdFx0XHRcdCAgICA8cCBjbGFzcz1cInVrLWFydGljbGUtbWV0YVwiPlxyXG4gICAgXHRcdFx0XHQgICAgXHRQb3N0ZWQgb246IHt7IHBvc3QuY3JlYXRlZEF0IHwgZGF0ZTpcIk1NL2RkL3l5XCIgfX1cclxuICAgIFx0XHRcdFx0ICAgIDwvcD5cclxuICAgIFx0XHRcdCAgICBcdFx0e3sgcG9zdC5ib2R5IHwgc3RyaXBIdG1sIH19XHJcbiAgICBcdFx0XHRcdDwvYXJ0aWNsZT5cclxuICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHRcdFx0PHNwaW5uZXIgW2lzTG9hZGluZ109aXNMb2FkaW5nPjwvc3Bpbm5lcj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbU3Bpbm5lckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXSxcclxuICAgIHBpcGVzOiBbU3RyaXBIdG1sXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3RDb21wb25lbnQge1xyXG5cdHBvc3RzID0gW107XHJcblx0aXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTogUG9zdFNlcnZpY2UpIHtcclxuXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGpzb24gPT4ge1xyXG5cdFx0XHRcdHRoaXMucG9zdHMgPSBqc29uLnBvc3RzO1xyXG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcG9zdHMvcG9zdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsK0JBQXdCLG1CQUFtQixDQUFDLENBQUE7QUFFNUMsNEJBQTRCO0FBQzVCLGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBZ0N0RDtJQUdDLHVCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUY3QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFZLElBQUksQ0FBQztJQUcxQixDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7YUFDMUIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUExQ0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLHU2QkFzQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSwwQkFBaUIsQ0FBQztZQUNqRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHFCQUFjLENBQUM7WUFDeEMsS0FBSyxFQUFFLENBQUMsMEJBQVMsQ0FBQztTQUNyQixDQUFDOztxQkFBQTtJQWVGLG9CQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxxQkFBYSxnQkFhekIsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL3Bvc3RzL3Bvc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tICcuL3Bvc3Quc2VydmljZSc7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N0cmlwSHRtbH0gZnJvbSAnLi4vc3RyaXBodG1sLnBpcGUnO1xuXG4vKiAtLSBJbXBvcnQgQ29tcG9uZW50IC0tICovXG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnR9IGZyb20gJy4uL3NwaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb3N0cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgIGNsYXNzPVwidWstd2lkdGgtbGFyZ2UtNS0xMCB1ay1jb250YWluZXItY2VudGVyXCIgKm5nRm9yPVwibGV0IHBvc3Qgb2YgcG9zdHM7IGxldCBpPWluZGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1ncmlkIHVrLW1hcmdpbi1sYXJnZSBwb3N0LWhvbGRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS0xLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LWltYWdlXCIgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiJ3VybCh1cGxvYWRzLycrcG9zdC5pZCsnLmpwZyknXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTQtNVwiPlxuICAgIFx0XHRcdFx0PGFydGljbGUgY2xhc3M9XCJ1ay1hcnRpY2xlXCI+XG4gICAgXHRcdFx0XHQgICAgPGgxIGNsYXNzPVwidWstYXJ0aWNsZS10aXRsZVwiPlxuICAgIFx0XHRcdFx0ICAgIFx0PGEgW3JvdXRlckxpbmtdPVwiWydwb3N0JywgcG9zdC5pZF1cIj5cbiAgICBcdFx0XHRcdCAgICBcdFx0e3sgcG9zdC50aXRsZSB9fVxuICAgIFx0XHRcdFx0ICAgIFx0PC9hPlxuICAgIFx0XHRcdFx0ICAgIDwvaDE+XG4gICAgXHRcdFx0XHQgICAgPHAgY2xhc3M9XCJ1ay1hcnRpY2xlLW1ldGFcIj5cbiAgICBcdFx0XHRcdCAgICBcdFBvc3RlZCBvbjoge3sgcG9zdC5jcmVhdGVkQXQgfCBkYXRlOlwiTU0vZGQveXlcIiB9fVxuICAgIFx0XHRcdFx0ICAgIDwvcD5cbiAgICBcdFx0XHQgICAgXHRcdHt7IHBvc3QuYm9keSB8IHN0cmlwSHRtbCB9fVxuICAgIFx0XHRcdFx0PC9hcnRpY2xlPlxuICAgIFx0XHRcdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXHRcdFx0PHNwaW5uZXIgW2lzTG9hZGluZ109aXNMb2FkaW5nPjwvc3Bpbm5lcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTcGlubmVyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXSxcbiAgICBwaXBlczogW1N0cmlwSHRtbF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3N0Q29tcG9uZW50IHtcblx0cG9zdHMgPSBbXTtcblx0aXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6IFBvc3RTZXJ2aWNlKSB7XG5cblx0fVxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0cygpXG5cdFx0XHQuc3Vic2NyaWJlKGpzb24gPT4ge1xuXHRcdFx0XHR0aGlzLnBvc3RzID0ganNvbi5wb3N0cztcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHR9KTtcblx0fVxufVxuIl19

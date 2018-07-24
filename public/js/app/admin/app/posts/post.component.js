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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wb3N0cy9wb3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCwrQkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUU1Qyw0QkFBNEI7QUFDNUIsa0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUFnQ3REO0lBR0MsdUJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRjdDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQVksSUFBSSxDQUFDO0lBRzFCLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2QsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQTFDRjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsdTZCQXNCVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFFLDBCQUFpQixDQUFDO1lBQ2pELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsQ0FBQztZQUN4QyxLQUFLLEVBQUUsQ0FBQywwQkFBUyxDQUFDO1NBQ3JCLENBQUM7O3FCQUFBO0lBZUYsb0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHFCQUFhLGdCQWF6QixDQUFBIiwiZmlsZSI6ImFkbWluL2FwcC9wb3N0cy9wb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTdHJpcEh0bWx9IGZyb20gJy4uL3N0cmlwaHRtbC5waXBlJztcblxuLyogLS0gSW1wb3J0IENvbXBvbmVudCAtLSAqL1xuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9zdHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2ICBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTUtMTAgdWstY29udGFpbmVyLWNlbnRlclwiICpuZ0Zvcj1cImxldCBwb3N0IG9mIHBvc3RzOyBsZXQgaT1pbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWstZ3JpZCB1ay1tYXJnaW4tbGFyZ2UgcG9zdC1ob2xkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstd2lkdGgtbGFyZ2UtMS01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdC1pbWFnZVwiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cIid1cmwodXBsb2Fkcy8nK3Bvc3QuaWQrJy5qcGcpJ1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS00LTVcIj5cbiAgICBcdFx0XHRcdDxhcnRpY2xlIGNsYXNzPVwidWstYXJ0aWNsZVwiPlxuICAgIFx0XHRcdFx0ICAgIDxoMSBjbGFzcz1cInVrLWFydGljbGUtdGl0bGVcIj5cbiAgICBcdFx0XHRcdCAgICBcdDxhIFtyb3V0ZXJMaW5rXT1cIlsncG9zdCcsIHBvc3QuaWRdXCI+XG4gICAgXHRcdFx0XHQgICAgXHRcdHt7IHBvc3QudGl0bGUgfX1cbiAgICBcdFx0XHRcdCAgICBcdDwvYT5cbiAgICBcdFx0XHRcdCAgICA8L2gxPlxuICAgIFx0XHRcdFx0ICAgIDxwIGNsYXNzPVwidWstYXJ0aWNsZS1tZXRhXCI+XG4gICAgXHRcdFx0XHQgICAgXHRQb3N0ZWQgb246IHt7IHBvc3QuY3JlYXRlZEF0IHwgZGF0ZTpcIk1NL2RkL3l5XCIgfX1cbiAgICBcdFx0XHRcdCAgICA8L3A+XG4gICAgXHRcdFx0ICAgIFx0XHR7eyBwb3N0LmJvZHkgfCBzdHJpcEh0bWwgfX1cbiAgICBcdFx0XHRcdDwvYXJ0aWNsZT5cbiAgICBcdFx0XHQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblx0XHRcdDxzcGlubmVyIFtpc0xvYWRpbmddPWlzTG9hZGluZz48L3NwaW5uZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbU3Bpbm5lckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1Bvc3RTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU10sXG4gICAgcGlwZXM6IFtTdHJpcEh0bWxdXG59KVxuXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCB7XG5cdHBvc3RzID0gW107XG5cdGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSkge1xuXG5cdH1cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxuXHRcdFx0LnN1YnNjcmliZShqc29uID0+IHtcblx0XHRcdFx0dGhpcy5wb3N0cyA9IGpzb24ucG9zdHM7XG5cdFx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==

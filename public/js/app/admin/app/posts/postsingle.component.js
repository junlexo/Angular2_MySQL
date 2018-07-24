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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wb3N0cy9wb3N0c2luZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyx1QkFBZ0QsaUJBQWlCLENBQUMsQ0FBQTtBQUVsRSw0QkFBNEI7QUFDNUIsaUNBQThCLHFCQUFxQixDQUFDLENBQUE7QUFDcEQsa0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUF1QnREO0lBSUMsNkJBQW9CLFlBQXlCLEVBQVUsWUFBNEI7UUFBL0QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFEbkYsY0FBUyxHQUFZLElBQUksQ0FBQztJQUcxQixDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNDOzs7O2FBSUs7UUFMTixpQkFnQkM7UUFURSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2lCQUN4QixTQUFTLENBQUUsVUFBQSxJQUFJO2dCQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUVOLENBQUM7SUFDQSx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBL0NIO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx5aUJBZVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLG9DQUFnQixFQUFFLDBCQUFpQixDQUFDO1lBQ2xFLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsQ0FBQztTQUMzQyxDQUFDOzsyQkFBQTtJQTRCRiwwQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksMkJBQW1CLHNCQTJCL0IsQ0FBQSIsImZpbGUiOiJhZG1pbi9hcHAvcG9zdHMvcG9zdHNpbmdsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyogLS0gSW1wb3J0IENvbXBvbmVudCAtLSAqL1xuaW1wb3J0IHtCYW5uZXJDb21wb25lbnR9IGZyb20gJy4uL2Jhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2luZ2xlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGJhbm5lciBbdGl0bGVdPVwiIGlzTG9hZGluZyA/ICcnIDogc2luZ2xlUG9zdC50aXRsZSBcIj48L2Jhbm5lcj5cbiAgICBcdDxkaXYgY2xhc3M9XCJ1ay1ncmlkXCIgKm5nSWY9XCJzaW5nbGVQb3N0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidWstd2lkdGgtbGFyZ2UtNS0xMCB1ay1jb250YWluZXItY2VudGVyXCI+XG5cdFx0XHRcdDxhcnRpY2xlIGNsYXNzPVwidWstYXJ0aWNsZVwiPlxuXHRcdFx0XHQgICAgPHAgY2xhc3M9XCJ1ay1hcnRpY2xlLW1ldGFcIj5cblx0XHRcdFx0ICAgIFx0e3sgc2luZ2xlUG9zdC5jcmVhdGVkQXQgfX1cblx0XHRcdFx0ICAgIDwvcD5cblx0XHRcdCAgICBcdDxkaXYgW2lubmVySFRNTF09XCJzaW5nbGVQb3N0LmJvZHlcIj48L2Rpdj5cblx0XHRcdCAgICBcdDxociBjbGFzcz1cInVrLWFydGljbGUtZGl2aWRlclwiPlxuXHRcdFx0ICAgIFx0Li4uXG5cdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxzcGlubmVyIFtpc0xvYWRpbmddPWlzTG9hZGluZz48L3NwaW5uZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQmFubmVyQ29tcG9uZW50LCBTcGlubmVyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0U2luZ2xlQ29tcG9uZW50IHtcblx0c2luZ2xlUG9zdDtcbiAgc3ViO1xuXHRpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTogUG9zdFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG5cdH1cblx0bmdPbkluaXQoKSB7XG5cdFx0Lyp0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0KHRoaXMuX3JvdXRlUGFyYW1zLmdldChcImlkXCIpKVxuXHRcdFx0LnN1YnNjcmliZShqc29uID0+IHtcblx0XHRcdFx0dGhpcy5zaW5nbGVQb3N0ID0ganNvbjtcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHR9KTsqL1xuXG4gICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZVBhcmFtcy5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdChpZClcbiAgICAgICAgICAuc3Vic2NyaWJlKCBqc29uID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlUG9zdCA9IGpzb24ucG9zdDtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG5cblx0fVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=

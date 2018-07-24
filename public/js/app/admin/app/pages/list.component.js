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
var banner_component_1 = require('../banner.component');
var http_1 = require('@angular/http');
var auth_service_1 = require('../auth.service');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var UserComponent = (function () {
    function UserComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
        this.title = 'List User';
        this.users = [];
    }
    UserComponent.prototype.removeUser = function (username) {
        var _this = this;
        this._authService.removeUser(username).subscribe(function (json) {
            if (json.remove)
                _this.loadList();
        });
        ;
    };
    UserComponent.prototype.ngOnInit = function () {
        this.loadList();
    };
    UserComponent.prototype.loadList = function () {
        var _this = this;
        this._authService.getUser()
            .subscribe(function (json) {
            _this.users = json.users;
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<banner [title]=\"title\"></banner>\n\t\t<div class=\"uk-grid\">\n\t\t\t<div class=\"uk-width-large-5-10 uk-container-center\">\n\t\t\t\t<div class=\"ItemList-wrapper\">\n\t\t\t\t\t<table class=\"Table ItemList\">\n\t\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t\t<col width=26 />\n\t\t\t\t\t\t</colgroup>\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=1></th>\n\t\t\t\t\t\t\t\t<th colspan=1>\n\t\t\t\t\t\t\t\t\t<button class=\"ItemList__sort-button th-sort th-sort--desc\" title=\"Sort by Name\">\n\t\t\t\t\t\t\t\t\t\tUsername\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th colspan=1>\n\t\t\t\t\t\t\t\t\t<button class=\"ItemList__sort-button th-sort th-sort--desc\" title=\"Sort by Email\">\n\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</th>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let user of users; let i=index\">\n\t\t\t\t\t\t\t\t<td class=\"ItemList__col--control ItemList__col--delete\">\n\t\t\t\t\t\t\t\t\t<a (click)=\"removeUser(user.username)\" data-placement=\"left\" rel=\"tooltip\" class=\"ItemList__control ItemList__control--delete\">X\u00F3a</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"ItemList__col\">\n\t\t\t\t\t\t\t\t\t<a routerLink='/user/{{user.username}}' class=\"ItemList__value ItemList__value--text ItemList__link--interior ItemList__link--padded ItemList__value--truncate\">{{user.username}}</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"ItemList__col\">\n\t\t\t\t\t\t\t\t\t<span>{{user.email}}</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\t\t\t\t\t\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            directives: [banner_component_1.BannerComponent, router_2.ROUTER_DIRECTIVES],
            providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wYWdlcy9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFFL0MsaUNBQThCLHFCQUM5QixDQUFDLENBRGtEO0FBQ25ELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw2QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsdUJBQWdDLGlCQUNoQyxDQUFDLENBRGdEO0FBK0NqRDtJQUdDLHVCQUFvQixNQUFjLEVBQVUsWUFBeUI7UUFBakQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRnJFLFVBQUssR0FBVyxXQUFXLENBQUM7UUFDNUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUdYLENBQUM7SUFDRCxrQ0FBVSxHQUFWLFVBQVcsUUFBUTtRQUFuQixpQkFLQztRQUpBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDbkQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDZCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDO0lBQ0wsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2FBQ3pCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDZCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBbEVGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxvc0RBeUNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSwwQkFBaUIsQ0FBQztZQUNoRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHFCQUFjLENBQUM7U0FDeEMsQ0FBQzs7cUJBQUE7SUFzQkYsb0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHFCQUFhLGdCQXFCekIsQ0FBQSIsImZpbGUiOiJhZG1pbi9hcHAvcGFnZXMvbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQge0Jhbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vYmFubmVyLmNvbXBvbmVudCdcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSdcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxiYW5uZXIgW3RpdGxlXT1cInRpdGxlXCI+PC9iYW5uZXI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwidWstZ3JpZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidWstd2lkdGgtbGFyZ2UtNS0xMCB1ay1jb250YWluZXItY2VudGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIkl0ZW1MaXN0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDx0YWJsZSBjbGFzcz1cIlRhYmxlIEl0ZW1MaXN0XCI+XHJcblx0XHRcdFx0XHRcdDxjb2xncm91cD5cclxuXHRcdFx0XHRcdFx0XHQ8Y29sIHdpZHRoPTI2IC8+XHJcblx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XHJcblx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggY29sc3Bhbj0xPjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggY29sc3Bhbj0xPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiSXRlbUxpc3RfX3NvcnQtYnV0dG9uIHRoLXNvcnQgdGgtc29ydC0tZGVzY1wiIHRpdGxlPVwiU29ydCBieSBOYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0VXNlcm5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIGNvbHNwYW49MT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIkl0ZW1MaXN0X19zb3J0LWJ1dHRvbiB0aC1zb3J0IHRoLXNvcnQtLWRlc2NcIiB0aXRsZT1cIlNvcnQgYnkgRW1haWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRFbWFpbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHQ8dHIgKm5nRm9yPVwibGV0IHVzZXIgb2YgdXNlcnM7IGxldCBpPWluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJJdGVtTGlzdF9fY29sLS1jb250cm9sIEl0ZW1MaXN0X19jb2wtLWRlbGV0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSAoY2xpY2spPVwicmVtb3ZlVXNlcih1c2VyLnVzZXJuYW1lKVwiIGRhdGEtcGxhY2VtZW50PVwibGVmdFwiIHJlbD1cInRvb2x0aXBcIiBjbGFzcz1cIkl0ZW1MaXN0X19jb250cm9sIEl0ZW1MaXN0X19jb250cm9sLS1kZWxldGVcIj5Yw7NhPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIkl0ZW1MaXN0X19jb2xcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgcm91dGVyTGluaz0nL3VzZXIve3t1c2VyLnVzZXJuYW1lfX0nIGNsYXNzPVwiSXRlbUxpc3RfX3ZhbHVlIEl0ZW1MaXN0X192YWx1ZS0tdGV4dCBJdGVtTGlzdF9fbGluay0taW50ZXJpb3IgSXRlbUxpc3RfX2xpbmstLXBhZGRlZCBJdGVtTGlzdF9fdmFsdWUtLXRydW5jYXRlXCI+e3t1c2VyLnVzZXJuYW1lfX08L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwiSXRlbUxpc3RfX2NvbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57e3VzZXIuZW1haWx9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdGAsXHJcblx0ZGlyZWN0aXZlczogW0Jhbm5lckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxyXG5cdHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnQge1xyXG5cdHRpdGxlOiBzdHJpbmcgPSAnTGlzdCBVc2VyJztcclxuXHR1c2VycyA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSApIHtcclxuXHJcblx0fVx0XHJcblx0cmVtb3ZlVXNlcih1c2VybmFtZSl7XHRcdFxyXG5cdFx0dGhpcy5fYXV0aFNlcnZpY2UucmVtb3ZlVXNlcih1c2VybmFtZSkuc3Vic2NyaWJlKGpzb24gPT4ge1xyXG5cdFx0XHRcdGlmKGpzb24ucmVtb3ZlKVxyXG5cdFx0XHRcdFx0dGhpcy5sb2FkTGlzdCgpO1xyXG5cdFx0fSk7O1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpe1xyXG5cdFx0dGhpcy5sb2FkTGlzdCgpO1xyXG5cdH1cclxuXHRsb2FkTGlzdCgpe1xyXG5cdFx0dGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpXHJcblx0XHRcdC5zdWJzY3JpYmUoanNvbiA9PiB7XHJcblx0XHRcdFx0dGhpcy51c2VycyA9IGpzb24udXNlcnM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19

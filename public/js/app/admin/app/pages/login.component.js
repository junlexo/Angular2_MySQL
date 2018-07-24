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
var LoginComponent = (function () {
    function LoginComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
        this.title = 'Login';
    }
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this._authService.signIn({ username: f.value.username, password: f.value.password })
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigate(['/create']);
        }, function (error) {
            console.error(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<banner [title]=\"title\"></banner>\n\t\t<div class=\"uk-grid\">\n\t\t\t<div class=\"uk-width-large-5-10 uk-container-center\">\n\t\t\t<form class=\"uk-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t\t<legend>Login Form</legend>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t<div [hidden]=\"username.valid || !username.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\tusername is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" required ngControl=\"username\" #username=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t\t<div [hidden]=\"password.valid || !password.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\t\tpassword is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"password\" required ngControl=\"password\" #password=\"ngForm\" placeholder=\"\" ngClass=\"uk-width-1-1\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"uk-button uk-margin-top\" type=\"submit\">login</button>\n\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t",
            directives: [banner_component_1.BannerComponent],
            providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wYWdlcy9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUNoQyxDQUFDLENBRDhDO0FBRS9DLGlDQUE4QixxQkFDOUIsQ0FBQyxDQURrRDtBQUNuRCxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsNkJBQTBCLGlCQUMxQixDQUFDLENBRDBDO0FBQzNDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBaUN2QztJQUVDLHdCQUFvQixNQUFjLEVBQVUsWUFBeUI7UUFBakQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRHJFLFVBQUssR0FBVyxPQUFPLENBQUM7SUFHeEIsQ0FBQztJQUNELGlDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQVYsaUJBWUM7UUFYQSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQzthQUMvRSxTQUFTLENBQ1QsVUFBQSxJQUFJO1lBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNELENBQUM7SUFDTCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFsREY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGltQ0EwQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsQ0FBQztTQUN4QyxDQUFDOztzQkFBQTtJQXFCRixxQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksc0JBQWMsaUJBb0IxQixDQUFBIiwiZmlsZSI6ImFkbWluL2FwcC9wYWdlcy9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50J1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cdFx0PGJhbm5lciBbdGl0bGVdPVwidGl0bGVcIj48L2Jhbm5lcj5cblx0XHQ8ZGl2IGNsYXNzPVwidWstZ3JpZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTUtMTAgdWstY29udGFpbmVyLWNlbnRlclwiPlxuXHRcdFx0PGZvcm0gY2xhc3M9XCJ1ay1mb3JtXCIgI2Y9XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIj5cblx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0PGxlZ2VuZD5Mb2dpbiBGb3JtPC9sZWdlbmQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJ1c2VybmFtZS52YWxpZCB8fCAhdXNlcm5hbWUudG91Y2hlZFwiIGNsYXNzPVwidWstYWxlcnRcIj5cblx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgaXMgcmVxdWlyZWRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuZ0NvbnRyb2w9XCJ1c2VybmFtZVwiICN1c2VybmFtZT1cIm5nRm9ybVwiIHBsYWNlaG9sZGVyPVwiXCIgW25nQ2xhc3NdPVwieyAndWstd2lkdGgtMS0xJzogdHJ1ZSB9XCI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IFtoaWRkZW5dPVwicGFzc3dvcmQudmFsaWQgfHwgIXBhc3N3b3JkLnRvdWNoZWRcIiBjbGFzcz1cInVrLWFsZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0cGFzc3dvcmQgaXMgcmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiICNwYXNzd29yZD1cIm5nRm9ybVwiIHBsYWNlaG9sZGVyPVwiXCIgbmdDbGFzcz1cInVrLXdpZHRoLTEtMVwiPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLW1hcmdpbi10b3BcIiB0eXBlPVwic3VibWl0XCI+bG9naW48L2J1dHRvbj5cblxuXHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0YCxcblx0ZGlyZWN0aXZlczogW0Jhbm5lckNvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXHR0aXRsZTogc3RyaW5nID0gJ0xvZ2luJztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlICkge1xuXG5cdH1cblx0b25TdWJtaXQoZikge1xuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25Jbih7dXNlcm5hbWU6IGYudmFsdWUudXNlcm5hbWUsIHBhc3N3b3JkOiBmLnZhbHVlLnBhc3N3b3JkfSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcblx0XHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZSddKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0fVxuXHRuZ09uSW5pdCgpe1xuXHR9XG59XG4iXX0=

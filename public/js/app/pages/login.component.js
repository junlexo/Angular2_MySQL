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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFFL0MsaUNBQThCLHFCQUM5QixDQUFDLENBRGtEO0FBQ25ELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw2QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFpQ3ZDO0lBRUMsd0JBQW9CLE1BQWMsRUFBVSxZQUF5QjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFEckUsVUFBSyxHQUFXLE9BQU8sQ0FBQztJQUd4QixDQUFDO0lBQ0QsaUNBQVEsR0FBUixVQUFTLENBQUM7UUFBVixpQkFZQztRQVhBLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxDQUFDO2FBQy9FLFNBQVMsQ0FDVCxVQUFBLElBQUk7WUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0QsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQWxERjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsaW1DQTBCVDtZQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxDQUFDO1NBQ3hDLENBQUM7O3NCQUFBO0lBcUJGLHFCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxzQkFBYyxpQkFvQjFCLENBQUEiLCJmaWxlIjoicGFnZXMvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQge0Jhbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vYmFubmVyLmNvbXBvbmVudCdcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxiYW5uZXIgW3RpdGxlXT1cInRpdGxlXCI+PC9iYW5uZXI+XG5cdFx0PGRpdiBjbGFzcz1cInVrLWdyaWRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIj5cblx0XHRcdDxmb3JtIGNsYXNzPVwidWstZm9ybVwiICNmPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCI+XG5cdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdDxsZWdlbmQ+TG9naW4gRm9ybTwvbGVnZW5kPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IFtoaWRkZW5dPVwidXNlcm5hbWUudmFsaWQgfHwgIXVzZXJuYW1lLnRvdWNoZWRcIiBjbGFzcz1cInVrLWFsZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdHVzZXJuYW1lIGlzIHJlcXVpcmVkXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmdDb250cm9sPVwidXNlcm5hbWVcIiAjdXNlcm5hbWU9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLTEtMSc6IHRydWUgfVwiPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBbaGlkZGVuXT1cInBhc3N3b3JkLnZhbGlkIHx8ICFwYXNzd29yZC50b3VjaGVkXCIgY2xhc3M9XCJ1ay1hbGVydFwiPlxuXHRcdFx0XHRcdFx0XHRcdHBhc3N3b3JkIGlzIHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgbmdDb250cm9sPVwicGFzc3dvcmRcIiAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIG5nQ2xhc3M9XCJ1ay13aWR0aC0xLTFcIj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1tYXJnaW4tdG9wXCIgdHlwZT1cInN1Ym1pdFwiPmxvZ2luPC9idXR0b24+XG5cblx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdGAsXG5cdGRpcmVjdGl2ZXM6IFtCYW5uZXJDb21wb25lbnRdLFxuXHRwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgSFRUUF9QUk9WSURFUlNdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblx0dGl0bGU6IHN0cmluZyA9ICdMb2dpbic7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSApIHtcblxuXHR9XG5cdG9uU3VibWl0KGYpIHtcblx0XHR0aGlzLl9hdXRoU2VydmljZS5zaWduSW4oe3VzZXJuYW1lOiBmLnZhbHVlLnVzZXJuYW1lLCBwYXNzd29yZDogZi52YWx1ZS5wYXNzd29yZH0pXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XG5cdFx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGUnXSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdH1cblx0bmdPbkluaXQoKXtcblx0fVxufVxuIl19

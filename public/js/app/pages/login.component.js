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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFFL0MsaUNBQThCLHFCQUM5QixDQUFDLENBRGtEO0FBQ25ELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw2QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFpQ3ZDO0lBRUMsd0JBQW9CLE1BQWMsRUFBVSxZQUF5QjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFEckUsVUFBSyxHQUFXLE9BQU8sQ0FBQztJQUd4QixDQUFDO0lBQ0QsaUNBQVEsR0FBUixVQUFTLENBQUM7UUFBVixpQkFZQztRQVhBLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxDQUFDO2FBQy9FLFNBQVMsQ0FDVCxVQUFBLElBQUk7WUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0QsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQWxERjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsaW1DQTBCVDtZQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxDQUFDO1NBQ3hDLENBQUM7O3NCQUFBO0lBcUJGLHFCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxzQkFBYyxpQkFvQjFCLENBQUEiLCJmaWxlIjoicGFnZXMvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcclxuaW1wb3J0IHtCYW5uZXJDb21wb25lbnR9IGZyb20gJy4uL2Jhbm5lci5jb21wb25lbnQnXHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxiYW5uZXIgW3RpdGxlXT1cInRpdGxlXCI+PC9iYW5uZXI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwidWstZ3JpZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidWstd2lkdGgtbGFyZ2UtNS0xMCB1ay1jb250YWluZXItY2VudGVyXCI+XHJcblx0XHRcdDxmb3JtIGNsYXNzPVwidWstZm9ybVwiICNmPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCI+XHJcblx0XHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0XHQ8bGVnZW5kPkxvZ2luIEZvcm08L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJ1c2VybmFtZS52YWxpZCB8fCAhdXNlcm5hbWUudG91Y2hlZFwiIGNsYXNzPVwidWstYWxlcnRcIj5cclxuXHRcdFx0XHRcdFx0XHR1c2VybmFtZSBpcyByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuZ0NvbnRyb2w9XCJ1c2VybmFtZVwiICN1c2VybmFtZT1cIm5nRm9ybVwiIHBsYWNlaG9sZGVyPVwiXCIgW25nQ2xhc3NdPVwieyAndWstd2lkdGgtMS0xJzogdHJ1ZSB9XCI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IFtoaWRkZW5dPVwicGFzc3dvcmQudmFsaWQgfHwgIXBhc3N3b3JkLnRvdWNoZWRcIiBjbGFzcz1cInVrLWFsZXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRwYXNzd29yZCBpcyByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiICNwYXNzd29yZD1cIm5nRm9ybVwiIHBsYWNlaG9sZGVyPVwiXCIgbmdDbGFzcz1cInVrLXdpZHRoLTEtMVwiPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1tYXJnaW4tdG9wXCIgdHlwZT1cInN1Ym1pdFwiPmxvZ2luPC9idXR0b24+XHJcblxyXG5cdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0YCxcclxuXHRkaXJlY3RpdmVzOiBbQmFubmVyQ29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgSFRUUF9QUk9WSURFUlNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcblx0dGl0bGU6IHN0cmluZyA9ICdMb2dpbic7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlICkge1xyXG5cclxuXHR9XHJcblx0b25TdWJtaXQoZikge1xyXG5cdFx0dGhpcy5fYXV0aFNlcnZpY2Uuc2lnbkluKHt1c2VybmFtZTogZi52YWx1ZS51c2VybmFtZSwgcGFzc3dvcmQ6IGYudmFsdWUucGFzc3dvcmR9KVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHRkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcblx0XHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZSddKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCl7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

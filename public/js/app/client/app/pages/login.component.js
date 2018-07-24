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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcGFnZXMvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFDaEMsQ0FBQyxDQUQ4QztBQUUvQyxpQ0FBOEIscUJBQzlCLENBQUMsQ0FEa0Q7QUFDbkQscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLDZCQUEwQixpQkFDMUIsQ0FBQyxDQUQwQztBQUMzQyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQWlDdkM7SUFFQyx3QkFBb0IsTUFBYyxFQUFVLFlBQXlCO1FBQWpELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQURyRSxVQUFLLEdBQVcsT0FBTyxDQUFDO0lBR3hCLENBQUM7SUFDRCxpQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUFWLGlCQVlDO1FBWEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDL0UsU0FBUyxDQUNULFVBQUEsSUFBSTtZQUNILFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUNELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBbERGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpbUNBMEJUO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHFCQUFjLENBQUM7U0FDeEMsQ0FBQzs7c0JBQUE7SUFxQkYscUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHNCQUFjLGlCQW9CMUIsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtCYW5uZXJDb21wb25lbnR9IGZyb20gJy4uL2Jhbm5lci5jb21wb25lbnQnXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSdcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8YmFubmVyIFt0aXRsZV09XCJ0aXRsZVwiPjwvYmFubmVyPlxuXHRcdDxkaXYgY2xhc3M9XCJ1ay1ncmlkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidWstd2lkdGgtbGFyZ2UtNS0xMCB1ay1jb250YWluZXItY2VudGVyXCI+XG5cdFx0XHQ8Zm9ybSBjbGFzcz1cInVrLWZvcm1cIiAjZj1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiPlxuXHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHQ8bGVnZW5kPkxvZ2luIEZvcm08L2xlZ2VuZD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBbaGlkZGVuXT1cInVzZXJuYW1lLnZhbGlkIHx8ICF1c2VybmFtZS50b3VjaGVkXCIgY2xhc3M9XCJ1ay1hbGVydFwiPlxuXHRcdFx0XHRcdFx0XHR1c2VybmFtZSBpcyByZXF1aXJlZFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIG5nQ29udHJvbD1cInVzZXJuYW1lXCIgI3VzZXJuYW1lPVwibmdGb3JtXCIgcGxhY2Vob2xkZXI9XCJcIiBbbmdDbGFzc109XCJ7ICd1ay13aWR0aC0xLTEnOiB0cnVlIH1cIj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJwYXNzd29yZC52YWxpZCB8fCAhcGFzc3dvcmQudG91Y2hlZFwiIGNsYXNzPVwidWstYWxlcnRcIj5cblx0XHRcdFx0XHRcdFx0XHRwYXNzd29yZCBpcyByZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIG5nQ29udHJvbD1cInBhc3N3b3JkXCIgI3Bhc3N3b3JkPVwibmdGb3JtXCIgcGxhY2Vob2xkZXI9XCJcIiBuZ0NsYXNzPVwidWstd2lkdGgtMS0xXCI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstbWFyZ2luLXRvcFwiIHR5cGU9XCJzdWJtaXRcIj5sb2dpbjwvYnV0dG9uPlxuXG5cdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbQmFubmVyQ29tcG9uZW50XSxcblx0cHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cdHRpdGxlOiBzdHJpbmcgPSAnTG9naW4nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UgKSB7XG5cblx0fVxuXHRvblN1Ym1pdChmKSB7XG5cdFx0dGhpcy5fYXV0aFNlcnZpY2Uuc2lnbkluKHt1c2VybmFtZTogZi52YWx1ZS51c2VybmFtZSwgcGFzc3dvcmQ6IGYudmFsdWUucGFzc3dvcmR9KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgZGF0YS51c2VySWQpO1xuXHRcdFx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlJ10pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHR9XG5cdG5nT25Jbml0KCl7XG5cdH1cbn1cbiJdfQ==

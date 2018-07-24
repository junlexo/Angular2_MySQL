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
var RegisterComponent = (function () {
    function RegisterComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
        this.title = 'Register';
    }
    RegisterComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this._authService.register({ username: f.value.username, email: f.value.email, password: f.value.password })
            .subscribe(function (data) {
            if (data)
                _this.saveSuccess = true;
            else
                _this.saveSuccess = false;
        }, function (error) {
            console.error(error);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<banner [title]=\"title\"></banner>\n\t\t<div class=\"uk-grid\">\n\t\t\t<div class=\"uk-width-large-5-10 uk-container-center\">\n\t\t\t<div class=\"alert alert-success\" *ngIf=\"saveSuccess\">\n\t\t\t    <strong>Success!</strong>\n\t\t\t</div>\n\t\t\t<form class=\"uk-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t\t<legend>Register Form</legend>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t<div [hidden]=\"username.valid || !username.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\tusername is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" required ngControl=\"username\" #username=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t<div [hidden]=\"email.valid || !email.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\temail is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" required ngControl=\"email\" #email=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t\t<div [hidden]=\"password.valid || !password.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\t\tpassword is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"password\" required ngControl=\"password\" #password=\"ngForm\" placeholder=\"\" ngClass=\"uk-width-1-1\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"uk-button uk-margin-top\" type=\"submit\">Register</button>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t",
            directives: [banner_component_1.BannerComponent],
            providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wYWdlcy9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUNoQyxDQUFDLENBRDhDO0FBRS9DLGlDQUE4QixxQkFDOUIsQ0FBQyxDQURrRDtBQUNuRCxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsNkJBQTBCLGlCQUMxQixDQUFDLENBRDBDO0FBQzNDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBeUN2QztJQUdDLDJCQUFvQixNQUFjLEVBQVUsWUFBeUI7UUFBakQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRnJFLFVBQUssR0FBVyxVQUFVLENBQUM7SUFJM0IsQ0FBQztJQUNELG9DQUFRLEdBQVIsVUFBUyxDQUFDO1FBQVYsaUJBYUM7UUFaQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDdkcsU0FBUyxDQUNULFVBQUEsSUFBSTtZQUNILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQztnQkFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJO2dCQUNILEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUNELG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBNURGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSx3aURBa0NUO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHFCQUFjLENBQUM7U0FDeEMsQ0FBQzs7eUJBQUE7SUF1QkYsd0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHlCQUFpQixvQkFzQjdCLENBQUEiLCJmaWxlIjoiYWRtaW4vYXBwL3BhZ2VzL3JlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50J1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJ1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8YmFubmVyIFt0aXRsZV09XCJ0aXRsZVwiPjwvYmFubmVyPlxyXG5cdFx0PGRpdiBjbGFzcz1cInVrLWdyaWRcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTUtMTAgdWstY29udGFpbmVyLWNlbnRlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiICpuZ0lmPVwic2F2ZVN1Y2Nlc3NcIj5cclxuXHRcdFx0ICAgIDxzdHJvbmc+U3VjY2VzcyE8L3N0cm9uZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxmb3JtIGNsYXNzPVwidWstZm9ybVwiICNmPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCI+XHJcblx0XHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0XHQ8bGVnZW5kPlJlZ2lzdGVyIEZvcm08L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJ1c2VybmFtZS52YWxpZCB8fCAhdXNlcm5hbWUudG91Y2hlZFwiIGNsYXNzPVwidWstYWxlcnRcIj5cclxuXHRcdFx0XHRcdFx0XHR1c2VybmFtZSBpcyByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuZ0NvbnRyb2w9XCJ1c2VybmFtZVwiICN1c2VybmFtZT1cIm5nRm9ybVwiIHBsYWNlaG9sZGVyPVwiXCIgW25nQ2xhc3NdPVwieyAndWstd2lkdGgtMS0xJzogdHJ1ZSB9XCI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBbaGlkZGVuXT1cImVtYWlsLnZhbGlkIHx8ICFlbWFpbC50b3VjaGVkXCIgY2xhc3M9XCJ1ay1hbGVydFwiPlxyXG5cdFx0XHRcdFx0XHRcdGVtYWlsIGlzIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIG5nQ29udHJvbD1cImVtYWlsXCIgI2VtYWlsPVwibmdGb3JtXCIgcGxhY2Vob2xkZXI9XCJcIiBbbmdDbGFzc109XCJ7ICd1ay13aWR0aC0xLTEnOiB0cnVlIH1cIj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJwYXNzd29yZC52YWxpZCB8fCAhcGFzc3dvcmQudG91Y2hlZFwiIGNsYXNzPVwidWstYWxlcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHBhc3N3b3JkIGlzIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIG5nQ29udHJvbD1cInBhc3N3b3JkXCIgI3Bhc3N3b3JkPVwibmdGb3JtXCIgcGxhY2Vob2xkZXI9XCJcIiBuZ0NsYXNzPVwidWstd2lkdGgtMS0xXCI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLW1hcmdpbi10b3BcIiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdGAsXHJcblx0ZGlyZWN0aXZlczogW0Jhbm5lckNvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQge1xyXG5cdHRpdGxlOiBzdHJpbmcgPSAnUmVnaXN0ZXInO1xyXG5cdHNhdmVTdWNjZXNzOiBib29sZWFuO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSApIHtcclxuXHJcblx0fVxyXG5cdG9uU3VibWl0KGYpIHtcclxuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLnJlZ2lzdGVyKHt1c2VybmFtZTogZi52YWx1ZS51c2VybmFtZSwgZW1haWw6IGYudmFsdWUuZW1haWwsIHBhc3N3b3JkOiBmLnZhbHVlLnBhc3N3b3JkfSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGRhdGEpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlU3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVTdWNjZXNzID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpe1xyXG5cdH1cclxufVxyXG4iXX0=

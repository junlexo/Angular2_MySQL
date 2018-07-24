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
var ChangeComponent = (function () {
    function ChangeComponent(router, _authService, _routeParams) {
        this.router = router;
        this._authService = _authService;
        this._routeParams = _routeParams;
        this.title = 'Change Account';
    }
    ChangeComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this._authService.changeAcount({ username: f.value.username, email: f.value.email, password: f.value.password })
            .subscribe(function (data) {
            if (data)
                _this.saveSuccess = true;
            else
                _this.saveSuccess = false;
        }, function (error) {
            console.error(error);
        });
    };
    ChangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._routeParams.params.subscribe(function (params) {
            var username = params['id'];
            console.log("username: " + username);
            _this._authService.getUserId(username)
                .subscribe(function (json) {
                _this.singleUser = json.user;
            });
        });
    };
    ChangeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ChangeComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<banner [title]=\"title\"></banner>\n\t\t<div class=\"uk-grid\">\n\t\t\t<div class=\"uk-width-large-5-10 uk-container-center\">\n\t\t\t<div class=\"alert alert-success\" *ngIf=\"saveSuccess\">\n\t\t\t    <strong>Success!</strong>\n\t\t\t</div>\n\t\t\t<form class=\"uk-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" *ngIf=\"singleUser\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t\t<legend>Register Form</legend>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t<div [hidden]=\"username.valid || !username.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\tusername is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" required ngControl=\"username\" #username=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\" [(ngModel)]='singleUser.username'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t<div [hidden]=\"email.valid || !email.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\temail is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" required [(ngModel)]='singleUser.email' ngControl=\"email\" #email=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t\t<div [hidden]=\"password.valid || !password.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\t\tpassword is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)]='singleUser.password' required ngControl=\"password\" #password=\"ngForm\" placeholder=\"\" ngClass=\"uk-width-1-1\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"uk-button uk-margin-top\" type=\"submit\">Register</button>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t",
            directives: [banner_component_1.BannerComponent],
            providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, router_1.ActivatedRoute])
    ], ChangeComponent);
    return ChangeComponent;
}());
exports.ChangeComponent = ChangeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wYWdlcy9lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFFL0MsaUNBQThCLHFCQUM5QixDQUFDLENBRGtEO0FBQ25ELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw2QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUF5Q3ZEO0lBS0MseUJBQW9CLE1BQWMsRUFBVSxZQUF5QixFQUFVLFlBQTRCO1FBQXZGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUozRyxVQUFLLEdBQVcsZ0JBQWdCLENBQUM7SUFNakMsQ0FBQztJQUNELGtDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQVYsaUJBYUM7UUFaQSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDM0csU0FBUyxDQUNULFVBQUEsSUFBSTtZQUNILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQztnQkFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJO2dCQUNILEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2lCQUNoQyxTQUFTLENBQUUsVUFBQSxJQUFJO2dCQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF6RUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdxREFrQ1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsQ0FBQztTQUN4QyxDQUFDOzt1QkFBQTtJQW9DRixzQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksdUJBQWUsa0JBbUMzQixDQUFBIiwiZmlsZSI6ImFkbWluL2FwcC9wYWdlcy9lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50J1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJ1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PGJhbm5lciBbdGl0bGVdPVwidGl0bGVcIj48L2Jhbm5lcj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ1ay1ncmlkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiAqbmdJZj1cInNhdmVTdWNjZXNzXCI+XHJcblx0XHRcdCAgICA8c3Ryb25nPlN1Y2Nlc3MhPC9zdHJvbmc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Zm9ybSBjbGFzcz1cInVrLWZvcm1cIiAjZj1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICpuZ0lmPVwic2luZ2xlVXNlclwiPlxyXG5cdFx0XHRcdDxmaWVsZHNldD5cclxuXHRcdFx0XHRcdFx0PGxlZ2VuZD5SZWdpc3RlciBGb3JtPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IFtoaWRkZW5dPVwidXNlcm5hbWUudmFsaWQgfHwgIXVzZXJuYW1lLnRvdWNoZWRcIiBjbGFzcz1cInVrLWFsZXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgaXMgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmdDb250cm9sPVwidXNlcm5hbWVcIiAjdXNlcm5hbWU9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLTEtMSc6IHRydWUgfVwiIFsobmdNb2RlbCldPSdzaW5nbGVVc2VyLnVzZXJuYW1lJz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IFtoaWRkZW5dPVwiZW1haWwudmFsaWQgfHwgIWVtYWlsLnRvdWNoZWRcIiBjbGFzcz1cInVrLWFsZXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0ZW1haWwgaXMgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09J3NpbmdsZVVzZXIuZW1haWwnIG5nQ29udHJvbD1cImVtYWlsXCIgI2VtYWlsPVwibmdGb3JtXCIgcGxhY2Vob2xkZXI9XCJcIiBbbmdDbGFzc109XCJ7ICd1ay13aWR0aC0xLTEnOiB0cnVlIH1cIj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJwYXNzd29yZC52YWxpZCB8fCAhcGFzc3dvcmQudG91Y2hlZFwiIGNsYXNzPVwidWstYWxlcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHBhc3N3b3JkIGlzIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFsobmdNb2RlbCldPSdzaW5nbGVVc2VyLnBhc3N3b3JkJyByZXF1aXJlZCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiICNwYXNzd29yZD1cIm5nRm9ybVwiIHBsYWNlaG9sZGVyPVwiXCIgbmdDbGFzcz1cInVrLXdpZHRoLTEtMVwiPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1tYXJnaW4tdG9wXCIgdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcblx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRgLFxyXG5cdGRpcmVjdGl2ZXM6IFtCYW5uZXJDb21wb25lbnRdLFxyXG5cdHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZUNvbXBvbmVudCB7XHJcblx0dGl0bGU6IHN0cmluZyA9ICdDaGFuZ2UgQWNjb3VudCc7XHJcblx0c3ViO1xyXG5cdHNpbmdsZVVzZXI7XHJcblx0c2F2ZVN1Y2Nlc3M6IGJvb2xlYW47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZVBhcmFtczogQWN0aXZhdGVkUm91dGUpIHtcclxuXHJcblx0fVxyXG5cdG9uU3VibWl0KGYpIHtcclxuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLmNoYW5nZUFjb3VudCh7dXNlcm5hbWU6IGYudmFsdWUudXNlcm5hbWUsIGVtYWlsOiBmLnZhbHVlLmVtYWlsLCBwYXNzd29yZDogZi52YWx1ZS5wYXNzd29yZH0pXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZihkYXRhKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZVN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlU3VjY2VzcyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHR9XHJcblx0bmdPbkluaXQoKXtcclxuXHRcdFx0dGhpcy5zdWIgPSB0aGlzLl9yb3V0ZVBhcmFtcy5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHRcdFx0XHJcblx0XHQgICAgICBsZXQgdXNlcm5hbWUgPSBwYXJhbXNbJ2lkJ107XHJcblx0XHQgICAgICBjb25zb2xlLmxvZyhcInVzZXJuYW1lOiBcIiArdXNlcm5hbWUpO1xyXG5cdFx0ICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcklkKHVzZXJuYW1lKVxyXG5cdFx0ICAgICAgICAgIC5zdWJzY3JpYmUoIGpzb24gPT4ge1xyXG5cdFx0ICAgICAgICAgICAgdGhpcy5zaW5nbGVVc2VyID0ganNvbi51c2VyO1xyXG5cdFx0ICAgICAgICAgIH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19

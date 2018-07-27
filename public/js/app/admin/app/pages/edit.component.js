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
            template: "\n\t\t<banner [title]=\"title\"></banner>\n\t\t<div class=\"uk-grid\">\n\t\t\t<div class=\"uk-width-large-5-10 uk-container-center\">\n\t\t\t<div class=\"alert alert-success\" *ngIf=\"saveSuccess\">\n\t\t\t    <strong>Success!</strong>\n\t\t\t</div>\n\t\t\t<form class=\"uk-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" *ngIf=\"singleUser\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t\t<legend>Register Form</legend>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t<div [hidden]=\"username.valid || !username.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\tusername is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" required ngControl=\"username\" #username=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\" [(ngModel)]='singleUser.username' disabled=true>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t<div [hidden]=\"email.valid || !email.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\temail is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" required [(ngModel)]='singleUser.email' ngControl=\"email\" #email=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"uk-form-row\">\n\t\t\t\t\t\t\t<div [hidden]=\"password.valid || !password.touched\" class=\"uk-alert\">\n\t\t\t\t\t\t\t\tpassword is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)]='singleUser.password' required ngControl=\"password\" #password=\"ngForm\" placeholder=\"\" ngClass=\"uk-width-1-1\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"uk-button uk-margin-top\" type=\"submit\">Register</button>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t",
            directives: [banner_component_1.BannerComponent],
            providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, router_1.ActivatedRoute])
    ], ChangeComponent);
    return ChangeComponent;
}());
exports.ChangeComponent = ChangeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wYWdlcy9lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFFL0MsaUNBQThCLHFCQUM5QixDQUFDLENBRGtEO0FBQ25ELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw2QkFBMEIsaUJBQzFCLENBQUMsQ0FEMEM7QUFDM0MsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUF5Q3ZEO0lBS0MseUJBQW9CLE1BQWMsRUFBVSxZQUF5QixFQUFVLFlBQTRCO1FBQXZGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUozRyxVQUFLLEdBQVcsZ0JBQWdCLENBQUM7SUFNakMsQ0FBQztJQUNELGtDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQVYsaUJBYUM7UUFaQSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUM7YUFDM0csU0FBUyxDQUNULFVBQUEsSUFBSTtZQUNILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQztnQkFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJO2dCQUNILEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2lCQUNoQyxTQUFTLENBQUUsVUFBQSxJQUFJO2dCQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF4RUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLDhxREFrQ1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsQ0FBQztTQUN4QyxDQUFDOzt1QkFBQTtJQW1DRixzQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksdUJBQWUsa0JBa0MzQixDQUFBIiwiZmlsZSI6ImFkbWluL2FwcC9wYWdlcy9lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50J1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJ1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PGJhbm5lciBbdGl0bGVdPVwidGl0bGVcIj48L2Jhbm5lcj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ1ay1ncmlkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiAqbmdJZj1cInNhdmVTdWNjZXNzXCI+XHJcblx0XHRcdCAgICA8c3Ryb25nPlN1Y2Nlc3MhPC9zdHJvbmc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Zm9ybSBjbGFzcz1cInVrLWZvcm1cIiAjZj1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICpuZ0lmPVwic2luZ2xlVXNlclwiPlxyXG5cdFx0XHRcdDxmaWVsZHNldD5cclxuXHRcdFx0XHRcdFx0PGxlZ2VuZD5SZWdpc3RlciBGb3JtPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IFtoaWRkZW5dPVwidXNlcm5hbWUudmFsaWQgfHwgIXVzZXJuYW1lLnRvdWNoZWRcIiBjbGFzcz1cInVrLWFsZXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0dXNlcm5hbWUgaXMgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmdDb250cm9sPVwidXNlcm5hbWVcIiAjdXNlcm5hbWU9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLTEtMSc6IHRydWUgfVwiIFsobmdNb2RlbCldPSdzaW5nbGVVc2VyLnVzZXJuYW1lJyBkaXNhYmxlZD10cnVlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJlbWFpbC52YWxpZCB8fCAhZW1haWwudG91Y2hlZFwiIGNsYXNzPVwidWstYWxlcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRlbWFpbCBpcyByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT0nc2luZ2xlVXNlci5lbWFpbCcgbmdDb250cm9sPVwiZW1haWxcIiAjZW1haWw9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLTEtMSc6IHRydWUgfVwiPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBbaGlkZGVuXT1cInBhc3N3b3JkLnZhbGlkIHx8ICFwYXNzd29yZC50b3VjaGVkXCIgY2xhc3M9XCJ1ay1hbGVydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0cGFzc3dvcmQgaXMgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgWyhuZ01vZGVsKV09J3NpbmdsZVVzZXIucGFzc3dvcmQnIHJlcXVpcmVkIG5nQ29udHJvbD1cInBhc3N3b3JkXCIgI3Bhc3N3b3JkPVwibmdGb3JtXCIgcGxhY2Vob2xkZXI9XCJcIiBuZ0NsYXNzPVwidWstd2lkdGgtMS0xXCI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLW1hcmdpbi10b3BcIiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdGAsXHJcblx0ZGlyZWN0aXZlczogW0Jhbm5lckNvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlQ29tcG9uZW50IHtcclxuXHR0aXRsZTogc3RyaW5nID0gJ0NoYW5nZSBBY2NvdW50JztcclxuXHRzdWI7XHJcblx0c2luZ2xlVXNlcjtcclxuXHRzYXZlU3VjY2VzczogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuXHR9XHJcblx0b25TdWJtaXQoZikge1xyXG5cdFx0dGhpcy5fYXV0aFNlcnZpY2UuY2hhbmdlQWNvdW50KHt1c2VybmFtZTogZi52YWx1ZS51c2VybmFtZSwgZW1haWw6IGYudmFsdWUuZW1haWwsIHBhc3N3b3JkOiBmLnZhbHVlLnBhc3N3b3JkfSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGRhdGEpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlU3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVTdWNjZXNzID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpe1xyXG5cdFx0XHR0aGlzLnN1YiA9IHRoaXMuX3JvdXRlUGFyYW1zLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcdFx0XHRcclxuXHRcdCAgICAgIGxldCB1c2VybmFtZSA9IHBhcmFtc1snaWQnXTtcdFx0ICAgICAgXHJcblx0XHQgICAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VySWQodXNlcm5hbWUpXHJcblx0XHQgICAgICAgICAgLnN1YnNjcmliZSgganNvbiA9PiB7XHJcblx0XHQgICAgICAgICAgICB0aGlzLnNpbmdsZVVzZXIgPSBqc29uLnVzZXI7XHJcblx0XHQgICAgICAgICAgfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=

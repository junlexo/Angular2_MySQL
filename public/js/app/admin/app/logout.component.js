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
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var http_1 = require('@angular/http');
var LogoutComponent = (function () {
    function LogoutComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this._authService.logOut();
        this.router.navigate(['']);
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: '<logout></logout>',
            template: '',
            providers: [auth_service_1.AuthService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9sb2dvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBUTdDO0lBQ0UseUJBQW9CLE1BQWMsRUFBVSxZQUF5QjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFDckUsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBWkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsQ0FBQztTQUN6QyxDQUFDOzt1QkFBQTtJQVVGLHNCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSx1QkFBZSxrQkFRM0IsQ0FBQSIsImZpbGUiOiJhZG1pbi9hcHAvbG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnPGxvZ291dD48L2xvZ291dD4nLFxuICB0ZW1wbGF0ZTogJycsXG4gIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dPdXQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgfVxuXG59XG4iXX0=

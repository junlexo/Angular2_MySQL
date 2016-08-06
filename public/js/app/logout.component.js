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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2Qyw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFRN0M7SUFDRSx5QkFBb0IsTUFBYyxFQUFVLFlBQXlCO1FBQWpELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUNyRSxDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFaSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxDQUFDO1NBQ3pDLENBQUM7O3VCQUFBO0lBVUYsc0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLHVCQUFlLGtCQVEzQixDQUFBIiwiZmlsZSI6ImxvZ291dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJzxsb2dvdXQ+PC9sb2dvdXQ+JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

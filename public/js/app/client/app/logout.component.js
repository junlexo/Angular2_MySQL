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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQVE3QztJQUNFLHlCQUFvQixNQUFjLEVBQVUsWUFBeUI7UUFBakQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQ3JFLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQVpIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHFCQUFjLENBQUM7U0FDekMsQ0FBQzs7dUJBQUE7SUFVRixzQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksdUJBQWUsa0JBUTNCLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICc8bG9nb3V0PjwvbG9nb3V0PicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ091dCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICB9XG5cbn1cbiJdfQ==

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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var core_1 = require('@angular/core');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.authenticated = false;
    }
    AuthService.prototype.signIn = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/users/signin', body, { headers: headers })
            .map(function (response) {
            if (response) {
                _this.authenticated = true;
            }
            return response.json();
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticated || localStorage.getItem('token');
    };
    AuthService.prototype.logOut = function () {
        localStorage.clear();
        this.authenticated = false;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDO0lBRUMscUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRC9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBRy9CLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBUztRQUFoQixpQkFVRTtRQVRDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDMUUsR0FBRyxDQUFFLFVBQUEsUUFBUTtZQUNwQixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUVGLHFDQUFlLEdBQWY7UUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRiw0QkFBTSxHQUFOO1FBQ0MsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUExQkY7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTJCYixrQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksbUJBQVcsY0EwQnZCLENBQUEiLCJmaWxlIjoiYWRtaW4vYXBwL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXHRhdXRoZW50aWNhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcblxuXHR9XG5cblx0c2lnbkluKHVzZXI6IGFueSkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzL3NpZ25pbicsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgICAgIC5tYXAoIHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdFx0XHQgaWYocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdFx0XHRcdCB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdCB9XG5cdFx0XHRcdFx0XHRcdFx0IHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRcdFx0XHRcdCB9KVxuICB9XG5cblx0aXNBdXRoZW50aWNhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gIH1cblxuXHRsb2dPdXQoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0dGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cdH1cbn1cbiJdfQ==

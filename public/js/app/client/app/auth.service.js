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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUd6QztJQUVDLHFCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUQvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztJQUcvQixDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLElBQVM7UUFBaEIsaUJBVUU7UUFUQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzFFLEdBQUcsQ0FBRSxVQUFBLFFBQVE7WUFDcEIsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMzQixDQUFDO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNSLENBQUM7SUFFRixxQ0FBZSxHQUFmO1FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUYsNEJBQU0sR0FBTjtRQUNDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBMUJGO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUEyQmIsa0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLG1CQUFXLGNBMEJ2QixDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cdGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuXG5cdH1cblxuXHRzaWduSW4odXNlcjogYW55KSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvc2lnbmluJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgICAgLm1hcCggcmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCBpZihyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0IHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0XHRcdFx0IH0pXG4gIH1cblxuXHRpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgfVxuXG5cdGxvZ091dCgpIHtcblx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHR0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblx0fVxufVxuIl19

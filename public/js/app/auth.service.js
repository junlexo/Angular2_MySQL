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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFFQyxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFEL0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFHL0IsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFTO1FBQWhCLGlCQVVFO1FBVEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUMxRSxHQUFHLENBQUUsVUFBQSxRQUFRO1lBQ3BCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBRUYscUNBQWUsR0FBZjtRQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVGLDRCQUFNLEdBQU47UUFDQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQTFCRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBMkJiLGtCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxtQkFBVyxjQTBCdkIsQ0FBQSIsImZpbGUiOiJhdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblx0YXV0aGVudGljYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XG5cblx0fVxuXG5cdHNpZ25Jbih1c2VyOiBhbnkpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy9zaWduaW4nLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAgICAubWFwKCByZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0IGlmKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHQgfVxuXHRcdFx0XHRcdFx0XHRcdCByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHRcdFx0XHQgfSlcbiAgfVxuXG5cdGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICB9XG5cblx0bG9nT3V0KCkge1xuXHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXHR9XG59XG4iXX0=

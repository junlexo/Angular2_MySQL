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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFFQyxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFEL0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFHL0IsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFTO1FBQWhCLGlCQVVFO1FBVEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUMxRSxHQUFHLENBQUUsVUFBQSxRQUFRO1lBQ3BCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDUixDQUFDO0lBRUYscUNBQWUsR0FBZjtRQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVGLDRCQUFNLEdBQU47UUFDQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQTFCRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBMkJiLGtCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxtQkFBVyxjQTBCdkIsQ0FBQSIsImZpbGUiOiJhdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcblx0YXV0aGVudGljYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuXHJcblx0fVxyXG5cclxuXHRzaWduSW4odXNlcjogYW55KSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvc2lnbmluJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgICAubWFwKCByZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHQgaWYocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0IHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdFx0XHRcdFx0IH0pXHJcbiAgfVxyXG5cclxuXHRpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gIH1cclxuXHJcblx0bG9nT3V0KCkge1xyXG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHR0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

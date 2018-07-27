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
    AuthService.prototype.register = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/users/register', body, { headers: headers })
            .map(function (response) {
            return response.json();
        });
    };
    AuthService.prototype.getUserId = function (id) {
        return this._http.get("http://localhost:3000/users/single/" + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUser = function () {
        return this._http.get("http://localhost:3000/users/all")
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.removeUser = function (username) {
        return this._http.get("http://localhost:3000/users/remove/" + username)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changeAcount = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/users/update', body, { headers: headers })
            .map(function (response) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUMxRSxHQUFHLENBQUUsVUFBQSxRQUFRO1lBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QscUNBQWUsR0FBZjtRQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVGLDRCQUFNLEdBQU47UUFDQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQXZERjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBd0RiLGtCQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQTtBQXZEWSxtQkFBVyxjQXVEdkIsQ0FBQSIsImZpbGUiOiJhZG1pbi9hcHAvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cdGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuXG5cdH1cblxuXHRzaWduSW4odXNlcjogYW55KSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvc2lnbmluJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgICAgLm1hcCggcmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCBpZihyZXNwb25zZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0IHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0IH1cblx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0XHRcdFx0IH0pXG4gIH1cbiAgcmVnaXN0ZXIodXNlcjogYW55KVxuICB7XG4gIFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvcmVnaXN0ZXInLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAgICAubWFwKCByZXNwb25zZSA9PiB7XHRcdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0XHRcdFx0IH0pO1xuICB9XG4gIGdldFVzZXJJZChpZCl7XG4gIFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzL3NpbmdsZS9cIitpZClcblx0XHRcdFx0ICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICBnZXRVc2VyKCl7XG4gIFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzL2FsbFwiKVxuXHRcdFx0XHQgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgfVxuICByZW1vdmVVc2VyKHVzZXJuYW1lKXtcblx0ICBcdHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy9yZW1vdmUvXCIrdXNlcm5hbWUpXG5cdFx0XHRcdFx0ICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHRcblx0fVxuXHRjaGFuZ2VBY291bnQodXNlcjogYW55KXtcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG5cdCAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cdCAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvdXBkYXRlJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuXHQgICAgICAgICAgICAgICAubWFwKCByZXNwb25zZSA9PiB7XHRcdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdFx0XHRcdCByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHRcdFx0XHRcdCB9KTtcblx0fVxuXHRpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgfVxuXG5cdGxvZ091dCgpIHtcblx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHR0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblx0fVxufVxuIl19

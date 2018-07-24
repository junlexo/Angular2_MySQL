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
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
    }
    PostService.prototype.getPost = function (id) {
        return this._http.get("http://localhost:3000/posts/single/" + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPosts = function () {
        return this._http.get("http://localhost:3000/posts/all")
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.createPost = function (post) {
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        var body = JSON.stringify(post);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/posts/createpost' + '?token=' + token, body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcG9zdHMvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUd6QztJQUNDLHFCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUUvQixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQUU7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUMsRUFBRSxDQUFDO2FBQ3pELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQzthQUNsRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxJQUFTO1FBRW5CLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFL0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsd0NBQXdDLEdBQUcsU0FBUyxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDbEcsR0FBRyxDQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUF6QkY7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTJCYixrQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksbUJBQVcsY0EwQnZCLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9wb3N0cy9wb3N0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuXG5cdH1cblxuXHRnZXRQb3N0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzL3NpbmdsZS9cIitpZClcblx0XHRcdFx0ICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHRnZXRQb3N0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvYWxsXCIpXG5cdFx0XHRcdCAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cblx0Y3JlYXRlUG9zdChwb3N0OiBhbnkpIHtcblxuXHRcdHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcblxuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb3N0KTtcblx0XHRjb25zb2xlLmxvZyhib2R5KTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzL2NyZWF0ZXBvc3QnICsgJz90b2tlbj0nICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgICAgIC5tYXAoIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cdH1cblxufVxuIl19

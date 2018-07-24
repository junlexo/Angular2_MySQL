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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wb3N0cy9wb3N0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBR3pDO0lBQ0MscUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBRS9CLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBRTtRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBQyxFQUFFLENBQUM7YUFDekQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO2FBQ2xELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVM7UUFFbkIsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUUvRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsR0FBRyxTQUFTLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNsRyxHQUFHLENBQUUsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQXpCRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBMkJiLGtCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxtQkFBVyxjQTBCdkIsQ0FBQSIsImZpbGUiOiJhZG1pbi9hcHAvcG9zdHMvcG9zdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcblxuXHR9XG5cblx0Z2V0UG9zdChpZCkge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cy9zaW5nbGUvXCIraWQpXG5cdFx0XHRcdCAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cblx0Z2V0UG9zdHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzL2FsbFwiKVxuXHRcdFx0XHQgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXG5cdGNyZWF0ZVBvc3QocG9zdDogYW55KSB7XG5cblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XG5cblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9zdCk7XG5cdFx0Y29uc29sZS5sb2coYm9keSk7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cy9jcmVhdGVwb3N0JyArICc/dG9rZW49JyArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAgICAubWFwKCByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuXHR9XG5cbn1cbiJdfQ==

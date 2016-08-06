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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFDQyxxQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFFL0IsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFDLEVBQUUsQ0FBQzthQUN6RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUM7YUFDbEQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUVuQixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRS9FLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxHQUFHLFNBQVMsR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ2xHLEdBQUcsQ0FBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBekJGO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUEyQmIsa0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLG1CQUFXLGNBMEJ2QixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0UG9zdChpZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzL3NpbmdsZS9cIitpZClcclxuXHRcdFx0XHQgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdGdldFBvc3RzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzL2FsbFwiKVxyXG5cdFx0XHRcdCAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUG9zdChwb3N0OiBhbnkpIHtcclxuXHJcblx0XHR2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyc7XHJcblxyXG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvc3QpO1xyXG5cdFx0Y29uc29sZS5sb2coYm9keSk7XHJcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvY3JlYXRlcG9zdCcgKyAnP3Rva2VuPScgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgICAubWFwKCByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

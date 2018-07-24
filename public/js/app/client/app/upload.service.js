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
var Rx_1 = require('rxjs/Rx');
var UploadService = (function () {
    function UploadService() {
        var _this = this;
        this.progress = Rx_1.Observable.create(function (observer) {
            _this.progressObserver = observer;
        }).share();
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, id) {
        var _this = this;
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
        return Rx_1.Observable.create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            for (var i = 0; i < 1; i++) {
                var lp = files[i].name.lastIndexOf('.');
                var name = files[i].name.slice(lp, files[i].name.length);
                formData.append("uploads", files[i], id + name);
            }
            formData.append('id', id);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                _this.progressObserver.next(_this.progress);
            };
            xhr.open('POST', url + '?token=' + token, true);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvdXBsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxtQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFHbkM7SUFHRTtRQUhGLGlCQThDQztRQTFDRyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQ3hDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFpQixHQUFXLEVBQUUsTUFBZ0IsRUFBRSxLQUFhLEVBQUUsRUFBVTtRQUF6RSxpQkFvQ0M7UUFsQ0MsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUUvRSxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDL0IsSUFBSSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsRUFDckMsR0FBRyxHQUFtQixJQUFJLGNBQWMsRUFBRSxDQUFDO1lBRTdDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFMUIsR0FBRyxDQUFDLGtCQUFrQixHQUFHO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQUMsS0FBSztnQkFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFFN0QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLFNBQVMsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5Q0g7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQStDYixvQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1kscUJBQWEsZ0JBOEN6QixDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvdXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xuICBwcm9ncmVzcztcbiAgcHJvZ3Jlc3NPYnNlcnZlcjtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICB0aGlzLnByb2dyZXNzT2JzZXJ2ZXIgPSBvYnNlcnZlclxuICAgIH0pLnNoYXJlKCk7XG4gIH1cblxuICBtYWtlRmlsZVJlcXVlc3QgKHVybDogc3RyaW5nLCBwYXJhbXM6IHN0cmluZ1tdLCBmaWxlczogRmlsZVtdLCBpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcblxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBsZXQgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksXG4gICAgICAgIHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgdmFyIGxwID0gZmlsZXNbaV0ubmFtZS5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICB2YXIgbmFtZSA9IGZpbGVzW2ldLm5hbWUuc2xpY2UobHAsIGZpbGVzW2ldLm5hbWUubGVuZ3RoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2Fkc1wiLCBmaWxlc1tpXSwgaWQrbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCBpZCk7XG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDApO1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NPYnNlcnZlci5uZXh0KHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwgKyAnP3Rva2VuPScgKyB0b2tlbiwgdHJ1ZSk7XG4gICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

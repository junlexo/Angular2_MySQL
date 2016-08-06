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

//# sourceMappingURL=data:application/json;base64,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QUMsaUJBQVUsRUFBRTs7cUJBQUE7SUErQ2Isb0JBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBOUNZLHFCQUFhLGdCQThDekIsQ0FBQSIsImZpbGUiOiJ1cGxvYWQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRTZXJ2aWNlIHtcclxuICBwcm9ncmVzcztcclxuICBwcm9ncmVzc09ic2VydmVyO1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NPYnNlcnZlciA9IG9ic2VydmVyXHJcbiAgICB9KS5zaGFyZSgpO1xyXG4gIH1cclxuXHJcbiAgbWFrZUZpbGVSZXF1ZXN0ICh1cmw6IHN0cmluZywgcGFyYW1zOiBzdHJpbmdbXSwgZmlsZXM6IEZpbGVbXSwgaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG5cclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSxcclxuICAgICAgICB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgICAgIHZhciBscCA9IGZpbGVzW2ldLm5hbWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICB2YXIgbmFtZSA9IGZpbGVzW2ldLm5hbWUuc2xpY2UobHAsIGZpbGVzW2ldLm5hbWUubGVuZ3RoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRzXCIsIGZpbGVzW2ldLCBpZCtuYW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIGlkKTtcclxuXHJcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDApO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyZXNzT2JzZXJ2ZXIubmV4dCh0aGlzLnByb2dyZXNzKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsICsgJz90b2tlbj0nICsgdG9rZW4sIHRydWUpO1xyXG4gICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

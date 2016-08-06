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
var post_service_1 = require('./post.service');
var auth_service_1 = require('../auth.service');
var router_1 = require('@angular/router');
var upload_service_1 = require('../upload.service');
var http_1 = require('@angular/http');
var tinymce_1 = require('../tinymce');
/* -- Import Component -- */
var banner_component_1 = require('../banner.component');
var spinner_component_1 = require('../spinner.component');
var PostCreateComponent = (function () {
    function PostCreateComponent(router, _authService, _postService, _uploadService) {
        this.router = router;
        this._authService = _authService;
        this._postService = _postService;
        this._uploadService = _uploadService;
        this.bannerTitle = "Create New Post";
        this.postCreated = false;
        this.isLoading = false;
        if (!this._authService.isAuthenticated()) {
            this.router.navigate(['']);
        }
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        this._uploadService.progress.subscribe(function (data) {
            console.log('progress = ' + data);
        });
    };
    PostCreateComponent.prototype.ngOnDestroy = function () {
    };
    PostCreateComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this._postService.createPost({ 'title': f.value.title, 'body': f.value.body })
            .subscribe(function (data) {
            console.log(data.post);
            _this._uploadService.makeFileRequest('http://localhost:3000/posts/upload', [], _this.files, data.post.id).subscribe(function (data) {
                console.log('sent');
                _this.postCreated = true;
            });
        }, function (error) {
            console.error(error);
        });
    };
    PostCreateComponent.prototype.onChange = function (event) {
        console.log('onChange');
        this.files = event.srcElement.files;
        console.log(this.files);
    };
    PostCreateComponent = __decorate([
        core_1.Component({
            selector: 'create',
            template: "\n    \t<banner [title]=\"bannerTitle\"></banner>\n      <div class=\"uk-grid\">\n  \t\t\t<div class=\"uk-width-large-5-10 uk-container-center\">\n        <div class=\"uk-alert\" [hidden]=\"!postCreated\">\n          Post Created Successfully!\n        </div>\n  \t\t\t<form #f=\"ngForm\" class=\"uk-form uk-margin-large-bottom\" (ngSubmit)=\"onSubmit(f)\">\n  \t\t\t\t<fieldset>\n  \t\t\t\t\t\t<legend> <h2> Create Post Form </h2> </legend>\n  \t\t\t\t\t\t<div class=\"uk-form-row\">\n  \t\t\t\t\t\t\t<input type=\"text\" required=\"required\" ngControl=\"title\" #title=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-form-large': true }\">\n  \t\t\t\t\t\t</div>\n\n              <div class=\"uk-form-row\">\n  \t\t\t\t\t\t\t<textarea required=\"required\" [tinyMce]=\"f\" ngControl=\"body\" #body=\"ngForm\" placeholder=\"\" [ngClass]=\"{ 'uk-width-1-1': true }\"></textarea>\n  \t\t\t\t\t\t</div>\n              <div class=\"uk-form-row\">\n                <input type=\"file\" required=\"required\" (change)=\"onChange($event)\"/>\n              </div>\n  \t\t\t\t\t\t<button class=\"uk-button uk-margin-top\" type=\"submit\">login</button>\n  \t\t\t\t</fieldset>\n  \t\t\t</form>\n  \t\t\t</div>\n  \t\t</div>\n\t\t  <spinner [isLoading]=isLoading></spinner>\n    ",
            directives: [banner_component_1.BannerComponent, spinner_component_1.SpinnerComponent, tinymce_1.TinyEditor],
            providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS, upload_service_1.UploadService, auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, post_service_1.PostService, upload_service_1.UploadService])
    ], PostCreateComponent);
    return PostCreateComponent;
}());
exports.PostCreateComponent = PostCreateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RjcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsK0JBQTRCLG1CQUFtQixDQUFDLENBQUE7QUFDaEQscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRTdDLHdCQUF5QixZQUFZLENBQUMsQ0FBQTtBQUV0Qyw0QkFBNEI7QUFDNUIsaUNBQThCLHFCQUFxQixDQUFDLENBQUE7QUFDcEQsa0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUFtQ3REO0lBTUMsNkJBQW9CLE1BQWMsRUFBVSxZQUF5QixFQUFVLFlBQXlCLEVBQVUsY0FBNkI7UUFBM0gsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUw5SSxnQkFBVyxHQUFXLGlCQUFpQixDQUFDO1FBQ3hDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTlCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHeEIsRUFBRSxDQUFBLENBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFDRixzQ0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQyxVQUFBLElBQUk7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDQSx5Q0FBVyxHQUFYO0lBRUEsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQVYsaUJBZUE7UUFkQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQzthQUN6RSxTQUFTLENBQ1QsVUFBQSxJQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsb0NBQW9DLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUNwSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUVWLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUNBLHNDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUExRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDR2Q0EwQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLG9DQUFnQixFQUFFLG9CQUFVLENBQUM7WUFDM0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxFQUFFLDhCQUFhLEVBQUUsMEJBQVcsQ0FBQztTQUN2RSxDQUFDOzsyQkFBQTtJQTRDRiwwQkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksMkJBQW1CLHNCQTBDL0IsQ0FBQSIsImZpbGUiOiJwb3N0cy9wb3N0Y3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7VXBsb2FkU2VydmljZX0gZnJvbSAnLi4vdXBsb2FkLnNlcnZpY2UnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7VGlueUVkaXRvcn0gZnJvbSAnLi4vdGlueW1jZSc7XHJcblxyXG4vKiAtLSBJbXBvcnQgQ29tcG9uZW50IC0tICovXHJcbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuLi9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY3JlYXRlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBcdDxiYW5uZXIgW3RpdGxlXT1cImJhbm5lclRpdGxlXCI+PC9iYW5uZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ1ay1ncmlkXCI+XHJcbiAgXHRcdFx0PGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTUtMTAgdWstY29udGFpbmVyLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1hbGVydFwiIFtoaWRkZW5dPVwiIXBvc3RDcmVhdGVkXCI+XHJcbiAgICAgICAgICBQb3N0IENyZWF0ZWQgU3VjY2Vzc2Z1bGx5IVxyXG4gICAgICAgIDwvZGl2PlxyXG4gIFx0XHRcdDxmb3JtICNmPVwibmdGb3JtXCIgY2xhc3M9XCJ1ay1mb3JtIHVrLW1hcmdpbi1sYXJnZS1ib3R0b21cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIj5cclxuICBcdFx0XHRcdDxmaWVsZHNldD5cclxuICBcdFx0XHRcdFx0XHQ8bGVnZW5kPiA8aDI+IENyZWF0ZSBQb3N0IEZvcm0gPC9oMj4gPC9sZWdlbmQ+XHJcbiAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XHJcbiAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgbmdDb250cm9sPVwidGl0bGVcIiAjdGl0bGU9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLWZvcm0tbGFyZ2UnOiB0cnVlIH1cIj5cclxuICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XHJcbiAgXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIFt0aW55TWNlXT1cImZcIiBuZ0NvbnRyb2w9XCJib2R5XCIgI2JvZHk9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLTEtMSc6IHRydWUgfVwiPjwvdGV4dGFyZWE+XHJcbiAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstbWFyZ2luLXRvcFwiIHR5cGU9XCJzdWJtaXRcIj5sb2dpbjwvYnV0dG9uPlxyXG4gIFx0XHRcdFx0PC9maWVsZHNldD5cclxuICBcdFx0XHQ8L2Zvcm0+XHJcbiAgXHRcdFx0PC9kaXY+XHJcbiAgXHRcdDwvZGl2PlxyXG5cdFx0ICA8c3Bpbm5lciBbaXNMb2FkaW5nXT1pc0xvYWRpbmc+PC9zcGlubmVyPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtCYW5uZXJDb21wb25lbnQsIFNwaW5uZXJDb21wb25lbnQsIFRpbnlFZGl0b3JdLFxyXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2UsIEhUVFBfUFJPVklERVJTLCBVcGxvYWRTZXJ2aWNlLCBBdXRoU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0Q3JlYXRlQ29tcG9uZW50IHtcclxuICBiYW5uZXJUaXRsZTogc3RyaW5nID0gXCJDcmVhdGUgTmV3IFBvc3RcIjtcclxuICBwb3N0Q3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGZpbGVzOiBGaWxlW107XHJcblx0aXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfcG9zdFNlcnZpY2U6IFBvc3RTZXJ2aWNlLCBwcml2YXRlIF91cGxvYWRTZXJ2aWNlOiBVcGxvYWRTZXJ2aWNlKSB7XHJcbiAgICBpZiggIXRoaXMuX2F1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHRuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3VwbG9hZFNlcnZpY2UucHJvZ3Jlc3Muc3Vic2NyaWJlKFxyXG4gICAgIGRhdGEgPT4ge1xyXG4gICAgICAgY29uc29sZS5sb2coJ3Byb2dyZXNzID0gJytkYXRhKTtcclxuICAgICB9KTtcclxuXHR9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoZikge1xyXG5cdFx0dGhpcy5fcG9zdFNlcnZpY2UuY3JlYXRlUG9zdCh7J3RpdGxlJzogZi52YWx1ZS50aXRsZSwgJ2JvZHknOiBmLnZhbHVlLmJvZHl9KVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHRkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5wb3N0KTtcclxuICAgICAgICAgICAgdGhpcy5fdXBsb2FkU2VydmljZS5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cy91cGxvYWQnLCBbXSwgdGhpcy5maWxlcywgZGF0YS5wb3N0LmlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbnQnKTtcclxuICAgICAgICAgICAgICB0aGlzLnBvc3RDcmVhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHR9XHJcbiAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZScpO1xyXG4gICAgdGhpcy5maWxlcyA9IGV2ZW50LnNyY0VsZW1lbnQuZmlsZXM7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

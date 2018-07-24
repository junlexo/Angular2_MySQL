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
        // if( !this._authService.isAuthenticated()) {
        //   this.router.navigate(['']);
        // }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcG9zdHMvcG9zdGNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUN2RSw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw2QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QywrQkFBNEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNoRCxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFFN0Msd0JBQXlCLFlBQVksQ0FBQyxDQUFBO0FBRXRDLDRCQUE0QjtBQUM1QixpQ0FBOEIscUJBQXFCLENBQUMsQ0FBQTtBQUNwRCxrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQW1DdEQ7SUFNQyw2QkFBb0IsTUFBYyxFQUFVLFlBQXlCLEVBQVUsWUFBeUIsRUFBVSxjQUE2QjtRQUEzSCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBTDlJLGdCQUFXLEdBQVcsaUJBQWlCLENBQUM7UUFDeEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFOUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd4Qiw4Q0FBOEM7UUFDOUMsZ0NBQWdDO1FBQ2hDLElBQUk7SUFDTixDQUFDO0lBQ0Ysc0NBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckMsVUFBQSxJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0EseUNBQVcsR0FBWDtJQUVBLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUFWLGlCQWVBO1FBZEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUM7YUFDekUsU0FBUyxDQUNULFVBQUEsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDcEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFVixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0QsQ0FBQztJQUNMLENBQUM7SUFDQSxzQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBMUVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw0dkNBMEJUO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSxvQ0FBZ0IsRUFBRSxvQkFBVSxDQUFDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUscUJBQWMsRUFBRSw4QkFBYSxFQUFFLDBCQUFXLENBQUM7U0FDdkUsQ0FBQzs7MkJBQUE7SUE0Q0YsMEJBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBMUNZLDJCQUFtQixzQkEwQy9CLENBQUEiLCJmaWxlIjoiY2xpZW50L2FwcC9wb3N0cy9wb3N0Y3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tICcuL3Bvc3Quc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1VwbG9hZFNlcnZpY2V9IGZyb20gJy4uL3VwbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1RpbnlFZGl0b3J9IGZyb20gJy4uL3RpbnltY2UnO1xuXG4vKiAtLSBJbXBvcnQgQ29tcG9uZW50IC0tICovXG5pbXBvcnQge0Jhbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnR9IGZyb20gJy4uL3NwaW5uZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcmVhdGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8YmFubmVyIFt0aXRsZV09XCJiYW5uZXJUaXRsZVwiPjwvYmFubmVyPlxuICAgICAgPGRpdiBjbGFzcz1cInVrLWdyaWRcIj5cbiAgXHRcdFx0PGRpdiBjbGFzcz1cInVrLXdpZHRoLWxhcmdlLTUtMTAgdWstY29udGFpbmVyLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWstYWxlcnRcIiBbaGlkZGVuXT1cIiFwb3N0Q3JlYXRlZFwiPlxuICAgICAgICAgIFBvc3QgQ3JlYXRlZCBTdWNjZXNzZnVsbHkhXG4gICAgICAgIDwvZGl2PlxuICBcdFx0XHQ8Zm9ybSAjZj1cIm5nRm9ybVwiIGNsYXNzPVwidWstZm9ybSB1ay1tYXJnaW4tbGFyZ2UtYm90dG9tXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCI+XG4gIFx0XHRcdFx0PGZpZWxkc2V0PlxuICBcdFx0XHRcdFx0XHQ8bGVnZW5kPiA8aDI+IENyZWF0ZSBQb3N0IEZvcm0gPC9oMj4gPC9sZWdlbmQ+XG4gIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mb3JtLXJvd1wiPlxuICBcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBuZ0NvbnRyb2w9XCJ0aXRsZVwiICN0aXRsZT1cIm5nRm9ybVwiIHBsYWNlaG9sZGVyPVwiXCIgW25nQ2xhc3NdPVwieyAndWstd2lkdGgtZm9ybS1sYXJnZSc6IHRydWUgfVwiPlxuICBcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cbiAgXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIFt0aW55TWNlXT1cImZcIiBuZ0NvbnRyb2w9XCJib2R5XCIgI2JvZHk9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLTEtMSc6IHRydWUgfVwiPjwvdGV4dGFyZWE+XG4gIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1tYXJnaW4tdG9wXCIgdHlwZT1cInN1Ym1pdFwiPmxvZ2luPC9idXR0b24+XG4gIFx0XHRcdFx0PC9maWVsZHNldD5cbiAgXHRcdFx0PC9mb3JtPlxuICBcdFx0XHQ8L2Rpdj5cbiAgXHRcdDwvZGl2PlxuXHRcdCAgPHNwaW5uZXIgW2lzTG9hZGluZ109aXNMb2FkaW5nPjwvc3Bpbm5lcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtCYW5uZXJDb21wb25lbnQsIFNwaW5uZXJDb21wb25lbnQsIFRpbnlFZGl0b3JdLFxuICAgIHByb3ZpZGVyczogW1Bvc3RTZXJ2aWNlLCBIVFRQX1BST1ZJREVSUywgVXBsb2FkU2VydmljZSwgQXV0aFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgUG9zdENyZWF0ZUNvbXBvbmVudCB7XG4gIGJhbm5lclRpdGxlOiBzdHJpbmcgPSBcIkNyZWF0ZSBOZXcgUG9zdFwiO1xuICBwb3N0Q3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBmaWxlczogRmlsZVtdO1xuXHRpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSwgcHJpdmF0ZSBfdXBsb2FkU2VydmljZTogVXBsb2FkU2VydmljZSkge1xuICAgIC8vIGlmKCAhdGhpcy5fYXV0aFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgIC8vIH1cbiAgfVxuXHRuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGxvYWRTZXJ2aWNlLnByb2dyZXNzLnN1YnNjcmliZShcbiAgICAgZGF0YSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coJ3Byb2dyZXNzID0gJytkYXRhKTtcbiAgICAgfSk7XG5cdH1cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgfVxuXG4gIG9uU3VibWl0KGYpIHtcblx0XHR0aGlzLl9wb3N0U2VydmljZS5jcmVhdGVQb3N0KHsndGl0bGUnOiBmLnZhbHVlLnRpdGxlLCAnYm9keSc6IGYudmFsdWUuYm9keX0pXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLnBvc3QpO1xuICAgICAgICAgICAgdGhpcy5fdXBsb2FkU2VydmljZS5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cy91cGxvYWQnLCBbXSwgdGhpcy5maWxlcywgZGF0YS5wb3N0LmlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW50Jyk7XG4gICAgICAgICAgICAgIHRoaXMucG9zdENyZWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0fVxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZScpO1xuICAgIHRoaXMuZmlsZXMgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICB9XG59XG4iXX0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wb3N0cy9wb3N0Y3JlYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLDZCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLCtCQUE0QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2hELHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUU3Qyx3QkFBeUIsWUFBWSxDQUFDLENBQUE7QUFFdEMsNEJBQTRCO0FBQzVCLGlDQUE4QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3BELGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBbUN0RDtJQU1DLDZCQUFvQixNQUFjLEVBQVUsWUFBeUIsRUFBVSxZQUF5QixFQUFVLGNBQTZCO1FBQTNILFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFMOUksZ0JBQVcsR0FBVyxpQkFBaUIsQ0FBQztRQUN4QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU5QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBR3hCLDhDQUE4QztRQUM5QyxnQ0FBZ0M7UUFDaEMsSUFBSTtJQUNOLENBQUM7SUFDRixzQ0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQyxVQUFBLElBQUk7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDQSx5Q0FBVyxHQUFYO0lBRUEsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQVYsaUJBZUE7UUFkQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQzthQUN6RSxTQUFTLENBQ1QsVUFBQSxJQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsb0NBQW9DLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUNwSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUVWLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRCxDQUFDO0lBQ0wsQ0FBQztJQUNBLHNDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUExRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDR2Q0EwQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLG9DQUFnQixFQUFFLG9CQUFVLENBQUM7WUFDM0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxxQkFBYyxFQUFFLDhCQUFhLEVBQUUsMEJBQVcsQ0FBQztTQUN2RSxDQUFDOzsyQkFBQTtJQTRDRiwwQkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksMkJBQW1CLHNCQTBDL0IsQ0FBQSIsImZpbGUiOiJhZG1pbi9hcHAvcG9zdHMvcG9zdGNyZWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtVcGxvYWRTZXJ2aWNlfSBmcm9tICcuLi91cGxvYWQuc2VydmljZSc7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUaW55RWRpdG9yfSBmcm9tICcuLi90aW55bWNlJztcblxuLyogLS0gSW1wb3J0IENvbXBvbmVudCAtLSAqL1xuaW1wb3J0IHtCYW5uZXJDb21wb25lbnR9IGZyb20gJy4uL2Jhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3JlYXRlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGJhbm5lciBbdGl0bGVdPVwiYmFubmVyVGl0bGVcIj48L2Jhbm5lcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1ay1ncmlkXCI+XG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJ1ay13aWR0aC1sYXJnZS01LTEwIHVrLWNvbnRhaW5lci1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVrLWFsZXJ0XCIgW2hpZGRlbl09XCIhcG9zdENyZWF0ZWRcIj5cbiAgICAgICAgICBQb3N0IENyZWF0ZWQgU3VjY2Vzc2Z1bGx5IVxuICAgICAgICA8L2Rpdj5cbiAgXHRcdFx0PGZvcm0gI2Y9XCJuZ0Zvcm1cIiBjbGFzcz1cInVrLWZvcm0gdWstbWFyZ2luLWxhcmdlLWJvdHRvbVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiPlxuICBcdFx0XHRcdDxmaWVsZHNldD5cbiAgXHRcdFx0XHRcdFx0PGxlZ2VuZD4gPGgyPiBDcmVhdGUgUG9zdCBGb3JtIDwvaDI+IDwvbGVnZW5kPlxuICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cbiAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgbmdDb250cm9sPVwidGl0bGVcIiAjdGl0bGU9XCJuZ0Zvcm1cIiBwbGFjZWhvbGRlcj1cIlwiIFtuZ0NsYXNzXT1cInsgJ3VrLXdpZHRoLWZvcm0tbGFyZ2UnOiB0cnVlIH1cIj5cbiAgXHRcdFx0XHRcdFx0PC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XG4gIFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHJlcXVpcmVkPVwicmVxdWlyZWRcIiBbdGlueU1jZV09XCJmXCIgbmdDb250cm9sPVwiYm9keVwiICNib2R5PVwibmdGb3JtXCIgcGxhY2Vob2xkZXI9XCJcIiBbbmdDbGFzc109XCJ7ICd1ay13aWR0aC0xLTEnOiB0cnVlIH1cIj48L3RleHRhcmVhPlxuICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gIFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstbWFyZ2luLXRvcFwiIHR5cGU9XCJzdWJtaXRcIj5sb2dpbjwvYnV0dG9uPlxuICBcdFx0XHRcdDwvZmllbGRzZXQ+XG4gIFx0XHRcdDwvZm9ybT5cbiAgXHRcdFx0PC9kaXY+XG4gIFx0XHQ8L2Rpdj5cblx0XHQgIDxzcGlubmVyIFtpc0xvYWRpbmddPWlzTG9hZGluZz48L3NwaW5uZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQmFubmVyQ29tcG9uZW50LCBTcGlubmVyQ29tcG9uZW50LCBUaW55RWRpdG9yXSxcbiAgICBwcm92aWRlcnM6IFtQb3N0U2VydmljZSwgSFRUUF9QUk9WSURFUlMsIFVwbG9hZFNlcnZpY2UsIEF1dGhTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RDcmVhdGVDb21wb25lbnQge1xuICBiYW5uZXJUaXRsZTogc3RyaW5nID0gXCJDcmVhdGUgTmV3IFBvc3RcIjtcbiAgcG9zdENyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsZXM6IEZpbGVbXTtcblx0aXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9wb3N0U2VydmljZTogUG9zdFNlcnZpY2UsIHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6IFVwbG9hZFNlcnZpY2UpIHtcbiAgICAvLyBpZiggIXRoaXMuX2F1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgLy8gICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAvLyB9XG4gIH1cblx0bmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBsb2FkU2VydmljZS5wcm9ncmVzcy5zdWJzY3JpYmUoXG4gICAgIGRhdGEgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKCdwcm9ncmVzcyA9ICcrZGF0YSk7XG4gICAgIH0pO1xuXHR9XG4gIG5nT25EZXN0cm95KCkge1xuXG4gIH1cblxuICBvblN1Ym1pdChmKSB7XG5cdFx0dGhpcy5fcG9zdFNlcnZpY2UuY3JlYXRlUG9zdCh7J3RpdGxlJzogZi52YWx1ZS50aXRsZSwgJ2JvZHknOiBmLnZhbHVlLmJvZHl9KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5wb3N0KTtcbiAgICAgICAgICAgIHRoaXMuX3VwbG9hZFNlcnZpY2UubWFrZUZpbGVSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvdXBsb2FkJywgW10sIHRoaXMuZmlsZXMsIGRhdGEucG9zdC5pZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VudCcpO1xuICAgICAgICAgICAgICB0aGlzLnBvc3RDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdH1cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnb25DaGFuZ2UnKTtcbiAgICB0aGlzLmZpbGVzID0gZXZlbnQuc3JjRWxlbWVudC5maWxlcztcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgfVxufVxuIl19

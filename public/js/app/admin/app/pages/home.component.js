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
var banner_component_1 = require('../banner.component');
var post_component_1 = require('../posts/post.component');
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = " Hello Admin. I blog sometimes";
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<banner [title]=\"title\"></banner>\n\t\t<posts></posts>\n\t",
            directives: [banner_component_1.BannerComponent, post_component_1.PostComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9wYWdlcy9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQ3hCLENBQUMsQ0FEc0M7QUFDdkMsaUNBQThCLHFCQUM5QixDQUFDLENBRGtEO0FBQ25ELCtCQUE0Qix5QkFFNUIsQ0FBQyxDQUZvRDtBQVNyRDtJQUFBO1FBQ0MsVUFBSyxHQUFXLGdDQUFnQyxDQUFBO0lBQ2pELENBQUM7SUFURDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsb0VBR1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDhCQUFhLENBQUM7U0FDNUMsQ0FBQzs7cUJBQUE7SUFHRixvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUEiLCJmaWxlIjoiYWRtaW4vYXBwL3BhZ2VzL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Jhbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vYmFubmVyLmNvbXBvbmVudCdcbmltcG9ydCB7UG9zdENvbXBvbmVudH0gZnJvbSAnLi4vcG9zdHMvcG9zdC5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxiYW5uZXIgW3RpdGxlXT1cInRpdGxlXCI+PC9iYW5uZXI+XG5cdFx0PHBvc3RzPjwvcG9zdHM+XG5cdGAsXG5cdGRpcmVjdGl2ZXM6IFtCYW5uZXJDb21wb25lbnQsIFBvc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXHR0aXRsZTogc3RyaW5nID0gYCBIZWxsbyBBZG1pbi4gSSBibG9nIHNvbWV0aW1lc2Bcbn1cbiJdfQ==

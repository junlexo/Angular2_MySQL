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
        this.title = " Hello. I blog sometimes";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvcGFnZXMvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLGlDQUE4QixxQkFDOUIsQ0FBQyxDQURrRDtBQUNuRCwrQkFBNEIseUJBRTVCLENBQUMsQ0FGb0Q7QUFTckQ7SUFBQTtRQUNDLFVBQUssR0FBVywwQkFBMEIsQ0FBQTtJQUMzQyxDQUFDO0lBVEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLG9FQUdUO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSw4QkFBYSxDQUFDO1NBQzVDLENBQUM7O3FCQUFBO0lBR0Ysb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvcGFnZXMvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7QmFubmVyQ29tcG9uZW50fSBmcm9tICcuLi9iYW5uZXIuY29tcG9uZW50J1xuaW1wb3J0IHtQb3N0Q29tcG9uZW50fSBmcm9tICcuLi9wb3N0cy9wb3N0LmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cdFx0PGJhbm5lciBbdGl0bGVdPVwidGl0bGVcIj48L2Jhbm5lcj5cblx0XHQ8cG9zdHM+PC9wb3N0cz5cblx0YCxcblx0ZGlyZWN0aXZlczogW0Jhbm5lckNvbXBvbmVudCwgUG9zdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cdHRpdGxlOiBzdHJpbmcgPSBgIEhlbGxvLiBJIGJsb2cgc29tZXRpbWVzYFxufVxuIl19

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
var BannerComponent = (function () {
    function BannerComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BannerComponent.prototype, "title", void 0);
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'banner',
            template: "\n\t\t<div class=\"uk-flex banner uk-cover-background uk-margin-large-bottom\">\n\t\t\n\t\t\t<div class=\"uk-flex uk-flex-item-1 uk-flex-center uk-flex-middle\">\n\t  \t\t\t<h1 class=\"banner-text\"> {{ title }} </h1>\n\t\t\t</div>\n\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUUvQixDQUFDLENBRjZDO0FBYzlDO0lBQUE7SUFFQSxDQUFDO0lBREE7UUFBQyxZQUFLLEVBQUU7O2tEQUFBO0lBYlQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJQQVFUO1NBQ0QsQ0FBQzs7dUJBQUE7SUFHRixzQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksdUJBQWUsa0JBRTNCLENBQUEiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYmFubmVyJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PGRpdiBjbGFzcz1cInVrLWZsZXggYmFubmVyIHVrLWNvdmVyLWJhY2tncm91bmQgdWstbWFyZ2luLWxhcmdlLWJvdHRvbVwiPlxyXG5cdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mbGV4IHVrLWZsZXgtaXRlbS0xIHVrLWZsZXgtY2VudGVyIHVrLWZsZXgtbWlkZGxlXCI+XHJcblx0ICBcdFx0XHQ8aDEgY2xhc3M9XCJiYW5uZXItdGV4dFwiPiB7eyB0aXRsZSB9fSA8L2gxPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHRgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

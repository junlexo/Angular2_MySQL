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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUUvQixDQUFDLENBRjZDO0FBYzlDO0lBQUE7SUFFQSxDQUFDO0lBREE7UUFBQyxZQUFLLEVBQUU7O2tEQUFBO0lBYlQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJQQVFUO1NBQ0QsQ0FBQzs7dUJBQUE7SUFHRixzQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksdUJBQWUsa0JBRTNCLENBQUEiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYmFubmVyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwidWstZmxleCBiYW5uZXIgdWstY292ZXItYmFja2dyb3VuZCB1ay1tYXJnaW4tbGFyZ2UtYm90dG9tXCI+XG5cdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidWstZmxleCB1ay1mbGV4LWl0ZW0tMSB1ay1mbGV4LWNlbnRlciB1ay1mbGV4LW1pZGRsZVwiPlxuXHQgIFx0XHRcdDxoMSBjbGFzcz1cImJhbm5lci10ZXh0XCI+IHt7IHRpdGxlIH19IDwvaDE+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG59XG4iXX0=

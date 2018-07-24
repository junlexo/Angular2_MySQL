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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9iYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFFL0IsQ0FBQyxDQUY2QztBQWM5QztJQUFBO0lBRUEsQ0FBQztJQURBO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQWJUO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwyUEFRVDtTQUNELENBQUM7O3VCQUFBO0lBR0Ysc0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHVCQUFlLGtCQUUzQixDQUFBIiwiZmlsZSI6ImFkbWluL2FwcC9iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdiYW5uZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJ1ay1mbGV4IGJhbm5lciB1ay1jb3Zlci1iYWNrZ3JvdW5kIHVrLW1hcmdpbi1sYXJnZS1ib3R0b21cIj5cblx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJ1ay1mbGV4IHVrLWZsZXgtaXRlbS0xIHVrLWZsZXgtY2VudGVyIHVrLWZsZXgtbWlkZGxlXCI+XG5cdCAgXHRcdFx0PGgxIGNsYXNzPVwiYmFubmVyLXRleHRcIj4ge3sgdGl0bGUgfX0gPC9oMT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgdGl0bGU6IHN0cmluZztcbn1cbiJdfQ==

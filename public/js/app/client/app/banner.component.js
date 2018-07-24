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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYmFubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBRS9CLENBQUMsQ0FGNkM7QUFjOUM7SUFBQTtJQUVBLENBQUM7SUFEQTtRQUFDLFlBQUssRUFBRTs7a0RBQUE7SUFiVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsMlBBUVQ7U0FDRCxDQUFDOzt1QkFBQTtJQUdGLHNCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL2Jhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2Jhbm5lcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cInVrLWZsZXggYmFubmVyIHVrLWNvdmVyLWJhY2tncm91bmQgdWstbWFyZ2luLWxhcmdlLWJvdHRvbVwiPlxuXHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cInVrLWZsZXggdWstZmxleC1pdGVtLTEgdWstZmxleC1jZW50ZXIgdWstZmxleC1taWRkbGVcIj5cblx0ICBcdFx0XHQ8aDEgY2xhc3M9XCJiYW5uZXItdGV4dFwiPiB7eyB0aXRsZSB9fSA8L2gxPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnQge1xuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xufVxuIl19

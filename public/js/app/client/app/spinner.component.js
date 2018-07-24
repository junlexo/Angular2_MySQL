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
var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isLoading = true;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SpinnerComponent.prototype, "isLoading", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'spinner',
            template: "\n\t\t<div *ngIf=\"isLoading\" class=\"post-loader\">\n\t\t\t<i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i>\n\t\t</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQVUvQztJQUFBO1FBQ1UsY0FBUyxHQUFXLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBREE7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBVFQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLDJJQUlUO1NBQ0osQ0FBQzs7d0JBQUE7SUFHRix1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NwaW5uZXInLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAqbmdJZj1cImlzTG9hZGluZ1wiIGNsYXNzPVwicG9zdC1sb2FkZXJcIj5cblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlLW8tbm90Y2ggZmEtc3BpbiBmYS0zeCBmYS1md1wiPjwvaT5cblx0XHQ8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQge1xuXHRASW5wdXQoKSBpc0xvYWRpbmc6Ym9vbGVhbiA9IHRydWU7XG59XG4iXX0=

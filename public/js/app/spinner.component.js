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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFVL0M7SUFBQTtRQUNVLGNBQVMsR0FBVyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQURBO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQVRUO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSwySUFJVDtTQUNKLENBQUM7O3dCQUFBO0lBR0YsdUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHdCQUFnQixtQkFFNUIsQ0FBQSIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3Bpbm5lcicsXG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICpuZ0lmPVwiaXNMb2FkaW5nXCIgY2xhc3M9XCJwb3N0LWxvYWRlclwiPlxuXHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUtby1ub3RjaCBmYS1zcGluIGZhLTN4IGZhLWZ3XCI+PC9pPlxuXHRcdDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGlzTG9hZGluZzpib29sZWFuID0gdHJ1ZTtcbn1cbiJdfQ==

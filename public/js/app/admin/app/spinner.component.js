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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBVS9DO0lBQUE7UUFDVSxjQUFTLEdBQVcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFEQTtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFUVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsMklBSVQ7U0FDSixDQUFDOzt3QkFBQTtJQUdGLHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx3QkFBZ0IsbUJBRTVCLENBQUEiLCJmaWxlIjoiYWRtaW4vYXBwL3NwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzcGlubmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgKm5nSWY9XCJpc0xvYWRpbmdcIiBjbGFzcz1cInBvc3QtbG9hZGVyXCI+XG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNpcmNsZS1vLW5vdGNoIGZhLXNwaW4gZmEtM3ggZmEtZndcIj48L2k+XG5cdFx0PC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IHtcblx0QElucHV0KCkgaXNMb2FkaW5nOmJvb2xlYW4gPSB0cnVlO1xufVxuIl19

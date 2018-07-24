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
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
var StripHtml = (function () {
    function StripHtml() {
    }
    StripHtml.prototype.transform = function (value) {
        return value.replace(/<\/?[^>]+(>|$)/g, "");
    };
    StripHtml = __decorate([
        core_1.Pipe({ name: 'stripHtml' }), 
        __metadata('design:paramtypes', [])
    ], StripHtml);
    return StripHtml;
}());
exports.StripHtml = StripHtml;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc3RyaXBodG1sLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRDs7Ozs7Ozs7RUFRRTtBQUVGO0lBQUE7SUFJQSxDQUFDO0lBSEMsNkJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUpIO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOztpQkFBQTtJQUsxQixnQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksaUJBQVMsWUFJckIsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL3N0cmlwaHRtbC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLypcbiAqIFJhaXNlIHRoZSB2YWx1ZSBleHBvbmVudGlhbGx5XG4gKiBUYWtlcyBhbiBleHBvbmVudCBhcmd1bWVudCB0aGF0IGRlZmF1bHRzIHRvIDEuXG4gKiBVc2FnZTpcbiAqICAgdmFsdWUgfCBleHBvbmVudGlhbFN0cmVuZ3RoOmV4cG9uZW50XG4gKiBFeGFtcGxlOlxuICogICB7eyAyIHwgIGV4cG9uZW50aWFsU3RyZW5ndGg6MTB9fVxuICogICBmb3JtYXRzIHRvOiAxMDI0XG4qL1xuQFBpcGUoe25hbWU6ICdzdHJpcEh0bWwnfSlcbmV4cG9ydCBjbGFzcyBTdHJpcEh0bWwgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC88XFwvP1tePl0rKD58JCkvZywgXCJcIik7XG4gIH1cbn1cbiJdfQ==

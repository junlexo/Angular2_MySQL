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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9zdHJpcGh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBQ3BEOzs7Ozs7OztFQVFFO0FBRUY7SUFBQTtJQUlBLENBQUM7SUFIQyw2QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBSkg7UUFBQyxXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7O2lCQUFBO0lBSzFCLGdCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxpQkFBUyxZQUlyQixDQUFBIiwiZmlsZSI6ImFkbWluL2FwcC9zdHJpcGh0bWwucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qXG4gKiBSYWlzZSB0aGUgdmFsdWUgZXhwb25lbnRpYWxseVxuICogVGFrZXMgYW4gZXhwb25lbnQgYXJndW1lbnQgdGhhdCBkZWZhdWx0cyB0byAxLlxuICogVXNhZ2U6XG4gKiAgIHZhbHVlIHwgZXhwb25lbnRpYWxTdHJlbmd0aDpleHBvbmVudFxuICogRXhhbXBsZTpcbiAqICAge3sgMiB8ICBleHBvbmVudGlhbFN0cmVuZ3RoOjEwfX1cbiAqICAgZm9ybWF0cyB0bzogMTAyNFxuKi9cbkBQaXBlKHtuYW1lOiAnc3RyaXBIdG1sJ30pXG5leHBvcnQgY2xhc3MgU3RyaXBIdG1sIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvPFxcLz9bXj5dKyg+fCQpL2csIFwiXCIpO1xuICB9XG59XG4iXX0=

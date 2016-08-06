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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmlwaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFDcEQ7Ozs7Ozs7O0VBUUU7QUFFRjtJQUFBO0lBSUEsQ0FBQztJQUhDLDZCQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFKSDtRQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQzs7aUJBQUE7SUFLMUIsZ0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLGlCQUFTLFlBSXJCLENBQUEiLCJmaWxlIjoic3RyaXBodG1sLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8qXHJcbiAqIFJhaXNlIHRoZSB2YWx1ZSBleHBvbmVudGlhbGx5XHJcbiAqIFRha2VzIGFuIGV4cG9uZW50IGFyZ3VtZW50IHRoYXQgZGVmYXVsdHMgdG8gMS5cclxuICogVXNhZ2U6XHJcbiAqICAgdmFsdWUgfCBleHBvbmVudGlhbFN0cmVuZ3RoOmV4cG9uZW50XHJcbiAqIEV4YW1wbGU6XHJcbiAqICAge3sgMiB8ICBleHBvbmVudGlhbFN0cmVuZ3RoOjEwfX1cclxuICogICBmb3JtYXRzIHRvOiAxMDI0XHJcbiovXHJcbkBQaXBlKHtuYW1lOiAnc3RyaXBIdG1sJ30pXHJcbmV4cG9ydCBjbGFzcyBTdHJpcEh0bWwgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvPFxcLz9bXj5dKyg+fCQpL2csIFwiXCIpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

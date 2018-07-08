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
var banner_component_1 = require('../banner.component');
var post_component_1 = require('../posts/post.component');
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = " Hello. I blog sometimes";
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<banner [title]=\"title\"></banner>\n\t\t<posts></posts>\n\t",
            directives: [banner_component_1.BannerComponent, post_component_1.PostComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2QyxpQ0FBOEIscUJBQzlCLENBQUMsQ0FEa0Q7QUFDbkQsK0JBQTRCLHlCQUU1QixDQUFDLENBRm9EO0FBU3JEO0lBQUE7UUFDQyxVQUFLLEdBQVcsMEJBQTBCLENBQUE7SUFDM0MsQ0FBQztJQVREO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxvRUFHVDtZQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsOEJBQWEsQ0FBQztTQUM1QyxDQUFDOztxQkFBQTtJQUdGLG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxxQkFBYSxnQkFFekIsQ0FBQSIsImZpbGUiOiJwYWdlcy9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtCYW5uZXJDb21wb25lbnR9IGZyb20gJy4uL2Jhbm5lci5jb21wb25lbnQnXG5pbXBvcnQge1Bvc3RDb21wb25lbnR9IGZyb20gJy4uL3Bvc3RzL3Bvc3QuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHQ8YmFubmVyIFt0aXRsZV09XCJ0aXRsZVwiPjwvYmFubmVyPlxuXHRcdDxwb3N0cz48L3Bvc3RzPlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbQmFubmVyQ29tcG9uZW50LCBQb3N0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblx0dGl0bGU6IHN0cmluZyA9IGAgSGVsbG8uIEkgYmxvZyBzb21ldGltZXNgXG59XG4iXX0=

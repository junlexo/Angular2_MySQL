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
var router_1 = require('@angular/router');
/* -- Components Import -- */
var navigation_component_1 = require('./navigation.component');
var home_component_1 = require('./pages/home.component');
var postsingle_component_1 = require('./posts/postsingle.component');
var about_component_1 = require('./pages/about.component');
var login_component_1 = require('./pages/login.component');
var postcreate_component_1 = require('./posts/postcreate.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './js/app/client/app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent],
            precompile: [home_component_1.HomeComponent, postsingle_component_1.PostSingleComponent, about_component_1.AboutComponent, login_component_1.LoginComponent, postcreate_component_1.PostCreateComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDZCQUE2QjtBQUM3QixxQ0FBa0Msd0JBQXdCLENBQUMsQ0FBQTtBQUMzRCwrQkFBNEIsd0JBQXdCLENBQUMsQ0FBQTtBQUVyRCxxQ0FBa0MsOEJBQThCLENBQUMsQ0FBQTtBQUNqRSxnQ0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxxQ0FBa0MsOEJBQThCLENBQUMsQ0FBQTtBQVFqRTtJQUFBO0lBQ0EsQ0FBQztJQVBEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsMENBQW1CLENBQUM7WUFDcEQsVUFBVSxFQUFFLENBQUMsOEJBQWEsRUFBRSwwQ0FBbUIsRUFBRSxnQ0FBYyxFQUFFLGdDQUFjLEVBQUUsMENBQW1CLENBQUM7U0FDeEcsQ0FBQzs7b0JBQUE7SUFFRixtQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksb0JBQVksZUFDeEIsQ0FBQSIsImZpbGUiOiJjbGllbnQvYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLyogLS0gQ29tcG9uZW50cyBJbXBvcnQgLS0gKi9cbmltcG9ydCB7TmF2aWdhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3N0Q29tcG9uZW50fSBmcm9tICcuL3Bvc3RzL3Bvc3QuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdFNpbmdsZUNvbXBvbmVudH0gZnJvbSAnLi9wb3N0cy9wb3N0c2luZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuL3BhZ2VzL2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL3BhZ2VzL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bvc3RDcmVhdGVDb21wb25lbnR9IGZyb20gJy4vcG9zdHMvcG9zdGNyZWF0ZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2pzL2FwcC9jbGllbnQvYXBwL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgICBwcmVjb21waWxlOiBbSG9tZUNvbXBvbmVudCwgUG9zdFNpbmdsZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBQb3N0Q3JlYXRlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuIl19

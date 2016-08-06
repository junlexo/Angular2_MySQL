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
            templateUrl: './js/app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent],
            precompile: [home_component_1.HomeComponent, postsingle_component_1.PostSingleComponent, about_component_1.AboutComponent, login_component_1.LoginComponent, postcreate_component_1.PostCreateComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCw2QkFBNkI7QUFDN0IscUNBQWtDLHdCQUF3QixDQUFDLENBQUE7QUFDM0QsK0JBQTRCLHdCQUF3QixDQUFDLENBQUE7QUFFckQscUNBQWtDLDhCQUE4QixDQUFDLENBQUE7QUFDakUsZ0NBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsZ0NBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQscUNBQWtDLDhCQUE4QixDQUFDLENBQUE7QUFRakU7SUFBQTtJQUNBLENBQUM7SUFQRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDBDQUFtQixDQUFDO1lBQ3BELFVBQVUsRUFBRSxDQUFDLDhCQUFhLEVBQUUsMENBQW1CLEVBQUUsZ0NBQWMsRUFBRSxnQ0FBYyxFQUFFLDBDQUFtQixDQUFDO1NBQ3hHLENBQUM7O29CQUFBO0lBRUYsbUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLG9CQUFZLGVBQ3hCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vKiAtLSBDb21wb25lbnRzIEltcG9ydCAtLSAqL1xuaW1wb3J0IHtOYXZpZ2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9wYWdlcy9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bvc3RDb21wb25lbnR9IGZyb20gJy4vcG9zdHMvcG9zdC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3N0U2luZ2xlQ29tcG9uZW50fSBmcm9tICcuL3Bvc3RzL3Bvc3RzaW5nbGUuY29tcG9uZW50JztcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vcGFnZXMvbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7UG9zdENyZWF0ZUNvbXBvbmVudH0gZnJvbSAnLi9wb3N0cy9wb3N0Y3JlYXRlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vanMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgICBwcmVjb21waWxlOiBbSG9tZUNvbXBvbmVudCwgUG9zdFNpbmdsZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBQb3N0Q3JlYXRlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

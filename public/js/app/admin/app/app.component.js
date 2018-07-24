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
            templateUrl: './js/app/admin/app//app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent],
            precompile: [home_component_1.HomeComponent, postsingle_component_1.PostSingleComponent, about_component_1.AboutComponent, login_component_1.LoginComponent, postcreate_component_1.PostCreateComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQsNkJBQTZCO0FBQzdCLHFDQUFrQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzNELCtCQUE0Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXJELHFDQUFrQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2pFLGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELGdDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELHFDQUFrQyw4QkFBOEIsQ0FBQyxDQUFBO0FBUWpFO0lBQUE7SUFDQSxDQUFDO0lBUEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSwwQ0FBbUIsQ0FBQztZQUNwRCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDBDQUFtQixFQUFFLGdDQUFjLEVBQUUsZ0NBQWMsRUFBRSwwQ0FBbUIsQ0FBQztTQUN4RyxDQUFDOztvQkFBQTtJQUVGLG1CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxvQkFBWSxlQUN4QixDQUFBIiwiZmlsZSI6ImFkbWluL2FwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8qIC0tIENvbXBvbmVudHMgSW1wb3J0IC0tICovXG5pbXBvcnQge05hdmlnYXRpb25Db21wb25lbnR9IGZyb20gJy4vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL3BhZ2VzL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdENvbXBvbmVudH0gZnJvbSAnLi9wb3N0cy9wb3N0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Bvc3RTaW5nbGVDb21wb25lbnR9IGZyb20gJy4vcG9zdHMvcG9zdHNpbmdsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSAnLi9wYWdlcy9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9wYWdlcy9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3N0Q3JlYXRlQ29tcG9uZW50fSBmcm9tICcuL3Bvc3RzL3Bvc3RjcmVhdGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9hcHAvYWRtaW4vYXBwLy9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gICAgcHJlY29tcGlsZTogW0hvbWVDb21wb25lbnQsIFBvc3RTaW5nbGVDb21wb25lbnQsIEFib3V0Q29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUG9zdENyZWF0ZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cbiJdfQ==

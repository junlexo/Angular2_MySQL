"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./pages/home.component');
var about_component_1 = require('./pages/about.component');
var login_component_1 = require('./pages/login.component');
var postsingle_component_1 = require('./posts/postsingle.component');
var postcreate_component_1 = require('./posts/postcreate.component');
var logout_component_1 = require('./logout.component');
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'sadiloginshere',
        component: login_component_1.LoginComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    },
    {
        path: 'create',
        component: postcreate_component_1.PostCreateComponent
    },
    {
        path: 'post/:id',
        component: postsingle_component_1.PostSingleComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFDL0QsK0JBQThCLHdCQUF3QixDQUFDLENBQUE7QUFDdkQsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQscUNBQW9DLDhCQUE4QixDQUFDLENBQUE7QUFDbkUscUNBQW9DLDhCQUE4QixDQUFDLENBQUE7QUFDbkUsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFFckQsSUFBTSxNQUFNLEdBQWlCO0lBQzNCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsOEJBQWE7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsU0FBUyxFQUFFLGdDQUFjO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxnQ0FBYztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7S0FDM0I7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLDBDQUFtQjtLQUMvQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLDBDQUFtQjtLQUMvQjtDQUNGLENBQUM7QUFFVyw0QkFBb0IsR0FBRztJQUNsQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQztDQUN0QixDQUFDIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb3ZpZGVSb3V0ZXIsIFJvdXRlckNvbmZpZyB9ICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFBvc3RTaW5nbGVDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RzL3Bvc3RzaW5nbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBvc3RDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RzL3Bvc3RjcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vbG9nb3V0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2FkaWxvZ2luc2hlcmUnLFxuICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhYm91dCcsXG4gICAgY29tcG9uZW50OiBBYm91dENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2xvZ291dCcsXG4gICAgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdjcmVhdGUnLFxuICAgIGNvbXBvbmVudDogUG9zdENyZWF0ZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Bvc3QvOmlkJyxcbiAgICBjb21wb25lbnQ6IFBvc3RTaW5nbGVDb21wb25lbnRcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVJfUFJPVklERVJTID0gW1xuICBwcm92aWRlUm91dGVyKHJvdXRlcylcbl07XG4iXX0=

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3ZELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLHFDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXJELElBQU0sTUFBTSxHQUFpQjtJQUMzQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDhCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxnQ0FBYztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSwwQ0FBbUI7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFNBQVMsRUFBRSwwQ0FBbUI7S0FDL0I7Q0FDRixDQUFDO0FBRVcsNEJBQW9CLEdBQUc7SUFDbEMsc0JBQWEsQ0FBQyxNQUFNLENBQUM7Q0FDdEIsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnIH0gIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3N0U2luZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0cy9wb3N0c2luZ2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3RDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL3Bvc3RzL3Bvc3RjcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2dvdXQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnc2FkaWxvZ2luc2hlcmUnLFxyXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2Fib3V0JyxcclxuICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdsb2dvdXQnLFxyXG4gICAgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdjcmVhdGUnLFxyXG4gICAgY29tcG9uZW50OiBQb3N0Q3JlYXRlQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncG9zdC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBQb3N0U2luZ2xlQ29tcG9uZW50XHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVJfUFJPVklERVJTID0gW1xyXG4gIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

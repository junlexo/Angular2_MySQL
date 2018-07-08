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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3ZELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLHFDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXJELElBQU0sTUFBTSxHQUFpQjtJQUMzQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDhCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxnQ0FBYztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSwwQ0FBbUI7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFNBQVMsRUFBRSwwQ0FBbUI7S0FDL0I7Q0FDRixDQUFDO0FBRVcsNEJBQW9CLEdBQUc7SUFDbEMsc0JBQWEsQ0FBQyxNQUFNLENBQUM7Q0FDdEIsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnIH0gIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdFNpbmdsZUNvbXBvbmVudCB9IGZyb20gJy4vcG9zdHMvcG9zdHNpbmdsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcG9zdHMvcG9zdGNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2dvdXQuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdzYWRpbG9naW5zaGVyZScsXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2Fib3V0JyxcbiAgICBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnbG9nb3V0JyxcbiAgICBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2NyZWF0ZScsXG4gICAgY29tcG9uZW50OiBQb3N0Q3JlYXRlQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncG9zdC86aWQnLFxuICAgIGNvbXBvbmVudDogUG9zdFNpbmdsZUNvbXBvbmVudFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUl9QUk9WSURFUlMgPSBbXG4gIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxuXTtcbiJdfQ==

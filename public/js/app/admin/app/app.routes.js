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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCwrQkFBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxxQ0FBb0MsOEJBQThCLENBQUMsQ0FBQTtBQUNuRSxxQ0FBb0MsOEJBQThCLENBQUMsQ0FBQTtBQUNuRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUVyRCxJQUFNLE1BQU0sR0FBaUI7SUFDM0I7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw4QkFBYTtLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGdDQUFjO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxrQ0FBZTtLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsMENBQW1CO0tBQy9CO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsMENBQW1CO0tBQy9CO0NBQ0YsQ0FBQztBQUVXLDRCQUFvQixHQUFHO0lBQ2xDLHNCQUFhLENBQUMsTUFBTSxDQUFDO0NBQ3RCLENBQUMiLCJmaWxlIjoiYWRtaW4vYXBwL2FwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3N0U2luZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0cy9wb3N0c2luZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3N0Q3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0cy9wb3N0Y3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3NhZGlsb2dpbnNoZXJlJyxcbiAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnYWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdsb2dvdXQnLFxuICAgIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnY3JlYXRlJyxcbiAgICBjb21wb25lbnQ6IFBvc3RDcmVhdGVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwb3N0LzppZCcsXG4gICAgY29tcG9uZW50OiBQb3N0U2luZ2xlQ29tcG9uZW50XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcbiAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXG5dO1xuIl19

"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./pages/home.component');
var about_component_1 = require('./pages/about.component');
var login_component_1 = require('./pages/login.component');
var register_component_1 = require('./pages/register.component');
var list_component_1 = require('./pages/list.component');
var edit_component_1 = require('./pages/edit.component');
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
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'list',
        component: list_component_1.UserComponent
    },
    {
        path: 'user/:id',
        component: edit_component_1.ChangeComponent
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCwrQkFBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxtQ0FBa0MsNEJBQTRCLENBQUMsQ0FBQTtBQUMvRCwrQkFBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQUN2RCwrQkFBZ0Msd0JBQXdCLENBQUMsQ0FBQTtBQUN6RCxxQ0FBb0MsOEJBQThCLENBQUMsQ0FBQTtBQUNuRSxxQ0FBb0MsOEJBQThCLENBQUMsQ0FBQTtBQUNuRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUVyRCxJQUFNLE1BQU0sR0FBaUI7SUFDM0I7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw4QkFBYTtLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFNBQVMsRUFBRSxzQ0FBaUI7S0FDN0I7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsZ0NBQWU7S0FDM0I7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGdDQUFjO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxrQ0FBZTtLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsMENBQW1CO0tBQy9CO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsMENBQW1CO0tBQy9CO0NBQ0YsQ0FBQztBQUVXLDRCQUFvQixHQUFHO0lBQ2xDLHNCQUFhLENBQUMsTUFBTSxDQUFDO0NBQ3RCLENBQUMiLCJmaWxlIjoiYWRtaW4vYXBwL2FwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENoYW5nZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdFNpbmdsZUNvbXBvbmVudCB9IGZyb20gJy4vcG9zdHMvcG9zdHNpbmdsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcG9zdHMvcG9zdGNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2dvdXQuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdzYWRpbG9naW5zaGVyZScsXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3JlZ2lzdGVyJyxcbiAgICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnbGlzdCcsXG4gICAgY29tcG9uZW50OiBVc2VyQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAndXNlci86aWQnLFxuICAgIGNvbXBvbmVudDogQ2hhbmdlQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnYWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdsb2dvdXQnLFxuICAgIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnY3JlYXRlJyxcbiAgICBjb21wb25lbnQ6IFBvc3RDcmVhdGVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwb3N0LzppZCcsXG4gICAgY29tcG9uZW50OiBQb3N0U2luZ2xlQ29tcG9uZW50XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcbiAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXG5dO1xuIl19

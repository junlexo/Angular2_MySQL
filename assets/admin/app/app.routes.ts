import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { LoginComponent } from './pages/login.component';
import { PostSingleComponent } from './posts/postsingle.component';
import { PostCreateComponent } from './posts/postcreate.component';
import { LogoutComponent } from './logout.component';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sadiloginshere',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: 'post/:id',
    component: PostSingleComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

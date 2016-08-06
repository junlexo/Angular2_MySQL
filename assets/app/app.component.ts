import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
/* -- Components Import -- */
import {NavigationComponent} from './navigation.component';
import {HomeComponent} from './pages/home.component';
import {PostComponent} from './posts/post.component';
import {PostSingleComponent} from './posts/postsingle.component';
import {AboutComponent} from './pages/about.component';
import {LoginComponent} from './pages/login.component';
import {PostCreateComponent} from './posts/postcreate.component';

@Component({
    selector: 'my-app',
    templateUrl: './js/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    precompile: [HomeComponent, PostSingleComponent, AboutComponent, LoginComponent, PostCreateComponent]
})
export class AppComponent {
}

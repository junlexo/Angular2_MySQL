import {Component} from '@angular/core'
import {BannerComponent} from '../banner.component'
import {PostComponent} from '../posts/post.component'

@Component({
	template: `
		<banner [title]="title"></banner>
		<posts></posts>
	`,
	directives: [BannerComponent, PostComponent]
})
export class HomeComponent {
	title: string = ` Hello. I blog sometimes`
}

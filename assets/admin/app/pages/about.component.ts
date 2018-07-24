import {Component} from '@angular/core'

import {BannerComponent} from '../banner.component'

@Component({
	template: `
		<banner [title]="title"></banner>
		<div  class="uk-width-large-5-10 uk-container-center">
			<h1 class="uk-h1"> Information </h1>
			<hr>
			<h2 class="uk-h2"> Hi, my name is Sadi and I am from Bangladesh. I'm Admin </h2>
			<hr>
			<i class="uk-icon-medium uk-icon-facebook"></i>
			<i class="uk-icon-medium uk-icon-twitter"></i>
			<i class="uk-icon-medium uk-icon-google-plus"></i>

		</div>
	`,
	directives: [BannerComponent]
})
export class AboutComponent {
	title: string = "About Me";
}

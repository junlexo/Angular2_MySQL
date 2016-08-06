import {Component, Input} from '@angular/core'

@Component({
	selector: 'banner',
	template: `
		<div class="uk-flex banner uk-cover-background uk-margin-large-bottom">
		
			<div class="uk-flex uk-flex-item-1 uk-flex-center uk-flex-middle">
	  			<h1 class="banner-text"> {{ title }} </h1>
			</div>

		</div>
	`
})
export class BannerComponent {
	@Input() title: string;
}

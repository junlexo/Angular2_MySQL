import {Component, Input} from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
		<div *ngIf="isLoading" class="post-loader">
			<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
		</div>
    `
})
export class SpinnerComponent {
	@Input() isLoading:boolean = true;
}

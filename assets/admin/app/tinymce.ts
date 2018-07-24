import {ElementRef, Directive, NgZone} from '@angular/core';
import {ControlGroup, Control} from '@angular/common';

declare var tinymce: any;
@Directive({
  inputs: ['tinyMce'],
  selector: '[tinyMce]'
})
export class TinyEditor {
  public tinyMce: ControlGroup;

  private id: string = Math.random().toString(36).substr(2, 5);
  private controlName: string;
  private theControl: any;

  public constructor(private elRef: ElementRef, private zone: NgZone) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.controlName = this.elRef.nativeElement.getAttribute('ngControl');
      this.theControl = this.tinyMce.controls[this.controlName];
    });
    this.elRef.nativeElement.setAttribute('tiny-id', this.id);
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      tinymce.init({
        valid_elements: '*[*]',
        selector: '[tiny-id=' + this.id + ']',
        schema: 'html5',
        height: 150,
        language : "en", // change language here
        setup: (editor): void => {
          editor.on('keyup change', () => {
            this.zone.run(() => {
              let value: Object = editor.getContent();
              this.theControl.updateValue(value, {emitEvent: true});
              this.theControl.markAsDirty();
              this.theControl.markAsTouched();
              this.theControl.updateValueAndValidity();
            });
          });
        }
      });
    });
  }

  public ngOnDestroy(): void {
    try {
      tinymce.remove('[tiny-id=' + this.id + ']');
    } catch(e) {
      console.error('Error:', e);
    }
  }
}
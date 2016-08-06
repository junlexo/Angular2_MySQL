import {ElementRef, Directive, NgZone} from '@angular/core';
import {ControlGroup, Control} from '@angular/common';

@Directive({
  inputs: ['tinyMce'],
  selector: '[tinyMce]'
})
export class TinyEditor {
  public tinyMce: ControlGroup;
  private id: string = Math.random().toString(36).substr(2, 5);
  private controlName: string;
  private theControl: Control;

  public constructor(private elRef: ElementRef, private zone: NgZone) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.controlName = this.elRef.nativeElement.getAttribute('ngControl');
      this.theControl = this.tinyMce.form.controls[this.controlName];
    });

    this.elRef.nativeElement.setAttribute('tiny-id', this.id);
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      tinymce.init({
        valid_elements: '*[*]',
        selector: '[tiny-id=' + this.id + ']',
        height: 400,
        theme: 'modern',
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen',
          'insertdatetime media nonbreaking save table contextmenu directionality',
          'emoticons template paste textcolor colorpicker textpattern imagetools'
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons',
        image_advtab: true,
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

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TinyEditor = (function () {
    function TinyEditor(elRef, zone) {
        this.elRef = elRef;
        this.zone = zone;
        this.id = Math.random().toString(36).substr(2, 5);
    }
    TinyEditor.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.controlName = _this.elRef.nativeElement.getAttribute('ngControl');
            _this.theControl = _this.tinyMce.form.controls[_this.controlName];
        });
        this.elRef.nativeElement.setAttribute('tiny-id', this.id);
    };
    TinyEditor.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            tinymce.init({
                valid_elements: '*[*]',
                selector: '[tiny-id=' + _this.id + ']',
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
                setup: function (editor) {
                    editor.on('keyup change', function () {
                        _this.zone.run(function () {
                            var value = editor.getContent();
                            _this.theControl.updateValue(value, { emitEvent: true });
                            _this.theControl.markAsDirty();
                            _this.theControl.markAsTouched();
                            _this.theControl.updateValueAndValidity();
                        });
                    });
                }
            });
        });
    };
    TinyEditor.prototype.ngOnDestroy = function () {
        try {
            tinymce.remove('[tiny-id=' + this.id + ']');
        }
        catch (e) {
            console.error('Error:', e);
        }
    };
    TinyEditor = __decorate([
        core_1.Directive({
            inputs: ['tinyMce'],
            selector: '[tinyMce]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone])
    ], TinyEditor);
    return TinyEditor;
}());
exports.TinyEditor = TinyEditor;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUEiLCJmaWxlIjoidGlueW1jZV8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLCBEaXJlY3RpdmUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgaW5wdXRzOiBbJ3RpbnlNY2UnXSxcclxuICBzZWxlY3RvcjogJ1t0aW55TWNlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbnlFZGl0b3Ige1xyXG4gIHB1YmxpYyB0aW55TWNlOiBDb250cm9sR3JvdXA7XHJcbiAgcHJpdmF0ZSBpZDogc3RyaW5nID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpO1xyXG4gIHByaXZhdGUgY29udHJvbE5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIHRoZUNvbnRyb2w6IENvbnRyb2w7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbE5hbWUgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCduZ0NvbnRyb2wnKTtcclxuICAgICAgdGhpcy50aGVDb250cm9sID0gdGhpcy50aW55TWNlLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sTmFtZV07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aW55LWlkJywgdGhpcy5pZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGlueW1jZS5pbml0KHtcclxuICAgICAgICB2YWxpZF9lbGVtZW50czogJypbKl0nLFxyXG4gICAgICAgIHNlbGVjdG9yOiAnW3RpbnktaWQ9JyArIHRoaXMuaWQgKyAnXScsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgdGhlbWU6ICdtb2Rlcm4nLFxyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgY2hhcm1hcCBwcmludCBwcmV2aWV3IGhyIGFuY2hvciBwYWdlYnJlYWsnLFxyXG4gICAgICAgICAgJ3NlYXJjaHJlcGxhY2Ugd29yZGNvdW50IHZpc3VhbGJsb2NrcyB2aXN1YWxjaGFycyBjb2RlIGZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICAgJ2luc2VydGRhdGV0aW1lIG1lZGlhIG5vbmJyZWFraW5nIHNhdmUgdGFibGUgY29udGV4dG1lbnUgZGlyZWN0aW9uYWxpdHknLFxyXG4gICAgICAgICAgJ2Vtb3RpY29ucyB0ZW1wbGF0ZSBwYXN0ZSB0ZXh0Y29sb3IgY29sb3JwaWNrZXIgdGV4dHBhdHRlcm4gaW1hZ2V0b29scydcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRvb2xiYXIxOiAnaW5zZXJ0ZmlsZSB1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZScsXHJcbiAgICAgICAgdG9vbGJhcjI6ICdwcmludCBwcmV2aWV3IG1lZGlhIHwgZm9yZWNvbG9yIGJhY2tjb2xvciBlbW90aWNvbnMnLFxyXG4gICAgICAgIGltYWdlX2FkdnRhYjogdHJ1ZSxcclxuICAgICAgICBzZXR1cDogKGVkaXRvcik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCBjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZTogT2JqZWN0ID0gZWRpdG9yLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgICB0aGlzLnRoZUNvbnRyb2wudXBkYXRlVmFsdWUodmFsdWUsIHtlbWl0RXZlbnQ6IHRydWV9KTtcclxuICAgICAgICAgICAgICB0aGlzLnRoZUNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgICAgICAgICAgICB0aGlzLnRoZUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGlueW1jZS5yZW1vdmUoJ1t0aW55LWlkPScgKyB0aGlzLmlkICsgJ10nKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=

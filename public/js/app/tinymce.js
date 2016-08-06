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

//# sourceMappingURL=data:application/json;base64,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QUFBIiwiZmlsZSI6InRpbnltY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsIERpcmVjdGl2ZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBpbnB1dHM6IFsndGlueU1jZSddLFxyXG4gIHNlbGVjdG9yOiAnW3RpbnlNY2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlueUVkaXRvciB7XHJcbiAgcHVibGljIHRpbnlNY2U6IENvbnRyb2xHcm91cDtcclxuICBwcml2YXRlIGlkOiBzdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSk7XHJcbiAgcHJpdmF0ZSBjb250cm9sTmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgdGhlQ29udHJvbDogQ29udHJvbDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9sTmFtZSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25nQ29udHJvbCcpO1xyXG4gICAgICB0aGlzLnRoZUNvbnRyb2wgPSB0aGlzLnRpbnlNY2UuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2xOYW1lXTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpbnktaWQnLCB0aGlzLmlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aW55bWNlLmluaXQoe1xyXG4gICAgICAgIHZhbGlkX2VsZW1lbnRzOiAnKlsqXScsXHJcbiAgICAgICAgc2VsZWN0b3I6ICdbdGlueS1pZD0nICsgdGhpcy5pZCArICddJyxcclxuICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICB0aGVtZTogJ21vZGVybicsXHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgaHIgYW5jaG9yIHBhZ2VicmVhaycsXHJcbiAgICAgICAgICAnc2VhcmNocmVwbGFjZSB3b3JkY291bnQgdmlzdWFsYmxvY2tzIHZpc3VhbGNoYXJzIGNvZGUgZnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAnaW5zZXJ0ZGF0ZXRpbWUgbWVkaWEgbm9uYnJlYWtpbmcgc2F2ZSB0YWJsZSBjb250ZXh0bWVudSBkaXJlY3Rpb25hbGl0eScsXHJcbiAgICAgICAgICAnZW1vdGljb25zIHRlbXBsYXRlIHBhc3RlIHRleHRjb2xvciBjb2xvcnBpY2tlciB0ZXh0cGF0dGVybiBpbWFnZXRvb2xzJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdG9vbGJhcjE6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJyxcclxuICAgICAgICB0b29sYmFyMjogJ3ByaW50IHByZXZpZXcgbWVkaWEgfCBmb3JlY29sb3IgYmFja2NvbG9yIGVtb3RpY29ucycsXHJcbiAgICAgICAgaW1hZ2VfYWR2dGFiOiB0cnVlLFxyXG4gICAgICAgIHNldHVwOiAoZWRpdG9yKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwIGNoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHZhbHVlOiBPYmplY3QgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC51cGRhdGVWYWx1ZSh2YWx1ZSwge2VtaXRFdmVudDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy50aGVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aW55bWNlLnJlbW92ZSgnW3RpbnktaWQ9JyArIHRoaXMuaWQgKyAnXScpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

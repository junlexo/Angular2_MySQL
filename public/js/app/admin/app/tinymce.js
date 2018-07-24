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
            _this.theControl = _this.tinyMce.controls[_this.controlName];
        });
        this.elRef.nativeElement.setAttribute('tiny-id', this.id);
    };
    TinyEditor.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            tinymce.init({
                valid_elements: '*[*]',
                selector: '[tiny-id=' + _this.id + ']',
                schema: 'html5',
                height: 150,
                language: "en",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FwcC90aW55bWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFRNUQ7SUFPRSxvQkFBMkIsS0FBaUIsRUFBVSxJQUFZO1FBQXZDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBSjFELE9BQUUsR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFLN0QsQ0FBQztJQUVNLDZCQUFRLEdBQWY7UUFBQSxpQkFNQztRQUxDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLG9DQUFlLEdBQXRCO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDWCxjQUFjLEVBQUUsTUFBTTtnQkFDdEIsUUFBUSxFQUFFLFdBQVcsR0FBRyxLQUFJLENBQUMsRUFBRSxHQUFHLEdBQUc7Z0JBQ3JDLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFFBQVEsRUFBRyxJQUFJO2dCQUNmLEtBQUssRUFBRSxVQUFDLE1BQU07b0JBQ1osTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7d0JBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzRCQUNaLElBQUksS0FBSyxHQUFXLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7NEJBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7NEJBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt3QkFDM0MsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGdDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDO1lBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFFO1FBQUEsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBbkRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNuQixRQUFRLEVBQUUsV0FBVztTQUN0QixDQUFDOztrQkFBQTtJQWlERixpQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksa0JBQVUsYUFnRHRCLENBQUEiLCJmaWxlIjoiYWRtaW4vYXBwL3RpbnltY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsIERpcmVjdGl2ZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5kZWNsYXJlIHZhciB0aW55bWNlOiBhbnk7XG5ARGlyZWN0aXZlKHtcbiAgaW5wdXRzOiBbJ3RpbnlNY2UnXSxcbiAgc2VsZWN0b3I6ICdbdGlueU1jZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRpbnlFZGl0b3Ige1xuICBwdWJsaWMgdGlueU1jZTogQ29udHJvbEdyb3VwO1xuXG4gIHByaXZhdGUgaWQ6IHN0cmluZyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA1KTtcbiAgcHJpdmF0ZSBjb250cm9sTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHRoZUNvbnRyb2w6IGFueTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29udHJvbE5hbWUgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCduZ0NvbnRyb2wnKTtcbiAgICAgIHRoaXMudGhlQ29udHJvbCA9IHRoaXMudGlueU1jZS5jb250cm9sc1t0aGlzLmNvbnRyb2xOYW1lXTtcbiAgICB9KTtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aW55LWlkJywgdGhpcy5pZCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aW55bWNlLmluaXQoe1xuICAgICAgICB2YWxpZF9lbGVtZW50czogJypbKl0nLFxuICAgICAgICBzZWxlY3RvcjogJ1t0aW55LWlkPScgKyB0aGlzLmlkICsgJ10nLFxuICAgICAgICBzY2hlbWE6ICdodG1sNScsXG4gICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICBsYW5ndWFnZSA6IFwiZW5cIiwgLy8gY2hhbmdlIGxhbmd1YWdlIGhlcmVcbiAgICAgICAgc2V0dXA6IChlZGl0b3IpOiB2b2lkID0+IHtcbiAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwIGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdmFsdWU6IE9iamVjdCA9IGVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC51cGRhdGVWYWx1ZSh2YWx1ZSwge2VtaXRFdmVudDogdHJ1ZX0pO1xuICAgICAgICAgICAgICB0aGlzLnRoZUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgICAgdGhpcy50aGVDb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICAgICAgdGhpcy50aGVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGlueW1jZS5yZW1vdmUoJ1t0aW55LWlkPScgKyB0aGlzLmlkICsgJ10nKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGUpO1xuICAgIH1cbiAgfVxufSJdfQ==

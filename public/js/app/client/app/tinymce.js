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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvdGlueW1jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBUTVEO0lBT0Usb0JBQTJCLEtBQWlCLEVBQVUsSUFBWTtRQUF2QyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUoxRCxPQUFFLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBSzdELENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQUEsaUJBTUM7UUFMQyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxvQ0FBZSxHQUF0QjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsY0FBYyxFQUFFLE1BQU07Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXLEdBQUcsS0FBSSxDQUFDLEVBQUUsR0FBRyxHQUFHO2dCQUNyQyxNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsR0FBRztnQkFDWCxRQUFRLEVBQUcsSUFBSTtnQkFDZixLQUFLLEVBQUUsVUFBQyxNQUFNO29CQUNaLE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFO3dCQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs0QkFDWixJQUFJLEtBQUssR0FBVyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7NEJBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDOzRCQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDOzRCQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDOzRCQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxnQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQztZQUNILE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBRTtRQUFBLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQW5ESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDbkIsUUFBUSxFQUFFLFdBQVc7U0FDdEIsQ0FBQzs7a0JBQUE7SUFpREYsaUJBQUM7QUFBRCxDQWhEQSxBQWdEQyxJQUFBO0FBaERZLGtCQUFVLGFBZ0R0QixDQUFBIiwiZmlsZSI6ImNsaWVudC9hcHAvdGlueW1jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgRGlyZWN0aXZlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sR3JvdXAsIENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmRlY2xhcmUgdmFyIHRpbnltY2U6IGFueTtcbkBEaXJlY3RpdmUoe1xuICBpbnB1dHM6IFsndGlueU1jZSddLFxuICBzZWxlY3RvcjogJ1t0aW55TWNlXSdcbn0pXG5leHBvcnQgY2xhc3MgVGlueUVkaXRvciB7XG4gIHB1YmxpYyB0aW55TWNlOiBDb250cm9sR3JvdXA7XG5cbiAgcHJpdmF0ZSBpZDogc3RyaW5nID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpO1xuICBwcml2YXRlIGNvbnRyb2xOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgdGhlQ29udHJvbDogYW55O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb250cm9sTmFtZSA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25nQ29udHJvbCcpO1xuICAgICAgdGhpcy50aGVDb250cm9sID0gdGhpcy50aW55TWNlLmNvbnRyb2xzW3RoaXMuY29udHJvbE5hbWVdO1xuICAgIH0pO1xuICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpbnktaWQnLCB0aGlzLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICAgIHZhbGlkX2VsZW1lbnRzOiAnKlsqXScsXG4gICAgICAgIHNlbGVjdG9yOiAnW3RpbnktaWQ9JyArIHRoaXMuaWQgKyAnXScsXG4gICAgICAgIHNjaGVtYTogJ2h0bWw1JyxcbiAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgIGxhbmd1YWdlIDogXCJlblwiLCAvLyBjaGFuZ2UgbGFuZ3VhZ2UgaGVyZVxuICAgICAgICBzZXR1cDogKGVkaXRvcik6IHZvaWQgPT4ge1xuICAgICAgICAgIGVkaXRvci5vbigna2V5dXAgY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZTogT2JqZWN0ID0gZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgdGhpcy50aGVDb250cm9sLnVwZGF0ZVZhbHVlKHZhbHVlLCB7ZW1pdEV2ZW50OiB0cnVlfSk7XG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICAgICAgICB0aGlzLnRoZUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgICAgICB0aGlzLnRoZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aW55bWNlLnJlbW92ZSgnW3RpbnktaWQ9JyArIHRoaXMuaWQgKyAnXScpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZSk7XG4gICAgfVxuICB9XG59Il19

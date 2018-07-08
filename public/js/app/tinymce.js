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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbnltY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0QyxlQUFlLENBQUMsQ0FBQTtBQVE1RDtJQU9FLG9CQUEyQixLQUFpQixFQUFVLElBQVk7UUFBdkMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFKMUQsT0FBRSxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUs3RCxDQUFDO0lBRU0sNkJBQVEsR0FBZjtRQUFBLGlCQU1DO1FBTEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sb0NBQWUsR0FBdEI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNYLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixRQUFRLEVBQUUsV0FBVyxHQUFHLEtBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRztnQkFDckMsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsUUFBUSxFQUFHLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLFVBQUMsTUFBTTtvQkFDWixNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTt3QkFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7NEJBQ1osSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDOzRCQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQzs0QkFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs0QkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO3dCQUMzQyxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUM7WUFDSCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUU7UUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFuREg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1NBQ3RCLENBQUM7O2tCQUFBO0lBaURGLGlCQUFDO0FBQUQsQ0FoREEsQUFnREMsSUFBQTtBQWhEWSxrQkFBVSxhQWdEdEIsQ0FBQSIsImZpbGUiOiJ0aW55bWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLCBEaXJlY3RpdmUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xHcm91cCwgQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZGVjbGFyZSB2YXIgdGlueW1jZTogYW55O1xuQERpcmVjdGl2ZSh7XG4gIGlucHV0czogWyd0aW55TWNlJ10sXG4gIHNlbGVjdG9yOiAnW3RpbnlNY2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW55RWRpdG9yIHtcbiAgcHVibGljIHRpbnlNY2U6IENvbnRyb2xHcm91cDtcblxuICBwcml2YXRlIGlkOiBzdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSk7XG4gIHByaXZhdGUgY29udHJvbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSB0aGVDb250cm9sOiBhbnk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyb2xOYW1lID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnbmdDb250cm9sJyk7XG4gICAgICB0aGlzLnRoZUNvbnRyb2wgPSB0aGlzLnRpbnlNY2UuY29udHJvbHNbdGhpcy5jb250cm9sTmFtZV07XG4gICAgfSk7XG4gICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgndGlueS1pZCcsIHRoaXMuaWQpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGlueW1jZS5pbml0KHtcbiAgICAgICAgdmFsaWRfZWxlbWVudHM6ICcqWypdJyxcbiAgICAgICAgc2VsZWN0b3I6ICdbdGlueS1pZD0nICsgdGhpcy5pZCArICddJyxcbiAgICAgICAgc2NoZW1hOiAnaHRtbDUnLFxuICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgbGFuZ3VhZ2UgOiBcImVuXCIsIC8vIGNoYW5nZSBsYW5ndWFnZSBoZXJlXG4gICAgICAgIHNldHVwOiAoZWRpdG9yKTogdm9pZCA9PiB7XG4gICAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCBjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlOiBPYmplY3QgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgICAgICB0aGlzLnRoZUNvbnRyb2wudXBkYXRlVmFsdWUodmFsdWUsIHtlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgdGhpcy50aGVDb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICAgIHRoaXMudGhlQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRpbnltY2UucmVtb3ZlKCdbdGlueS1pZD0nICsgdGhpcy5pZCArICddJyk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlKTtcbiAgICB9XG4gIH1cbn0iXX0=

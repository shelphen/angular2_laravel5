System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ReCaptchaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReCaptchaComponent = (function () {
                function ReCaptchaComponent(_zone) {
                    var _this = this;
                    this._zone = _zone;
                    this.site_key = null;
                    window['verifyCallback'] = function (response) { return _this._zone.run(_this.recaptchaCallback.bind(_this, response)); };
                    this.captchaResponse = new core_1.EventEmitter();
                }
                ReCaptchaComponent.prototype.recaptchaCallback = function (response) {
                    this.captchaResponse.emit(response);
                };
                /*Display captcha form/image*/
                ReCaptchaComponent.prototype.showCaptcha = function () {
                    var doc = document.body;
                    var script = document.createElement('script');
                    script.innerHTML = '';
                    script.src = 'https://www.google.com/recaptcha/api.js';
                    script.async = true;
                    script.defer = true;
                    doc.appendChild(script);
                };
                ReCaptchaComponent.prototype.ngOnInit = function () {
                    this.showCaptcha();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ReCaptchaComponent.prototype, "site_key", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ReCaptchaComponent.prototype, "captchaResponse", void 0);
                ReCaptchaComponent = __decorate([
                    core_1.Component({
                        selector: 're-captcha',
                        template: '<div class="g-recaptcha" [attr.data-sitekey]="site_key" data-callback="verifyCallback"></div>'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], ReCaptchaComponent);
                return ReCaptchaComponent;
            }());
            exports_1("ReCaptchaComponent", ReCaptchaComponent);
        }
    }
});

//# sourceMappingURL=captcha.js.map

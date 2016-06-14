System.register(["@angular/core", "@angular/common", "@angular/router", "./user", "./auth.service", "../errors/error.service"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, user_1, auth_service_1, error_service_1;
    var SigninComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (error_service_1_1) {
                error_service_1 = error_service_1_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(_fb, _authService, _router, _errorService) {
                    this._fb = _fb;
                    this._authService = _authService;
                    this._router = _router;
                    this._errorService = _errorService;
                }
                SigninComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var user = new user_1.User(this.myForm.value.email, this.myForm.value.password);
                    this._authService.signin(user)
                        .subscribe(function (data) {
                        console.log(data),
                            // localStorage.setItem('token', data.token);
                            // localStorage.setItem('userId', data.userId);
                            _this._router.navigateByUrl('/');
                    }, function (error) { return _this._errorService.handleError(error); });
                };
                SigninComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_1.Validators.required]
                    });
                };
                SigninComponent.prototype.resetPassword = function () {
                    console.log('Reset Password');
                };
                SigninComponent.prototype.isEmail = function (control) {
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidMail: true };
                    }
                };
                SigninComponent = __decorate([
                    core_1.Component({
                        selector: 'my-signin',
                        template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Mail</label>\n                    <input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n                </div>\n                <button type=\"button\" class=\"btn btn-warning\" (click)=\"resetPassword()\">Reset Password</button>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign In</button>\n            </form>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService, router_1.Router, error_service_1.ErrorService])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_1("SigninComponent", SigninComponent);
        }
    }
});

//# sourceMappingURL=signin.component.js.map

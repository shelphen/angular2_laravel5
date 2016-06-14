System.register(["@angular/core", "./error"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, error_1;
    var ErrorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (error_1_1) {
                error_1 = error_1_1;
            }],
        execute: function() {
            ErrorService = (function () {
                function ErrorService() {
                    this.errorOccurred = new core_1.EventEmitter();
                }
                ErrorService.prototype.handleError = function (error) {
                    var errorData = new error_1.Error(error.title, error.error.message);
                    this.errorOccurred.emit(errorData);
                };
                return ErrorService;
            }());
            exports_1("ErrorService", ErrorService);
        }
    }
});

//# sourceMappingURL=error.service.js.map

System.register(['../Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var TakeWhileOperator, TakeWhileSubscriber;
    /**
     * @param predicate
     * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
     * @method takeWhile
     * @owner Observable
     */
    function takeWhile(predicate) {
        return this.lift(new TakeWhileOperator(predicate));
    }
    exports_1("takeWhile", takeWhile);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            TakeWhileOperator = (function () {
                function TakeWhileOperator(predicate) {
                    this.predicate = predicate;
                }
                TakeWhileOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
                };
                return TakeWhileOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            TakeWhileSubscriber = (function (_super) {
                __extends(TakeWhileSubscriber, _super);
                function TakeWhileSubscriber(destination, predicate) {
                    _super.call(this, destination);
                    this.predicate = predicate;
                    this.index = 0;
                }
                TakeWhileSubscriber.prototype._next = function (value) {
                    var destination = this.destination;
                    var result;
                    try {
                        result = this.predicate(value, this.index++);
                    }
                    catch (err) {
                        destination.error(err);
                        return;
                    }
                    this.nextOrComplete(value, result);
                };
                TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
                    var destination = this.destination;
                    if (Boolean(predicateResult)) {
                        destination.next(value);
                    }
                    else {
                        destination.complete();
                    }
                };
                return TakeWhileSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=takeWhile.js.map
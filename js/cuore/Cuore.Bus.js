CUORE.Bus = (function(undefined) {
    var subscriptions = [],
        debugModeON = false;

    function Subscription(subscriber, eventName) {
        this.subscriber = subscriber;
        this.eventName = eventName;
    }

    Subscription.prototype.equals = function(otherSubscription) {
        var sameSubscriber = (this.subscriber === otherSubscription.subscriber),
            sameEvent = (this.eventName === otherSubscription.eventName);

        return (sameSubscriber && sameEvent);
    };

    function subscribe (subscriber, eventName) {
        if (!_validSubscriber(subscriber)) {
            throw new Error("Not a subscriber (lacks eventDispatch function)");
        }

        if (!_subscriptionExists(subscriber, eventName)) {
            subscriptions.push(new Subscription(subscriber, eventName));
        }
    };

    var unsubscribe = function(subscriber, events) {
            var i;

            if (typeof events == "string") {
                _removeSubscription(new Subscription(subscriber, events));
                return;
            }

            for (i = 0; i < events.length; i++) {
                _removeSubscription(new Subscription(subscriber, events[i]));
            }
        };

    var hasSubscriptions = function() {
            return (subscriptions.length > 0);
        };

    var subscribers = function(theEvent) {
            var selectedSubscribers = [];
            for (var i = 0, len = subscriptions.length; i < len; i++) {
                var subscription = subscriptions[i];
                if (subscription.eventName === theEvent) {
                    selectedSubscribers.push(subscription.subscriber);
                }
            }
            return selectedSubscribers;
        };

    var emit = function(eventName, params) {
            var subscribersList = this.subscribers(eventName);

            debug("Bus.emit (event, params)");
            debug(eventName);
            debug(params);
            debug("------------");

            for (var i = 0, len = subscribersList.length; i < len; i++) {
                subscribersList[i].eventDispatch(eventName, params);
            }
        };

    var _subscriptionExists = function(subscriber, eventName) {
            var i, len = subscriptions.length,
                theSubscription = new Subscription(subscriber, eventName);

            for (i = 0; i < len; i++) {
                if (theSubscription.equals(subscriptions[i])) {
                    return true;
                }
            }
            return false;
        }

    var _removeSubscription = function(theSubscription) {
            var i, len = subscriptions.length;

            for (i = 0; i < len; i++) {
                if (theSubscription.equals(subscriptions[i])) {
                    subscriptions.splice(i, 1);
                    return;
                }
            }
        };

    var _validSubscriber = function(subscriber) {
            return subscriber.eventDispatch;
        };

    var debug = function(object) {
            if (debugModeON) {
                console.log(object);
            }
        };

    var enableDebug = function() {
            debugModeON = true;
        }

    var disableDebug = function() {
            debugModeON = false;
        }

    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        hasSubscriptions: hasSubscriptions,
        subscribers: subscribers,
        emit: emit,
        enableDebug: enableDebug,
        disableDebug: disableDebug
    };
})();
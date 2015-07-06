"use strict";

CUORE.Matchers = {
    toBeInstanceOf: function() {
        return {
            compare: function(actual, expectedType) {
                var result = {};
                result.pass = actual instanceof expectedType;
                if (!result.pass) {
                    result.message = actual + " isn't an instance of expected type";
                }
                return result;
            }
        };
    }
};
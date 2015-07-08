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
    },

    toHaveBeenCalledOnceWithTheComponent: function() {
        return {
            compare: function(actual, comp) {
                var result = {};
                result.pass = actual.calls.count() == 1 && actual.calls.mostRecent().args[0] == comp;
                if (!result.pass) {
                    result.message = "Expected the spy " + jasmine.pp(actual) + " to have been called with the component " + comp.getName();
                }
                return result;
            }
        };
    }
};
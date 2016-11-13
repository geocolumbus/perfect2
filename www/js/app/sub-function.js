"use strict";

define([], function () {
    return function (configuration) {
        return {
            say: function () {
                if (configuration) {
                    return configuration;
                } else {
                    return "I say!";
                }
            }
        }
    }
});

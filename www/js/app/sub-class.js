"use strict";

define([], function() {
    return class Person {
        constructor(name) {
            this._name = name;
        }

        getName() {
            return this._name;
        }
    }
});

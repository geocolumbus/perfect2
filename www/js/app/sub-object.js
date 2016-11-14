"use strict";

define(['lib/jquery'], function () {
    return {
        setName: function (name) {
            this._name = name;
        },
        getName: function () {
            return this._name;
        }
    }
});

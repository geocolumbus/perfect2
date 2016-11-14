"use strict";

requirejs.config({
    baseUrl: '',
    paths: {
        app: 'js/app',
        lib: 'js/lib'
    }
});

// Start the main app logic.
define(['lib/jquery', 'app/sub-object', 'app/sub-function', 'app/sub-class'],

    function($, subObject, subFunction, subClass) {
        console.log('subObject:');
        subObject.setName('George');
        console.log(subObject.getName());
        console.log("\n");

        console.log('subFunction:');
        var myFunc = new subFunction('This is a fine time.');
        var myFunc2 = new subFunction();
        console.log(myFunc.say());
        console.log(myFunc2.say());
        console.log("\n");

        console.log('subClass:');
        var myClass = new subClass('george');
        console.log(myClass.getName());
        console.log("\n");

    });

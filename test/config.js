var tests = [];
for (var file in window.__karma__.files) {
    console.log(file);
    if (file.indexOf("/test") != -1 && file != "/test/config.js") {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/www/js',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
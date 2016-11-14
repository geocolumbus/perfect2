var fs = require('fs'),
    files = [{
        "source": "jquery/dist/jquery.min.js",
        "name": "jquery"
    }, {
        "source": "requirejs/require.js",
        "name": "require"
    }, {
        "source": "bootstrap/dist/js/bootstrap.min.js",
        "name": "bootstrap"
    }, {
        "source": "bootstrap/dist/css/bootstrap.min.css",
        "name": "bootstrap"
    }];

files.forEach(function(file) {
    if (file.source.substr(file.source.length - 2, 2) === "js") {
        copyFile('node_modules/' + file.source, 'www/js/lib/' + file.name + '.js', function() {
            console.log('copied ' + file.name + '.js to www/js/lib folder.')
        });
    } else {
        copyFile('node_modules/' + file.source, 'www/css/lib/' + file.name + '.css', function() {
            console.log('copied ' + file.name + '.css to www/css/lib folder.')
        });
    }
});

// Copy a file
function copyFile(source, target, cb) {
    var cbCalled = false;

    var rd = fs.createReadStream(source);
    rd.on("error", function(err) {
        done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function(err) {
        done(err);
    });
    wr.on("close", function(ex) {
        done();
    });
    rd.pipe(wr);

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}

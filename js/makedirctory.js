const fs = require(`fs`);

fs.mkdir(process.argv[2], function (err) {
    if (err) {
        return console.log('failed to write directory', err);
    }
});
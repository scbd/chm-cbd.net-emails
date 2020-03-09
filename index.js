
const sesForwarder = require('aws-lambda-ses-forwarder');
const config       = require("config.json");

exports.handler = function(event, context, callback) {
    return sesForwarder.handler(event, context, callback, { config: config  });
};

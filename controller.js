'use strict';

const response = require('./res');
const connection = require('./conn');

exports.users = function (req, res) {

    connection.query('SELECT * FROM data_info', function (error, results, fields) {
        if (error) throw error;
       res.send(results);
    });

}
    exports.index = function (req, res) {
        response.ok("Hello", res)
    };
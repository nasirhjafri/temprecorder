'use strict';

module.exports = function(app) {
    let tempReporter = require('../controllers/tempReporter');

    app.route('/temp')
        .get(tempReporter.get_temp_by_city);
};

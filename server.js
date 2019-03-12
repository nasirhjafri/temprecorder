let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


let routes = require('./api/routes/tempReporterRoutes');
routes(app);

app.listen(port);

console.log('Temp reporter RESTful API server started on: ' + port);

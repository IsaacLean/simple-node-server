var querystring = require('querystring');

function start(response) {
    console.log('Request handler "start" was called.');

    var body = '<html>'+
        '<head></head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text"></textarea>'+
        '<input type="submit" value="Submit">'+
        '</form>'+
        '</body>'+
    '</html>';

    response.writeHead('200', {'Content-Type': 'text/html'});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log('Request handler "upload" was called.')

    response.writeHead('200', {'Content-Type': 'text/plain'});
    response.write('Hello Upload');
    querystring.parse(postData).text;
    response.end();
}

exports.start = start;
exports.upload = upload;

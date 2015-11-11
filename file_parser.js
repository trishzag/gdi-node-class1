var http = require('http');
var fs = require('fs');
var cwd = process.cwd();

http.createServer(function(req, res) {
    fs.readFile(cwd + '/mytext.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data.toString());
  });
}).listen(3000);

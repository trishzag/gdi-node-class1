var fs = require('fs');
var cwd = process.cwd();

// fs.readFile(cwd + '/dinosaurs.txt', function(err, data) {
//   var data = data.toString().split('\n');
//   console.log(data[0]);
// });
//
// fs.readFile(cwd + '/people.json', function(err, data) {
//   var data = JSON.parse(data.toString());
//   console.log(data[0]);
// });

fs.readFile(cwd + '/mytext.txt', function(err, data) {
  var data = data.toString().split('\n');
  console.log(data);
});

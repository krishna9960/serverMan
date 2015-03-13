var express = require('express');
var multer = require('multer');
var unzip = require('unzip');
var fs = require('fs');
// var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/serverman");

// var db = mongoose.connection;
// var Schema = mongoose.schema;
// var projectList = new Schema({
//   fileName: {
//     type: String
//   },
//   size: {
//     type: String
//   }
// });
// var projectModel = mongoose.model("projects", projectList);

var app = express()
app.use(multer({
  dest: './uploads/',
  onFileUploadComplete: function(file) {
    fs.createReadStream(file.path).pipe(unzip.Extract({
      path: './../../'
    }));
    // saveToDB(file);
  }
}))

// function saveToDB(file) {
//   var project = new projectModel({
//     fileName: file.orignalname,
//     size: file.size
//   })
// };
app.post('*', function(req, res) {
  console.log(req.body) // form fields
  console.log(req.files) // form files
  res.status(204).end()
});
var server = app.listen(process.env.port || 3000)
  //updated by updated installer

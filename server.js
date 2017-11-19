var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, './views'));
// mongoose.Promise = global.Promise;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qanda');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, "/public/dist")));
var Schema = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
  date: {type: Date, required: true},
  time: {type: String, required: true},
  user: {type: String},
  complaint: {type: String, required: true},
},{timestamps: true});
mongoose.model("Appointment", AppointmentSchema);
var Appointment = mongoose.model("Appointment");

app.post("/appointments", function(req, res) {
  var appointment = new Appointment({date: req.body.date, time: req.body.time, user: req.body.user, complaint: req.body.complaint});
  appointment.save(function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("success create appointment")
    }
  })
})

app.get("/appointments", function(req, res) {
  Appointment.find({}).sort({createdAt: "desc"}).exec(function(err, result) {
    if(err) {
      console.log(err);
    }
    else {
      res.json(result);
    }
  })
})

app.post("/appointments/:id", function(req, res) {
  Appointment.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log("delete fail from server");
    }
    else {
      console.log("success delete from server")
    }
  })
})

// app.post('/questions/search', function(req, res) {
//   Appointment.find({complaint: {$regex: req.body.search}}).exec(function(err, result) {
//     if(err) {
//       console.log(err);
//     }
//     else {
//       res.json(result);
//     }
//   })
// })












































app.listen(8000, function() {
    console.log("listening on port 8000");
   });

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"));
});

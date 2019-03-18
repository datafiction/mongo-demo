
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = 'mongodb://caseolap:caseolap@localhost:27017/mesa?authSource=admin';


var samples = require('./data/abst.json');
console.log("Data loaded to environment");




//connect to the database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



//create a collection in database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mesa");

  dbo.createCollection("samples", function(err, res) {
    if (err) throw err;
    console.log("samples collection created!");
    db.close();
  });

});



//populate the database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  	var dbo = db.db("mesa");

  	samples.forEach(function(value){
  		var abst = value;

  		dbo.collection("samples").insertOne(abst, function(err, res) {
    	if (err) throw err;
  		});
	});
	console.log("all items inserted to database");
	db.close();
});









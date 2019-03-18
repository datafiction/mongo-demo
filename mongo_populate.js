var MongoClient = require('mongodb').MongoClient;


//1. use this line with USER:PASSWARD when using cloud (AWS)
var url = 'mongodb://USER:PASSWORD@localhost:27017/donorschoose?authSource=admin';

//2. Use this when using MongoAtlas
//var url = "mongodb+srv://USER:PASSWORD@cluster0-ui9hr.mongodb.net/test?retryWrites=true";


//3. use this line if using PC
//urlSubjectViews: 'mongodb://localhost:27017/donorschoose',





var samples = require('./sampledata.json');
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

  var dbo = db.db("donorschoose");

  dbo.createCollection("projects", function(err, res) {
    if (err) throw err;
    console.log("samples collection created!");
    db.close();
  });

});



//populate the database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  	var dbo = db.db("donorschoose");

  	samples.forEach(function(value){
  		var abst = value;

  		dbo.collection("projects").insertOne(abst, function(err, res) {
    	if (err) throw err;
  		});
	});
	console.log("all items inserted to database");
	db.close();
});

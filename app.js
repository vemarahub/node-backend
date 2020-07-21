var express=require("express");
var app=express();

var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://vemara:Vemara@123@cluster0-rc1yn.mongodb.net';
const dbName = 'vemaradb';
var arr=[];
var i=0;

MongoClient.connect(url, function( err,client ){
	if(!err){
		console.log("Connected to Mongo Instance Successfully");
	}
	
	const database = client.db(dbName);
	database.collection('mycol').find()
    . toArray((err, results) => {
        if(err) throw err;

        results.forEach((value)=>{
			arr[i]=value;
			i++;
            console.log(value);
			
        });
    })
	client.close();
	
})




app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin', "*");
next();
});

app.listen(3000, ()=>{
	console.log("Server running on localhost:3000");
})

app.get("/videos",(req,res,next)=>{
	res.json(
	arr
	);
	
	
	
});
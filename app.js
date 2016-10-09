const express = require('express');
const port = process.env.PORT || 1050;
const app = express();


app.use("/data", express.static(__dirname + "/data"));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
})

app.listen(port, function(){
	console.log("Server listening to", port);
});

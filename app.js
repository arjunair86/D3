const express = require('express');
const port = process.env.PORT || 1050;
const app = express();

const exec = require('child_process').exec;

exec(`google-chrome http://localhost:${port}`, (error, stdout, stderr) => {
	if(error){
		console.log("exec error: ${error}")
	}
	console.log(`stdout: ${stdout}`);
  	console.log(`stderr: ${stderr}`);
})


app.use("/data", express.static(__dirname + "/data"));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
})

app.listen(port, function(){
	console.log(`Server listening to ${port}`);
});

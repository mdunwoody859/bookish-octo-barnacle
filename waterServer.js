/*Ok this is gonna be a node server about water*/

var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/public/'));



/*http.createServer(function(req,res) {
	var filePath = path.join(__dirname,'index.html');
	

	fs.readFile('index.html',function(err,data) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.write("This is a water website");
	res.end();
}); */
app.get('waterOpinions.txt',function (req,res){
	res.sendFile("./waterOpinions.txt");
});
app.listen(8089);

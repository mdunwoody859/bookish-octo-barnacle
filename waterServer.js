/*Ok this is gonna be a node server about water*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
	fs.readFile('index.html',function(err,data) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.write("This is a water website");
	res.end();
});
http.get('waterOpinions.txt',function (response){
	reponse.send("./waterOpinions.txt");
})
}).listen(8089);

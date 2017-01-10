var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var server1 = http.createServer(function(request, response) {
    response.end("It works! Path Hit: " + request.url);
});

server1.listen(PORT1, function() {
    console.log("server listening on http://localhost:%s", PORT1);

});

var server2 = http.createServer(function(request, response) {
    response.end("It works! Path Hit: " + request.url);
});

server2.listen(PORT2, function() {
    console.log("server listening on http://localhost:%s", PORT2);

});

var express = require('express');
var port = 8888;
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');
/* We get this from the angular app
    {
        name: 'Jake',
        body: 'Hey whats up guys?',
    }
*/
var chatroom = [{name: 'Server Says', body: 'what what'}];

server.use(bodyParser.json());
server.use(cors());


server.post('/messages/new-message', function(req, res){
    var chatObj = req.body;
    
    if(!chatObj){
      return res.send('Bad Message Bub!')
    }
    
    chatroom.push(chatObj);
    res.send('Message Received');
});

server.get('/messages', function(req, res){
    res.send(chatroom);
})

server.get('/bananas', function(req, res){
    res.send('You asked for bananas?')
})


server.listen(port, function(){
   console.log('Server is up and going on port: ', port);
})

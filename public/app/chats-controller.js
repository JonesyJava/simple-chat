app.controller('ChatsController', function($scope, $http){
    function getChats (){
        $http.get('http://localhost:8888/messages')
            .success(function(chats){
                $scope.chats = chats;
            });
    }
        
    $scope.sendChat = function(){
        $http.post('http://localhost:8888/messages/new-message', $scope.newChat)
            .success(function(){
                getChats();
                $scope.newChat = '';
            });
    }
    
    
    getChats();
})
angular.module("listCtrl", [])
.controller("ListController", function($scope, $route, $routeParams, $timeout){ //route params lets us route to spec song


/*  $scope.$on("song:clicked", function(uselessStuff, i){
    console.log("reflected back to list ", i)
  })*/
  
//let's make it route to a spec song on click - but nvm
/*  $scope.clickSong = function(song, index) {
    $route.updateParams("/song/" + (index +1)  )
  }*/
  



//needs a delay
  if ($routeParams.id) {
    var id = parseInt($routeParams.id)
    console.log(id)
    //check if it does have id - truthy - and make it human readable by starting at 1
    if (id) {
      
      $timeout(function(song){
        var song=$scope.songs[parseInt($routeParams.id) - 1]
        $scope.changeSong(song)
      }, 20)
    }
  }

  $scope.changeSong = function(song, index) {
    $scope.$emit("clicked:song", song, index)
  }

  
/* //don't need bc moved list; but would enable sharing of song list
  $scope.$on("get:songs", function(){
    $scope.$emit("song:list", songs)
  })*/


})
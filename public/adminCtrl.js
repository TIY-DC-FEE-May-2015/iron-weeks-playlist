angular.module("adminCtrl", [])
  .controller("AdminController", function($scope){

  //$scope.admin = true // just to test
  //send a call for somngs - but don't need
  //$scope.$emit("get:songs")

  $scope.deleteOption = function(song, index){
    song.delete = !song.delete
  }

  $scope.deleteSong = function(song, index){
    $scope.songs.splice(index,1) //this works bc it has connection to parrent
  }

  $scope.addSong = function() {
    //make a new song that grabs title, artist, url
    var newsong = {
      artist: $scope.artist,
      title: $scope.title,
      url: $scope.url
    }

    $scope.artist=""
    $scope.title=""
    $scope.url =""

    $scope.songs.push(newsong)
  }
})
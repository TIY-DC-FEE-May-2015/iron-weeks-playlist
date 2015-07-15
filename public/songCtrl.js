angular.module("songCtrl",[])
  .controller("SongController", function($scope, $routeParams){
  //$scope.title = "Something Title"
  //use route params for specific song url - tells us about our route i guess
  
  /*$scope.clickButton = function(){
    //this is an event - goes up to parent
    $scope.$emit("clicked:button", 42)
  }
  */

  //now we've added Howler (in theory)
  var howlSong

  //listen for song change and update
  $scope.$on("change:song", function(x, song, index){
    console.log(arguments)
    //if current, stop
    if (howlSong) {
      howlSong.pause()
    }

    //$scope.title = song.title
    $scope.song = song
    $scope.songIndex = index

    howlSong = new Howl({
      urls: [ song.url ], //gets passed in from List Controller
      onend: function() {
        var nextIndex = $scope.songIndex+1
        var nextSong = $scope.songs[nextIndex]
        $scope.$emit("change:song", nextSong, nextIndex)
        //still need to update the player
      }
    }).play()
//set up a property for playPause to be functioning
    $scope.isPlaying = true
  })

  $scope.playPause = function(){
    if ($scope.isPlaying) {
      howlSong.pause()
    } else {
      howlSong.play()
    }
    $scope.isPlaying = !$scope.isPlaying
  }

  $scope.song={}

  $scope.advanceTrack = function() {
        var nextIndex = $scope.songIndex+1
        var nextSong = $scope.songs[nextIndex]
        $scope.$emit("change:song", nextSong, nextIndex)
    }
})
angular.module("songCtrl",[])
  .controller("SongController", function($scope, $routeParams){

  //use route params for specific song url - tells us about our route i guess

  //now we've added Howler (in theory)
  var howlSong

  //listen for song change and update
  $scope.$on("change:song", function(x, song, index){
    //if current, stop
    if (howlSong) {
      howlSong.pause()
    }
    if (song) {
    //$scope.title = song.title
      $scope.song.active = false
      $scope.song = song
      $scope.songIndex = index
    }

    $scope.song.active = true

    howlSong = new Howl({
      urls: [ $scope.song.url ], 
      onend: function() {
        $scope.advanceTrack()
        //updates the player view
        $scope.$digest()
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
    $scope.song.active = false
    $scope.songIndex++
    if ($scope.songIndex >= $scope.songs.length) {
      $scope.songIndex = 0
    }
    $scope.song = $scope.songs[$scope.songIndex]
    $scope.$emit("change:song")
    $scope.$digest()
  }
})
angular.module("pageCtrl", [])

  .controller("PageController", function($scope){
    //moved here and it worked
      //put here so there's more central access


    $scope.songs = [
      {
        title: "Alone At Night",
        artist: "Psychic Rites",
        url: "/assets/Psychic Rites - Alone At Night.mp3"
      },
      {
        title: "Chateau Lobby #4 (in C for Two Virgins)",
        artist: "Father John Misty",
        url: "/assets/father_john_misty_-_chateau_lobby_4_in_c_for_two_virgins.mp3"
      },
      {
        title: "Billions of Eyes",
        artist: "Lady Lamb",
        url: "/assets/Lady Lamb - Billions of Eyes.mp3",
      },
      {
        title: "Crawl",
        artist: "Is Tropical",
        url: "assets/is_tropical_-_crawl.mp3",
      },
      {
        title: "Made Up My Mind",
        artist: "Mikal Cronin",
        url: "assets/mikal_cronin_-_made_up_my_mind.mp3",
      },
      {
        title: "4th and Roebling",
        artist: "The Districts",
        url: "assets/the_districts_-_4th_and_roebling.mp3",
      },
      {
        title: "Renegades",
        artist: "The Young Evils",
        url: "assets/the_young_evils_-_renegades.mp3",
      },
      {
        title: "Silhouettes",
        artist: "Viet Cong",
        url: "assets/viet_cong_-_silhouettes.mp3",
      },
      {
        title: "Moaning Lisa Smile",
        artist: "Wolf Alice",
        url: "assets/wolf_alice_-_moaning_lisa_smile.mp3"
      },
    ]

    //now set {{page}} when a click event happens
    //$scope.page = "Hi I am page controller"
      //takes mult args, the second is what we want
        //first is always metadata - second (i) is what was sent along
  /*  $scope.$on("clicked:button", function(uselessStuff, i){
      $scope.page = "Hello, i said: "+i
      //send info to children - lets you get stuff to siblings - goes down
      $scope.$broadcast("song:clicked", i)
    })*/
    $scope.$on("clicked:song", function(x, song, index){
      $scope.$broadcast("change:song", song, index)
    })
//don't need bc the list is now storred here. otherwise it would broadcast down to childrens
    /*$scope.$on("get:songs", function(){
      $scope.$broadcast("get:songs")
    })*/

    $scope.adminToggle = function(){
      $scope.admin = !$scope.admin
    }
  })
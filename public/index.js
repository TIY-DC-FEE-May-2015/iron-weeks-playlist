var app = angular.module("playlistApp", [ 
  "ngRoute", 
  "pageCtrl", 
  "songCtrl", 
  "adminCtrl", 
  "listCtrl" 
])

//to configure the app - it will be a route procivder and loc provider
app.config(function($routeProvider){ //not actually using location provider
  //set up routes by when, pass in an object
    //give new htmls to go w/o breaking page
    //use template to grab form ng-view
  $routeProvider
  .when("/song/:id",{ //this will use route params to look at specific
    templateUrl: "templates/landing.html",
  //  controller: "ListController",
  })
  /*  .when("/song", {
    templateURL: "templates/song.html",
    controller: "SongController",
  })*/
  .when("/admin",{ //the url that gets called
    templateUrl: "templates/admin.html", //a place in the page to send it
    controller: "AdminController",
  })
  .otherwise({ //here is your default if blank or gibberish
    templateUrl: "templates/landing.html",
    //controller: "ListController", don't need a controller, just template
  })
})
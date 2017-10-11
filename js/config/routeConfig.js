app.config(function($routeProvider){

  $routeProvider.when("/home",{
    templateUrl:"templates/home.html",
    controller:"homeCtrl"
  });

  $routeProvider.when("/search",{
    templateUrl:"templates/search.html",
    controller:"searchCtrl"
  });

  $routeProvider.when("/error",{
    templateUrl:"templates/error.html"
  });

  $routeProvider.otherwise({redirectTo:"/home"});
});

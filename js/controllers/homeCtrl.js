app.controller("homeCtrl", function($scope, $location, githubAPI){

  $scope.searchRepositorie = function(repositorie){
    githubAPI.searchRepositorie(repositorie).then(function (data) {

      console.log(data);

    });
  };
});

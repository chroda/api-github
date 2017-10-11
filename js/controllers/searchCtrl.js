app.controller("searchCtrl", function($scope, $location, githubAPI){
  $scope.repos = [];

  $scope.searchRepositorie = function(repositorie){
    githubAPI.searchRepositorie(repositorie).then(function (data) {

      console.log(data);
      $scope.repos = data.data.items;
      console.log($scope.repos);
    });
  };
});

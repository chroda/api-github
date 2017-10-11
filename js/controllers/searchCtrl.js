app.controller("searchCtrl", function($scope, $location, githubAPI){
  $scope.repos = [];
  $scope.repos_count = false;

  $scope.searchRepositorie = function(repositorie){
    githubAPI.searchRepositorie(repositorie).then(function (data) {
      $scope.repos = data.data.items;
      $scope.repos_count = data.data.total_count;
    });
  };
});

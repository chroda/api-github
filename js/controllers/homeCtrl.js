app.controller("homeCtrl", function($scope, $location, githubAPI){
    $scope.repos = [];

    // hardcoded param
    let username = 'chroda';

    githubAPI.repositoriesByUser(username).then(function (data) {

      console.log(data);
      $scope.repos = data.data;

    });
});

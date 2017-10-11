app.factory("githubAPI", function($http, config){

  return {
    searchRepositorie : function(repositorie){
      return $http.get(config.baseUrl+'search/repositories?q=' + repositorie);
    },

    repositoriesByUser : function(username){
      return $http.get(config.baseUrl+'users/' + username + '/repos');
    }

  }

});

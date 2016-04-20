angular.module('cosmicdigest').service('FirebaseService', function($http){


  // var url = 'https://cosmic-digest.firebaseio.com/';
  //
  //
  //
  // this.getPost = function(id) {
  //     var postRef = new Firebase(url + id);
  //     return postRef;
  // };




  this.getPosts = function(section) {
    return $http ({
       method: 'GET',
       url: 'https://cosmic-digest.firebaseio.com/'+ section +'.json'})
  }


});

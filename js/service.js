angular.module('cosmicdigest').service('FirebaseService', function($http){


  var url = 'https://cosmic-digest.firebaseio.com/';

  this.getPosts = function() {
      var postsRef = new Firebase(url);
      return postsRef;
  };


  this.getPost = function(id) {
      var postRef = new Firebase(url + id);
      return postRef;
  };

  this.getComments = function(id) {
      var commentsRef = new Firebase(url + id + 'comments');
      return commentsRef;
  };




  this.getPosts = function(posts) {
    return $http ({
       method: 'GET',
       url: 'https://cosmic-digest.firebaseio.com/posts.json'})
  }

  // var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog");
  //
  // usersRef.set({
  // alanisawesome: {
  //   date_of_birth: "June 23, 1912",
  //   full_name: "Alan Turing"
  // },
  // gracehop: {
  //   date_of_birth: "December 9, 1906",
  //   full_name: "Grace Hopper"
  // }

// })
});

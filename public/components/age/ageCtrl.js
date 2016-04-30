angular.module('cosmicdigest').controller('ageCtrl', function($scope){


  $scope.getPosts = function (section) {
    // FirebaseService.getPosts(section).then(function(res){
    //   $scope.agePosts = res.data;
    //   console.log($scope.posts);


  };
  $scope.getPosts('age');




});

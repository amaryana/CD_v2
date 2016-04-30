angular.module('cosmicdigest').controller('dayCtrl', function($scope, $state){
 // console.log($state.current.name);

 $scope.getPosts = function (section) {
  //  FirebaseService.getPosts(section).then(function(res){
  //    $scope.posts = res.data;
  //    console.log($scope.posts);

};
 $scope.getPosts('day');



});

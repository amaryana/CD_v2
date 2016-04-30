angular.module('cosmicdigest').controller('futureCtrl', function($scope, $state){
 // console.log($state.current.name);

 $scope.getPosts = function (section) {
  //  FirebaseService.getPosts(section).then(function(res){
  //    $scope.future = res.data;
  //    console.log($scope.posts);

};
 $scope.getPosts('future');



});

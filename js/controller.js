angular.module('cosmicdigest').controller('PostsController', function($scope, $firebaseArray, FirebaseService){

  // $scope.postRef = $firebaseObject(postRef);
  // $scope.linkRef = $firebaseObject(postRef);
  // $scope.commentsRef = $firebaseArray(commentsRef);
  //
  // -$scope.test = 'hello';
  //-


$scope.getPosts = function () {
  FirebaseService.getPosts().then(function(res){
    $scope.posts = res.data;

  })
}
$scope.getPosts();

});

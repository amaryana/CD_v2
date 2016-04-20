angular.module('cosmicdigest').controller('healthCtrl', function($scope, FirebaseService, $state){
 // console.log($state.current.name);

 $scope.getPosts = function (section) {
   FirebaseService.getPosts(section).then(function(res){
     $scope.health = res.data;
     console.log($scope.posts);

   })
 }
 $scope.getPosts('health');



});

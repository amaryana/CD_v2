angular.module('cosmicdigest').controller('natureCtrl', function($scope, FirebaseService, $state){
 // console.log($state.current.name);

 $scope.getPosts = function (section) {
   FirebaseService.getPosts(section).then(function(res){
     $scope.nature = res.data;
     console.log($scope.posts);

   })
 }
 $scope.getPosts('nature');



});

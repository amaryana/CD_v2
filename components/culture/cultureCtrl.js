angular.module('cosmicdigest').controller('cultureCtrl', function($scope, FirebaseService, $state){
 // console.log($state.current.name);

 $scope.getPosts = function (section) {
   FirebaseService.getPosts(section).then(function(res){
     $scope.culture = res.data;
     console.log($scope.posts);

   })
 }
 $scope.getPosts('culture');



});

angular.module('cosmicdigest').controller('wealthCtrl', function($scope, FirebaseService, $state){
 // console.log($state.current.name);

 $scope.getPosts = function (section) {
   FirebaseService.getPosts(section).then(function(res){
     $scope.wealth = res.data;
     console.log($scope.posts);

   })
 }
 $scope.getPosts('wealth');



});

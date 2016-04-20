angular.module('cosmicdigest').directive('content', function(){
  return {
          templateUrl: "./directives/content.html",
          scope: {
            posts: '='
          }
  }
});

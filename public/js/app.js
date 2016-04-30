angular.module("cosmicdigest", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('day', {
          url: '/day',
          controller: "dayCtrl",
          templateUrl: 'components/day/day.html'
      })
      .state('age', {
          url: '/age',
          controller: "ageCtrl",
          templateUrl: 'components/age/ageTmpl.html'
      })
      .state('health', {
          url: '/health',
          controller: "healthCtrl",
          templateUrl: 'components/health/healthTmpl.html'
      })
      .state('wealth', {
          url: '/wealth',
          controller: "wealthCtrl",
          templateUrl: 'components/wealth/wealthTmpl.html'
      })
      .state('nature', {
          url: '/nature',
          controller: "natureCtrl",
          templateUrl: 'components/nature/natureTmpl.html'
      })
      .state('culture', {
          url: '/culture',
          controller: "cultureCtrl",
          templateUrl: 'components/culture/cultureTmpl.html'
      })
      .state('future', {
          url: '/future',
          controller: "futureCtrl",
          templateUrl: 'components/future/futureTmpl.html'
      });
      $urlRouterProvider
            .otherwise("/day");

});

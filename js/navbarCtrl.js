var app = angular.module('myApp')

.controller('nav', ['$scope', function($scope) {
  $scope.me = {
    name: 'Fred Nyambati',
    class: 'DM8'
  };
}])
.directive('navDirective', function() {
  return {
    template: '{{me.name}} {{me.class}}'
  };
});
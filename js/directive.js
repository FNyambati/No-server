angular.module('myApp')
    .directive('hover', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attribute) {
                element.find('h1').css('color', '#49e600');
            }

        }
    })
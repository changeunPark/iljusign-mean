angular.module('app')
    .directive('content', [function () {
        return {
            restrict: 'E',
            controller: [ function () {
                var app = this;
            }],
            templateUrl: '/directives/content.tpl.html',
            link: function (scope, element, attrs, ctrls) {
                var appCtrl = ctrls;
            }
        };
    }])

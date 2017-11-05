angular.module('app')
    .directive('goods', [function () {
        return {
            restrict: 'E',
            controller: [function () {
                var goodsCtrl = this;
            }],
            controllerAs: 'goodsCtrl',
            templateUrl: '/directives/goods.tpl.html',
            link: function (scope, element, attrs, ctrls) {

                console.log("goodsDirective 실행");
                var goodsCtrl = ctrls;

                $http.get('/api/goods').then(function (result) {
                    console.log(result);
                })
            }
        };
    }]);

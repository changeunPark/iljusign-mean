var app = angular.module('app');
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
$urlRouterProvider.otherwise('/');
$locationProvider.hashPrefix('');
$locationProvider.html5Mode(true);

 $stateProvider
           .state('app', {
             url: '/',
             views:{
               'header': {
               templateUrl: '/menues/header.html'
               },
               'content': {
               templateUrl: '/main/form.html'
               },
               'menu@app': {
                 templateUrl: '/menues/mainMenu.html',
                 controller: 'mainMenuCtrl',
                 controllerAs: 'mainMenu'
               },
               'account@app': {
                 templateUrl: '/main/account.html'
               },
               'contents@app': {
                 templateUrl: '/main/home.html'
               },
               'footer': {
               templateUrl: '/company/footer.html'
               }
             }
            })
            .state('app.user', {
              url: 'user',
              views: {
                'contents@app': {
                  templateUrl: '/users/partial/user.html',
                }
              }
            })
            .state('app.commerceDetail', {
              url: 'commerce-detail',
              views: {
                'contents@app': {
                  templateUrl: '/users/partial/commerceDetail.html',
                }
              }
            })
            .state('app.basket', {
              url: 'basket',
              views: {
                'contents@app': {
                  templateUrl: '/users/partial/basket.html',
                  controller: 'basketCtrl',
                  controllerAs: 'basket'
                }
              }
            })

            .state('app.category', {
              url: 'category=:category_id',
              views: {
                'subMenu@app': {
                  templateUrl: '/menues/subMenu.html',
                  controller: 'subMenuCtrl',
                  controllerAs: 'subMenu'
                },
                'contents@app': {
                  templateUrl: '/categoryes/items/form.html',
                  controller: 'getTypeItemsCtrl',
                  controllerAs: 'getTypeItems'
                }
              }
            })
            .state('app.category.item_type', {
              url: '/item_type=:type_code',
              views: {
                'contents@app': {
                  templateUrl: '/categoryes/items/form.html',
                  controller: 'getTypeItemsCtrl',
                  controllerAs: 'getTypeItems'
                }
              }
            })

            .state('app.category.show', {
              url: '/item:item_id',
              views: {
                'contents@app': {
                  templateUrl: '/categoryes/items/item.html',
                  controller: 'getTypeItemCtrl',
                  controllerAs: 'getTypeItem'
                }
              }
            })

            .state('app.makeOrder', {
              url: 'makeOrder',
              views: {
                'contents@app': {
                  templateUrl: '/order/makeOrder.html',
                  controller: 'readOrderCtrl',
                  controllerAs: 'readOrder'
                }
              }
            })

            .state('app.confirmOrder', {
              url: 'confirmOrder',
              views: {
                'contents@app': {
                  templateUrl: '/order/confirmOrder.html',
                  controller: 'readOrderCtrl',
                  controllerAs: 'readOrderCtrl'
                }
              }
            })

            .state('app.board', {
              url: 'board',
              views: {
                'contents@app': {
                  templateUrl: '/categoryes/board/form.html'
                }
              }
            })

            .state('app.management',
             {
               url: 'management',
               views:{
                 'content@' : {
                   templateUrl: '/management/form.html',
                 },
                 'menu@app.management': {
                   templateUrl: '/management/menu.html'
                 }
               }
            })

            .state('app.management.category',
             {
               url: 'category',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/category.html',
                   controller: 'mainMenuCtrl',
                   controllerAs: 'mainMenu'
                 }
               }
            })


            .state('app.management.items',
             {
               url: '/items',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/items.html',
                   controller: 'itemsCtrl',
                   controllerAs: 'items'
                 }
               }
            })

            .state('app.management.items.update',
             {
               url: '/update:item_type',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/type/update.html',
                   controller: 'updateTypeCtrl',
                   controllerAs: 'updateType'
                 }
               }
            })
            .state('app.management.items.updateItem',
             {
               url: '/update/item:item_id',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/item/update.html',
                   controller: 'updateItemCtrl',
                   controllerAs: 'updateItem'
                 }
               }
            })

            .state('app.management.items.readItem',
             {
               url: ':item_id',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/item/read.html',
                   controller: 'readItemCtrl',
                   controllerAs: 'readItem'
                 }
               }
            })
            .state('app.management.bannerUpload',
             {
               url: '/bannerUpload',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/bannerUpload.html'
                 }
               }
            })
            .state('app.management.orderStatus',
             {
               url: '/orderStatus',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/orderStatus.html'
                 }
               }
            })
            .state('app.management.members',
             {
               url: '/members',
               views:{
                 'contents@app.management': {
                   templateUrl: '/management/partial/members.html'
                 }
               }
            })

            .state('registerStep1',
             {
               url: '/register/step1',
               controller: 'regCtrl',
               controllerAs: 'register',
               templateUrl: '/users/register/registerStep1.html',
               authenticated: false
            })

            .state('registerStep2',
             {
               url: '/register/step2',
               controller: 'regCtrl',
               controllerAs: 'register',
               templateUrl: '/users/register/registerStep2.html',
               authenticated: false
            })

            .state('resetusername',
            {
              url: '/resetusername',
              templateUrl: '/users/reset/username.html',
              controller: 'usernameCtrl',
              controllerAs: 'username'
            })

            .state('resetpassword',
            {
              url: '/resetpassword',
              templateUrl: '/users/reset/password.html',
              controller: 'passwordCtrl',
              controllerAs: 'password'
            })

            .state('reset',
            {
              url: '/reset/:token',
              templateUrl: '/users/reset/newpassword.html',
              controller: 'resetCtrl',
              controllerAs: 'reset'
            })


            .state('activate',
            {
              url: '/activate/:token',
              templateUrl: '/users/activation/activate.html',
              controller: 'emailCtrl',
              controllerAs: 'email'
            })

            .state('resend',
            {
              url: '/resend',
              templateUrl: '/users/activation/resend.html',
              controller: 'resendCtrl',
              controllerAs: 'resend'
            })


            .state('app.intro',
            {
              url: 'intro',
              views:{
                'content@': {
                  templateUrl: '/company/intro.html',
                  authenticated: false
                }
              }
            })

            .state('app.terms',
            {
              url: 'terms',
              views:{
                'content@': {
                  templateUrl: '/company/terms.html',
                  authenticated: false
                }
              }
            })

            .state('app.privacy',
            {
              url: 'privacy',
              views:{
                'content@': {
                  templateUrl: '/company/privacy.html',
                  authenticated: false
                }
              }
            });

});

app.run(function($rootScope, User, $state){
  $rootScope.$on('$stateChangeStart',  function(event, toState, toParams, fromState, fromParams, options){
  });
  $rootScope.$on('$stateChangeError',  function(event, toState, toParams, fromState, fromParams, error){
    $state.go('app');
  });
});

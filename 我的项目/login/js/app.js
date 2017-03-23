var app = angular.module('myApp', ['ui.router']);
    app.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.pwd = '1147028259';
    $scope.reset=function(){
    	
    }
    $scope.reset();
  });
  
  	app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("zhuce", {
            url: "zhuce",    
            templateUrl: "../login/zhuce.html"
        })
           .state("pwd", {
            url: "pwd",    
            templateUrl: "../result/result.html"
        })   
      })  
   app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("first", {
            url: "first",    
            templateUrl: "../logo/index.html"
        })
      })
     app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("two", {
            url: "two",    
            templateUrl: "../logo/index.html"
        })
      }) 
      
       app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("sbmlit", {
            url: "sbmlit",    
            templateUrl: "../logobar/denglu.html"
        })
      }) 
     //我的店铺  
      app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("denglu", {
            url: "denglu",    
            templateUrl: "../我的店铺/myname.html"
        })
      }) 
      //预览店铺
     app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("preview", {
            url: "preview",    
            templateUrl: "../预览店铺/preview.html"
        })
      })  
      //上架商品
      app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("putaway", {
            url: "putaway",    
            templateUrl: "../装修店铺/zxiu.html"
        })
      })
      //我的作品库
       app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("myname", {
            url: "myname",    
            templateUrl: "../作品库/zuopin.html"
        })
      }) 
      //首页
       app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("home", {
            url: "home",    
            templateUrl: "../设计师/S设计师1.html"
        })
      })
       //优橙协助
       app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("help", {
            url: "help",    
            templateUrl: "../优橙协助/Y协助4.html"
        })
      })
      //订单状态
       app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("indent", {
            url: "indent",    
            templateUrl: "../我的订单/dingdan1.html"
        })
      })
     //我的店铺
      app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("shop", {
            url: "shop",    
            templateUrl: "../我的店铺/myname.html"
        })
      })
       //消息中心
       app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("msg", {
            url: "msg",    
            templateUrl: "../设计师/S消息2.html"
        })
      })
     //更多
//    app.config(function ($stateProvider, $urlRouterProvider) {
//          $stateProvider
//          .state("more", {
//          url: "more",    
//          templateUrl: "../"
//      })
//    })
//   
     
     
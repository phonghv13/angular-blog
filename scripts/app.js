var app = angular.module('App',['ngRoute','productCategory']);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.timeout = 5000;
}]);

app.directive('headerApp',function (){
    return{
        templateUrl:'views/layouts/header.html'
    }
})

app.directive('footerApp',function (){
    return{
        templateUrl:'views/layouts/footer.html'
    }
})
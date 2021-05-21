app.controller('HomeCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.path_src = path_src;
        $scope.listBlogData = api_blog;
        $scope.listContactData = [];
        $scope.listUserData = api_user;
        $scope.listProductData = api_product;
    }]);

app.directive('bannerHome',function (){
    return{
        templateUrl:'views/layouts/banner.html',
        controller:'BannerCtrl'
    }
})
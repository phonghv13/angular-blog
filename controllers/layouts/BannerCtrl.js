app.controller('BannerCtrl', ['$scope',
    function ($scope) {
        $scope.images = api_images;
        $scope.selectedIndex = 0; /* first one set active by default */
        $scope.select = function (index) {
            $scope.selectedIndex = index;
        };
    }]);
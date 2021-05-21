app.controller('HeaderCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.listCategoriesData = api_category;
    }]);
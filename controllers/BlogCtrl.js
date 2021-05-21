app.controller('BlogCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.listBlogData = api_blog;
    }]);

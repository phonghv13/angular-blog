product_category_module.component('productCategory', {
    templateUrl: 'views/components/products/product-category.html',
    controller: ['$routeParams', '$http', '$scope',
        function ProductCategoryCtrl($routeParams, $http, $scope) {
            this.categoryId = $routeParams.categoryId;
            $scope.listProductCategoryData = api_product_category;
            $scope.path_src = path_src;
            $scope.modalBuyNow = function () {
                $scope.showModal = false;
                $scope.showModal = !$scope.showModal;
            }
        }
    ]
});
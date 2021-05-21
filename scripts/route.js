app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/partials/home.html',
            // controller: 'HomeCtrl'
        })
        .when("/blogs", {
            templateUrl: 'views/partials/blog.html',
            controller: 'BlogCtrl'
        })
        .when("/products", {
            templateUrl: 'views/partials/product.html',
            controller: 'ProductCtrl'
        })
        .when("/product/category/:categoryId", {
            template: '<product-category></product-category>',
        })
        .when("/contact", {
            templateUrl: 'views/partials/contact.html',
            controller: 'ContactCtrl'
        })
        .when("/support", {
            templateUrl: 'views/partials/support.html',
            controller: 'SupportCtrl'
        })
        .otherwise('/');
});
(function () {
    var customerApp = angular.module('CustomerApp', ['ngRoute']);

    customerApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomerController',
                templateUrl: 'architectural-patterns/app/views/customer.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'architectural-patterns/app/views/orders.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
})();
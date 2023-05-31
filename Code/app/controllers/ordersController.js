(function() {
    
    var OrdersController = function (
        $scope, 
        $routeParams,
        ordersService
    ) {
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        $scope.customer = null;
        function init() {
            ordersService.getCustomer(customerId)
                .success(function (customer) {
                    $scope.customer = customer;
                })
                .error(function (data, status, headers, config) {
                    // handle errors
                });
        }
        
        init();
    };
    
    OrdersController.$inject = [
        '$scope', 
        '$routeParams',
        'ordersService'
    ];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());
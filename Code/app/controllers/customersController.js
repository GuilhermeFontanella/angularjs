(function() {
    
    var CustomersController = function (
        $scope,
        customersService,
        appSettings
    ) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };

        customersService.getCustomers()
            .success(function (customers) {
                $scope.customers = customers;
            })
            .error(function (data, status, headers, config) {
                // handle errors
            })
        
        
    };
    
    CustomersController.$inject = [
        '$scope', 
        'customersService',
        'appSettings'
    ];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());
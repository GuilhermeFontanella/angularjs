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

        init = function() {
            console.log('iniciou');
            $scope.getCustomers();
        }

        $scope.getCustomers = function() {
            customersService.getCustomers()
                .success(function (customers) {
                    $scope.customers = customers;
                })
                .error(function (data, status) {
                    // handle errors
                });
        };

        $scope.deteleCustomer = function(idCustomer) {
            console.log(idCustomer);
            customersService.deleteCustomer(idCustomer)
                .success(function () {
                    window.alert('Cliente excluído com sucesso!');
                    $scope.getCustomers();
                })
                .error(function (data, status) {
                    console.error(`Erro: ${data} - Status: ${status}`);
                    window.alert('Ocorreu um erro ao excluir este cliente.');
                });
        }

        init();
        
    };
    
    CustomersController.$inject = [
        '$scope', 
        'customersService',
        'appSettings'
    ];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());
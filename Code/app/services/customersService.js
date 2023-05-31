// SERVICE WAY
(
    function () {
        var customersService = function ($http) {
            this.getCustomers = function () {
                return $http.get('/customers');
            };
        };

        angular.module('customersApp')
            .service('customersService', customersService);
    }
());
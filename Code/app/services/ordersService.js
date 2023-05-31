// SERVICE WAY
(
    function () {
        var ordersService = function ($http) {

            this.getCustomer = function () {
                return $http.get('/curtomers')
            }

            this.getCustomer = function (idCustomer) {
                return $http.get(`/customers/${idCustomer}`)
            };
        };

        angular.module('customersApp')
            .service('ordersService', ordersService);
    }
());
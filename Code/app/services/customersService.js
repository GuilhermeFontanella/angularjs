// SERVICE WAY
(
    function () {
        var customersService = function ($http) {
            this.getCustomers = function () {
                return $http.get('/customers');
            };

            this.deleteCustomer = function (customerId) {
                console.log('veio daqui');
                return $http.delete(`/customers/${customerId}`);
            };

            this.editCustomer = function (customerId, data) {
                return $http.put(`/customers/${customerId}`, data);
            };

            this.getCustomerById = function (customerId) {
                return $http.get(`/customers/${customerId}`);
            };

            this.createCustomer = function (data) {
                return $http.post(`/customers/`, data);
            };
        };

        angular.module('customersApp')
            .service('customersService', customersService);
    }
());
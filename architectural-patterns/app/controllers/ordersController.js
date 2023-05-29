(function() {
    var OrdersController = function ($scope, $routeParams) {
        customerId = $routeParams.customerId;
        
        $scope.orders = null;

        function init() {
            for (let cust of $scope.customers) {
                if (cust.id === parseInt(customerId)) {
                    $scope.orders = cust.orders;
                    break;
                } 
            }
            console.log($routeParams)
        }
        
        $scope.customers = [
                {
                    id: 1,
                    name:'fulaninho', 
                    age: 18, 
                    accountBalance: 190.33, 
                    birthDate: '2001-12-25',
                    orders: [
                        {
                            id: 1,
                            product: 'Laptop',
                            price: 1200.20,
                            date: '2023-01-31'
                        },
                        {
                            id: 2,
                            product: 'Mouse',
                            price: 12,
                            date: '2023-01-31'
                        },
                        {
                            id: 3,
                            product: 'Keyboard',
                            price: 50.90,
                            date: '2023-02-01'
                        }
                    ]
                }, 
                {
                    id: 2,
                    name:'zezinho', 
                    age: 15, 
                    accountBalance: 1200.91, 
                    birthDate: '1991-02-10',
                    orders: []
                }, 
                {
                    id: 3,
                    name:'kiko', 
                    age:12, 
                    accountBalance: 12.50, 
                    birthDate: '2012-04-23',
                    orders: [
                        {
                            id: 1,
                            product: 'Candies Fini',
                            price: 9.90,
                            date: '2020-10-20'
                        },
                    ]
                }
            ];
    
        $scope.doSort = function(propName) {
            $scope.sortBy = propName
            $scope.reverse = !$scope.reverse;
        };

        init();

    };

    OrdersController.inject = ['$scope', '$routeParams'];

    angular.module('CustomerApp')
        .controller('OrdersController', OrdersController);
} ());

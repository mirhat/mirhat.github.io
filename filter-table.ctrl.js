angular.module('FilterTableApp', [])
    .controller('FilterTableController', function ($scope) {
        $scope.users = {
            headers: [{
                name: 'Name',
                data: 'name',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Address',
                data: 'address',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Telephone',
                data: 'telephone',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Email',
                data: 'email',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Profession',
                data: 'profession',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Registration date',
                data: 'registrationDate',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Registration expiration',
                data: 'registrationExpiration',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Status',
                data: 'status',
                filter: {
                    type: 'list',
                    options: ['Pending', 'Accepted', 'Rejected']
                }
            }],
            data: [
                {
                    name: 'John Doe',
                    address: 'London 23',
                    telephone: '(243) 640-9891',
                    email: 'johndoe@gmail.com',
                    profession: 'Surgeon',
                    registrationDate: '21/01/2017',
                    registrationExpiration: '21/01/2018',
                    status: 'Pending',
                },
                {
                    name: 'Bill Done',
                    address: 'New York 23',
                    telephone: '(158) 222-9891',
                    email: 'bill.done@gmail.com',
                    profession: 'Scientist',
                    registrationDate: '02/11/2018',
                    registrationExpiration: '02/11/2019',
                    status: 'Accepted',
                }
            ]
        };
        $scope.filterModel = function (t) {
            return 'filter' + t;
        }
    })
    .directive('filterTable', function () {
        return {
            restrict: 'E',
            scope: {
                data: '=data',
                filters: '@filters'
            },
            templateUrl: 'filter-table.html',
            controller: function ($scope, $filter) {    
                if($scope.filters == null) {
                    $scope.filters = {};
                }
                $scope.filteredData = $scope.data.data;

                $scope.filterData = function (data, type) {
                    var value = $scope.filters[data];

                    $scope.filteredData = $scope.data.data.filter(function (dataItem) {
                        if (type == 'text') {                            
                            return dataItem[data].toLowerCase().indexOf(value.toLowerCase()) != -1;
                        } else if (type == 'list') {                            
                            return dataItem[data] == value;
                        }
                        return false;                  
                    });    
                };

                $scope.clearFilters = function() {
                    $scope.filters = {};
                    $scope.filteredData = $scope.data.data;
                }
            }
        }
    })
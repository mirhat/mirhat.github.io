angular.module('FilterTableApp', [])
    .controller('FilterTableController', function ($scope) {
        $scope.users = {
            headers: [{
                name: 'Name',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Address',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Telephone',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Email',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Profession',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Registration date',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Registration expiration',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Status',
                filter: {
                    type: 'list',
                    options: ['All', 'Pending', 'Accepted', 'Rejected']
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

        $scope.usersOld = [
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
            }];
    })
    .directive('filterTable', function () {
        return {
            restrict: 'E',
            scope: {
                data: '=data'
            },
            templateUrl: 'filter-table.html'
        }
    })
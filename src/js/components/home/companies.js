((app) => {
    app.component('companies', {
        templateUrl: 'js/components/home/companies.html',
        controller: ['usersService', '$state', function(usersService, $state) {
            angular.extend(this, {
                $onInit() {

                }
            })

        }]
    });
})(angular.module('app.home'))

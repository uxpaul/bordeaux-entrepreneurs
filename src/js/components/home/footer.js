((app) => {
    app.component('footer', {
        templateUrl: 'js/components/home/footer.html',
        controller: ['companiesService', function(companiesService) {
            angular.extend(this, {
                $onInit() {

                }
            })
        }]
    });
})(angular.module('app.home'))

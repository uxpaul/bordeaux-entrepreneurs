((app) => {
    'use strict'

    app.service('companiesService', ['$http', function($http) {
        return {

            get() {
                return $http.get('/api/companies')
            },
            getPopulate(id) {
                return $http.get('/api/companies/' + id)
            },
            add(user) {
                return $http.post('/api/companies', company)
            },
            edit(company) {
                return $http.put('/api/companies/' + company._id, company)
            },
            delete(company) {
                return $http.delete('/api/companies/' + user._id)
            }
        }
    }])

})(angular.module('app.services'))

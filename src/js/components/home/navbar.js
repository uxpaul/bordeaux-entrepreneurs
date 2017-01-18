((app) => {
    app.component('navbar', {
        templateUrl: 'js/components/home/navbar.html',
        controller: ['usersService','$state', function(usersService, $state) {
            angular.extend(this, {
                $onInit() {
                    usersService.getCurrent().then((res) => {
                      this.user = res.data

                    })
                },
                disconnect(){
                  usersService.disconnect().then(()=>{
                    $state.reload()
                  })
                }
            })

        }]
    });
})(angular.module('app.home'))

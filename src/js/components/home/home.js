((app) => {
    app.component('home', {
        templateUrl: 'js/components/home/home.html',
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

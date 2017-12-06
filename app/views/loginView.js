define(['backbone','backbone.marionette','Templates', 'views/homeView','views/loginView'],function(backbone,marionette,templates,HomeView,LoginView){
	
	var loginView = marionette.View.extend({
        el:'#main-content',
        template: _.template(templates.loginPageItemView),
        initialize: function () {
            this.render();
            gapi.load('client:auth2', this.initClient);

        },
        render: function () {
            this.$el.html(this.template());
        },
        events:{
            'click #login-btn':'handleSignInClick',
            'click #load-gapi':'onLoginAttempt',
            'click #logout-btn':'onLogoutAttempt',
        },
        onLoginAttempt:function(event){
           //  let self=this;
           //  if (event) event.preventDefault();
           //  console.log(this.$('#inputEmail').val());
           //  console.log(this.$('#inputPassword').val());
           //  backbone.history.navigate('home',true);
           // /* var navbarView = new NavbarView();
           //  var headerRegion = navbarView.getRegion('headerRegion');
           //  headerRegion.show(new NavbarView());*/
           //  let homeView = new HomeView();
           //  homeView.generateTable();
        },
        initClient: function () {
            // let context = this;
            gapi.client.init({
                apiKey: "AIzaSyD4swrOLLYbcI54A_PmkLfLbcIpO_vGk_Q",
                discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
                clientId: "545604378019-4msm2qi82vbsqiga80clmqf3fkdv4ms2.apps.googleusercontent.com",
                scope: "profile",
                // hostedDomain: "nisum.com"
            }).then(function () {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

                // Handle the initial sign-in state.
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                // console.log(gapi.auth2.getAuthInstance().isSignedIn.get())

                // Create a function to handle the state
                function updateSigninStatus (isSignedIn) {
                    let googleUser = gapi.auth2.getAuthInstance().currentUser.get();
                    if(isSignedIn) {
                        gapi.client.people.people.get({
                            'resourceName': 'people/me',
                            'requestMask.includeField': 'person.names'
                        }).then(function (response) {
                            // console.log(response.result);
                            if (googleUser.getHostedDomain() === "nisum.com") {
                                // let homeView = new HomeView();
                                // homeView.generateTable();
                                backbone.history.navigate('home',true);
                            }

                        }, function (reason) {
                            console.log('Error: ' + reason.result.error.message);
                        })
                    }
                }
            });
        },
        handleSignInClick: function(event) {
            gapi.auth2.getAuthInstance().signIn();
        }
    });

    return loginView;
});
define(['backbone','backbone.marionette','Templates'],function(backbone,marionette,templates){

     var NavbarView = marionette.View.extend({
	 	el : "#navbar",
        template:_.template(templates.navbarItemView),
        initialize: function () {
            this.render();
            gapi.load('client:auth2', this.initClient);
        },
        render: function () {
            this.$el.html(this.template);
        },
        initClient: function () {
            gapi.client.init({
                apiKey: "AIzaSyD4swrOLLYbcI54A_PmkLfLbcIpO_vGk_Q",
                discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
                clientId: "545604378019-4msm2qi82vbsqiga80clmqf3fkdv4ms2.apps.googleusercontent.com",
                scope: "profile",
                // hostedDomain: "nisum.com"
            });
        },
        events: {
	 	    "click #logout_user": "onLogoutAttempt"
        },
        onLogoutAttempt: function (event) {
	 	    event.preventDefault();
            gapi.auth2.getAuthInstance().signOut();
            backbone.history.navigate('',true);
        }
    });
    return NavbarView;
});
define(['backbone', 'backbone.marionette','views/loginView','views/homeView'], function(Backbone,Marionette,loginView,HomeView) {  
var Router = Marionette.AppRouter.extend({
   
        routes: {          
        '': 'loginRoute',
        'home': 'homeRoute',
        'about': 'aboutRoute',          
    },
    loginRoute:function(){
      
        $("#mainApp").html(loginView.el);
    },
    homeRoute: function () {
        var homeView = new HomeView;          
        $("#mainApp").html(HomeView.el);
    },
    aboutRoute: function () {
        var aboutView = new AboutView();          
        $("#mainApp").html(aboutView.el);
    }

  });
return Router;
});
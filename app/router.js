define(['backbone', 'backbone.marionette','views/loginView','views/homeView'], function(Backbone,Marionette,LoginView,HomeView) {  
var Router = Marionette.AppRouter.extend({
   
        routes: {          
        '': 'loginRoute',
        'home': 'homeRoute',
        'about': 'aboutRoute',          
    },
    loginRoute:function(){
        var loginView = new LoginView();   
    },
    homeRoute: function () {
        var homeView = new HomeView();           
    },
    aboutRoute: function () {
        var aboutView = new AboutView();          
    }

  });
return Router;
});
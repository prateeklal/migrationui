define(['backbone', 'backbone.marionette','views/loginView','views/homeView', 'views/navbarView'], function(Backbone,Marionette,LoginView,HomeView,NavbarView) {  
var Router = Marionette.AppRouter.extend({
   
    routes: {          
        '': 'loginRoute',
        'home': 'homeRoute',
        'about': 'aboutRoute',          
    },
    loginRoute:function(){
    	var navbarView = new NavbarView();
    	navbarView.$el.hide();
        var loginView = new LoginView();   
    },
    homeRoute: function () {
        var homeView = new HomeView(); 
        var navbarView = new NavbarView();
        navbarView.$el.show();
    },
    aboutRoute: function () {
        var aboutView = new AboutView();          
    }

  });
return Router;
});
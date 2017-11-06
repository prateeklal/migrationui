define(['backbone', 'backbone.marionette'], function(Backbone,Marionette) {  
/* SIMPLE ROUTER IN BACKBONE */
var HomeView = Backbone.View.extend({
    template: '<h1>Home</h1>',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template);
    }
});
var AboutView = Backbone.View.extend({
    template: '<h1>About</h1>',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template);
    }
});
var Router = Marionette.AppRouter.extend({
   
        routes: {          
        '': 'homeRoute',
        'home': 'homeRoute',
        'about': 'aboutRoute',          
    },
    homeRoute: function () {
        var homeView = new HomeView();          
        $("#mainApp").html(homeView.el);
    },
    aboutRoute: function () {
        var aboutView = new AboutView();          
        $("#mainApp").html(aboutView.el);
    }

  });
return Router;
});
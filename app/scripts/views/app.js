define(['backbone', 'backbone.marionette'], function(Backbone) {  
    var App = Backbone.Marionette.View.extend({
     initialize: function() {
       console.log('Its me executed by Marionette');
     }
    });  
    return App;
  });
  
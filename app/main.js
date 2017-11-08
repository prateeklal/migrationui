require.config({
  paths: {
    'jquery': 'assets/vendor/jquery/dist/jquery',
    'underscore': 'assets/vendor/underscore/underscore',
    'backbone': 'assets/vendor/backbone/backbone',
    'backbone.radio': 'assets/vendor/backbone.radio/src/backbone.radio',
    'backbone.babysitter': 'assets/vendor/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'assets/vendor/backbone.wreqr/lib/backbone.wreqr',
    'backbone.marionette': 'assets/vendor/marionette/lib/backbone.marionette',
    'text': 'assets/vendor/text/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      exports: 'Backbone.Marionette',
      deps: ['backbone']
    }
  },
  deps: ['jquery', 'underscore']
});

require(['backbone','app','router',], function(backbone,app,Router) {
//   app.session.checkAuth({
//     complete: function() {
//         app.start();
//         new Router({ controller: RouterController });
//         backbone.history.start();
//     }
// });
var app=new app();
app.start();
  var appRouter=  new Router();
  backbone.history.start();
});
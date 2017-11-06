require.config({
  paths: {
    'jquery': 'assets/vendor/jquery/dist/jquery',
    'underscore': 'assets/vendor/underscore/underscore',
    'backbone': 'assets/vendor/backbone/backbone',
    'backbone.radio': 'assets/vendor/backbone.radio/src/backbone.radio',
    'backbone.babysitter': 'assets/vendor/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'assets/vendor/backbone.wreqr/lib/backbone.wreqr',
    'backbone.marionette': 'assets/vendor/marionette/lib/backbone.marionette',
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

require(['backbone','router'], function(backbone, Router) {
  var appRouter =  new Router();
  backbone.history.start();
});
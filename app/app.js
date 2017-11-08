define(['backbone.marionette','views/loginView'], function(marionette,loginView) {  
  var app =marionette.Application.extend({
      region: '#main-content',
    
      onStart() {
        this.showView(new loginView());
      }
  });
  return app;
  });
  
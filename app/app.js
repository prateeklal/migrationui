define(['backbone.marionette','views/loginView'], function(marionette,loginView) {  
  var app = new marionette.Application();
//   app.addRegions({
//     navbar: '#navbar',
//     mainapp: '#mainApp'
// });
// app.showNavBar = function() {
//   if (app.navbarView === undefined) {
//       app.navbarView = new navbarView;
//       app.navbar.show(app.navbarView);
//   }
// };
// app.showLoginView=function(){
//     app.loginView=new loginView();
//     app.mainapp.show(app.loginView);
// }
  app.on('start', function() {
    //app.showNavBar();
    //app.showLoginView();
});
  return app;
  });
  
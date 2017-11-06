define(['backbone', 'backbone.marionette'], function(Backbone) {
  // var App = Backbone.View.extend({
  //   initialize: function() {
  //     console.log( 'SS:Wololo: Routing' );
  //   }

  var App = Backbone.Marionette.View.extend({
   initialize: function() {
     console.log('Its me executed by Marionette');
   }
  });


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

var AppRouter = Backbone.Router.extend({
    routes: {          
        '': 'homeRoute',
        'home': 'homeRoute',
        'about': 'aboutRoute',          
    },
    homeRoute: function () {
        var homeView = new HomeView();          
        $("#routeView").html(homeView.el);
    },
    aboutRoute: function () {
        var aboutView = new AboutView();          
        $("#routeView").html(aboutView.el);
    }
});

var appRouter = new AppRouter();
appRouter.on("about", function() {
  console.log("about page triggered..");
});
  /* Routes in Backbone */
//   var myRouter = Backbone.Router.extend({
//     greeting: null,
//     container: null,
//     view1: null,
//     view2: null,
//     view3: null,

//     initialize: function() {
//       this.greeting = new GreetModel({Message: 'Hello world'});
//       this.container = new ContainerView({el: $("#rAppContainer"), model: this.greeting});
//     },

//     routes: {
//       "": "handleRoute1",
//       "view1": "handleRoute1",
//       "view2": "handleRoute2",
//       "view3": "handleRoute3"
//     },

//     handleRoute1: function() {
//       if(this.view1 == null) {
//         this.view1 = new View1({model: this.greeting});
//       }
//       this.container.myChildView = this.view1;
//       this.container.render();
//     },

//     handleRoute2: function() {
//       if(this.view2 == null) {
//         this.view2 = new View2({model: this.greeting});
//       }
//       this.container.myChildView = this.vew2;
//       this.container.render();
//     },

//     handleRoute3: function() {
//       if(this.view3 == null) {
//         this.view3 = new View3({model: this.greeting});
//       }
//       this.container.myChildView = this.view3;
//       this.container.render();
//     }
//   });

//   var ContainerView = Backbone.View.extend({
//     myChildView: null,
    
//     render: function() {
//        this.$el.html("Greeting Area"); 

//        this.$el.append(this.myChildView.$el); 
//        return this;
//    }
// });

//   $(document).ready(function () {
//     router = new myRouter();
//     Backbone.history.start();
//   });

  /* Model in Backbone */
  // var Person = Backbone.Model.extend();
  // var person = new Person();
  // person.set({fname: 'Backbone', lname: 'JS'});
  // document.getElementById("content").innerText = person.get('fname') + " " + person.get('lname');

  /* Events in Backbone */
  // var myVal = _.extend({name:'its a name'}, Backbone.Events);
  // myVal.on('myFunc', function() {
  //   console.log('The triggered value is : ');
  //   console.log(this.name);
  // });
  // myVal.trigger('myFunc');

  return App;
});

define(['backbone','backbone.marionette','Templates','handlebars'],function(backbone,marionette, templates,handlebars){
var employeeData = [
	{id : 1, name : 'javed', age : 27},
	{id : 2, name : 'Swathi', age : 27},
	{id : 3, name : 'Atah', age : 28}
];
var Employee = Backbone.Model.extend({
    defaults: {
        id: '',
        name: '',
        age: ''
    }
});

var EmpList =  Backbone.Collection.extend({
	model: Employee
});
var empList = new EmpList(employeeData);

var HomeView = marionette.View.extend({
    el:'#main-content',
    template: _.template(templates.homeItemView),
    initialize: function () {
        this.render();
        this.listenTo( this.collection, 'add', this.generateTable );
    },
    render: function () {
        this.$el.html(this.template);
    },
    events:{
		"click #editEmp" : "editEmployee",
		"click #delEmp" : "delEmployee"
	},
	fetchCollection: function(){
		return empList;
	},
	
    generateTable: function(){
    	var RowView = marionette.View.extend({
      	  tagName: 'tr',
      	  template: _.template(templates.rowItemView),
      	});

        var TableBody = marionette.CollectionView.extend({
      	  tagName: 'tbody',
      	  childView: RowView
      	});

      	var TableView = marionette.View.extend({
      	  tagName: 'table',
      	  className: 'unstriped emp-list',
      	  template: _.template(templates.tableItemView),

      	  regions: {
      	    body: {
      	      el: 'tbody',
      	      replaceElement: true
      	    }
      	  },

      	  onRender() {
      	    this.showChildView('body', new TableBody({
      	      collection: this.collection
      	    }));
      	  }
      	});
      	
      	var myTable = new TableView({
      	  collection: empList
      	});

      	var myApp = new marionette.Application({
      	  region: '#gridReg'
      	});
      	
      	myApp.showView(myTable);
    },
    editEmployee: function(e){
    	var emp = empList.get($(e.target).data("id"));
    	var EditEmpView = marionette.View.extend({
    	    el:'#main-content',
    	    template: _.template(templates.editEmpItemView),
    	    initialize: function () {
    	        this.render();
    	    },
    	    render: function () {
    	        this.$el.html(this.template(this.model.toJSON()));
    	    },
    	    events:{
    			"click #updateEmpl":"updateEmployee"
    		},
    		updateEmployee: function(e){
    			e.preventDefault();
    			var id = this.$el.find("#updatedId").val();
    			var name = this.$el.find("#updatedName").val();
    			var age = this.$el.find("#updatedAge").val();
    			if(name != undefined && age != undefined){
    				empList.add({id: id, name: name, age: age}, { merge: true });
    				var homeView = new HomeView();
    				homeView.generateTable();
    			}
    		}
    	});
    	new EditEmpView({model: emp});
	},
	delEmployee: function(e){
		var emp = empList.get($(e.target).data("id"));
		empList.remove(emp);
	}
});
	return HomeView;
})
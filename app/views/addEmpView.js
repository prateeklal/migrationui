define(['backbone','backbone.marionette','Templates', 'views/homeView'],function(backbone,marionette,templates, HomeView){
	var AddEmpView = marionette.View.extend({
	    el:'#main-content',
	    template: _.template(templates.addEmpItemView),
	    initialize: function () {
	        this.render();
	    },
	    render: function () {
	        this.$el.html(this.template);
	    },
	    events:{
			"click #addEmpl":"addEmployee"
		},
		addEmployee: function(e){
			e.preventDefault();
			var id = this.$el.find("#id").val();
			var name = this.$el.find("#name").val();
			var age = this.$el.find("#age").val();
			if(id != undefined && name != undefined && age != undefined){
				var homeView = new HomeView();
				var empList = homeView.fetchCollection();
				empList.add({id: id, name: name, age: age});
//				console.log(empList.length);
				backbone.history.navigate('home',true);
				homeView.generateTable();
			}
		}
	});
	return AddEmpView;
});
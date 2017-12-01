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
		},
		progressTab : function(){
			var back = $(".prev");
			var next = $(".next");
			var steps = $(".step");
		  
			next.bind("click", function() {
			  jQuery.each(steps, function(i) {
				if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
				  $(steps[i]).addClass('current');
				  $(steps[i - 1]).removeClass('current').addClass('done');
				  return false;
				}
			  })
			});
			back.bind("click", function() {
			  jQuery.each(steps, function(i) {
				if ($(steps[i]).hasClass('done') && $(steps[i + 1]).hasClass('current')) {
				  $(steps[i + 1]).removeClass('current');
				  $(steps[i]).removeClass('done').addClass('current');
				  return false;
				}
			  })
			});
		}
	});
	return AddEmpView;
});
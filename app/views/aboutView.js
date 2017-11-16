define(['backbone','backbone.marionette','Templates'],function(backbone,marionette,template){
    
    var Model =Backbone.Model.extend({
        defaults : {
            name : "swathi",
            text : "Another Random Value"
        }
    })
	var aboutView = marionette.View.extend({
        el:'#main-content',
        model:new Model(),
        template: template.aboutItemView,
        initialize: function () {
            this.render();
            
        },
        render: function () {
            this.$el.html(this.template({'data':this.model.toJSON()}));
        }
    });

    return aboutView;
})
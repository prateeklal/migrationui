define(['backbone','backbone.marionette','Templates'],function(backbone,marionette,template){

        
    var sidePanelView = marionette.View.extend({
        el:'#sidepanel',
        template: _.template(template.sidePanelView),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        }
    });

    return sidePanelView;        

});
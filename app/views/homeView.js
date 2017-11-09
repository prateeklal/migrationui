define(['backbone.marionette','Templates'],function(marionette, templates){
    
var HomeView = marionette.View.extend({
    el:'#main-content',
    template: _.template(templates.homeItemView),
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template);
    }
    
});

return HomeView;
})
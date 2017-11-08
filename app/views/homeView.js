define(['backbone.marionette'],function(marionette){
    
var HomeView = Backbone.View.extend({
    el:'#main-content',
    template: '<h1>Home</h1>',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template);
    }
});

return HomeView;
})
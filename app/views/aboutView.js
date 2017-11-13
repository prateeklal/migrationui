define(['backbone', 'backbone.marionette', 'Templates'], function(Backbone, marionette, templates) {
    var AboutView = marionette.View.extend({
        el: "#main-content",
        template: _.template(templates.aboutPageView),
        initialize: function () {
            this.render();
        },
        render: function () {
            console.log('about page rendered successfully..');
            this.$el.html(this.template);
        }
    });
    return AboutView;
});
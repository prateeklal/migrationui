define(['backbone.marionette','Templates'],function(marionette,templates){
    var loginApp=marionette.View.extend({
        template: _.template(templates.loginPageItemView),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
        },
        events:{
            'click #login-btn':'onLoginAttempt'
        },
        onLoginAttempt:function(event){
                var self=this;
                if (event) event.preventDefault();
                console.log(this.$('#inputEmail').val());
                console.log(this.$('#inputPassword').val());
        }
    });

    return new loginApp;
})
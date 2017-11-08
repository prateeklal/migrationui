define(['backbone','backbone.marionette','Templates'],function(backbone,marionette,templates){
    var loginView=marionette.View.extend({
        el:'#main-content',
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
                backbone.history.navigate('home',true);
        }
    });

    return loginView;
})
Ext.define('BookStore.controller.Home', {
    extend: 'Ext.app.Controller',

    refs: [
        {ref: "userName", selector: "#usernametext"},
        {ref: "password", selector: "#passwordtext"}
    ],

    init: function () {
        this.control({
            '#main-nav-toolbar button': {
                click: this.onMainNavClick
            },
            "#loginbutton": {
                click: this.authenticate
            }
        });
    },

    index: function () {
    },

    login: function () {
        Ext.onReady(function() {
            var navToolbar = Ext.getCmp('viewport').down('#main-nav-toolbar');
            navToolbar.query('> *').forEach(function (item, i) {
                item.disabled = true;
            });
        });

    },

    logout: function() {
        Ext.Router.redirect('');
    },

    authenticate: function () {
        if (this.getUserName().getValue() == "admin" &&
            this.getPassword().getValue() == "admin") {
            var navToolbar = Ext.getCmp('viewport').down('#main-nav-toolbar');
            navToolbar.query('> *').forEach(function (item, i) {
                item.disabled = false;
            });
            Ext.Router.redirect('books');
        }
        else
            Ext.Msg.alert("Invalid credentials");
    },

    onMainNavClick: function (btn) {
        Ext.Router.redirect(btn.link);
    }
});
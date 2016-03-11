Ext.define('BookStore.controller.Home', {
    extend: 'Ext.app.Controller',

    refs: [
        { ref: "userName", selector: "#usernametext" },
        { ref: "password", selector: "#passwordtext" }
    ],
    
    init: function() {
        this.control({
            '#main-nav-toolbar button': {
                click: this.onMainNavClick
            },
            "#loginbutton": {
                click: this.authenticate
            }
        });
    },
    
    index: function() {
    },

    login: function() {

    },

    authenticate: function() {
        if (this.getUserName().getValue() == "admin" &&
            this.getPassword().getValue() == "admin") {
            Ext.Router.redirect('list');
        }
        else
            Ext.Msg.alert("Invalid credentials");
    },
    
    onMainNavClick: function(btn) {
        Ext.Router.redirect(btn.itemId);
    }
});
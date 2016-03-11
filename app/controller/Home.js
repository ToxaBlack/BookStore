Ext.define('BookStore.controller.Home', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        this.control({
            '#main-nav-toolbar button': {
                click: this.onMainNavClick
            }
        });
    },
    
    index: function() {
    },
    
    onMainNavClick: function(btn) {
        Ext.Router.redirect(btn.itemId === 'home' ? '' : btn.itemId);
    }
});
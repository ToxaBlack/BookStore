Ext.define('BookStore.controller.BaseController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            '#main-nav-toolbar button': {
                click: this.onMainNavClick
            }
        });
    },

    show: function (view) {
        var viewClass,
            viewport = Ext.getCmp('viewport'),
            target = viewport.down('#viewport-target');

        viewClass = Ext.ClassManager.get('BookStore.view.' + view);

        if (viewClass) {

            target.removeAll();
            view = Ext.create(viewClass, {
                border: false
            });

            target.add(view);
        }
    },

    onMainNavClick: function (btn) {
        Ext.Router.redirect(btn.link);
    }
});
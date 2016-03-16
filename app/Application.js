Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux.Router': 'lib/Router.js'
    }
});


Ext.define('BookStore.Application', {
    name: 'BookStore',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.ux.Router',
        'BookStore.view.util.Rating'
    ],

    model: [
        'Book'
    ],


    stores: [
        'Book',
        'BookList'
    ],

    controllers: [
        'Login',
        'List',
        'Details',
        'Add'
    ],

    views: [
        'Login',
        'Add',
        'List',
        'Edit'
    ],

    enableRouter: true,


    routes: {
        '/': 'login#index',
        'book/add': 'add#index',
        'books': 'list#index',
        'books/:id': 'details#index',
        'logout': 'login#index'
    },
    calculate: function () {
        var content = Ext.getCmp('viewport-target');
        var viewport = Ext.getCmp('viewport');
        var spacer = Ext.getCmp('spacer');
        if (content.rendered && viewport && spacer) {
            var minHeight = viewport.getHeight() - 110 - content.getHeight();
            spacer.setHeight(minHeight);
        }
    },


    launch: function () {

        Ext.EventManager.onWindowResize(this.calculate);

        Ext.ux.Router.on({

            routemissed: function (token) {
                Ext.Msg.show({
                    title: 'Error 404',
                    msg: 'Route not found: ' + token,
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        });
    }
});

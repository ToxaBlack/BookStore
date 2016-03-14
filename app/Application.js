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
        'Ext.ux.Router'
    ],

    model: [
        'Book'
    ],


    stores: [
        'Book',
        'BookList'
    ],

    controllers: [
        'Home',
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
        '/': 'home#login',
        'book/add': 'add#add',
        'books': 'list#list',
        'books/:id': 'details#edit',
        'logout': 'home#logout'
    },


    launch: function () {

        Ext.ux.Router.on({

            routemissed: function (token) {
                Ext.Msg.show({
                    title: 'Error 404',
                    msg: 'Route not found: ' + token,
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            },


            dispatch: function (token, match, params, controller) {
                var view, viewClass, action,
                    viewport = Ext.getCmp('viewport'),
                    target = viewport.down('#viewport-target'),
                    navToolbar = viewport.down('#main-nav-toolbar');

                action = Ext.String.capitalize(match.action);

                viewClass = Ext.ClassManager.get('BookStore.view.' + action);

                if (viewClass) {

                    target.removeAll();
                    view = Ext.create(viewClass, {
                        border: false
                    });

                    target.add(view);
                }


            }
        });
    }
});

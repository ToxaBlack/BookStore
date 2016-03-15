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


    launch: function () {

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

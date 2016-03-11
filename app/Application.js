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
        'Details'
    ],

    views: [
        'home.Index',
        'list.Create',
        'list.List',
        'details.Show'
    ],

    enableRouter: true,


    routes: {
        '/': 'home#index',
        'create': 'list#create',
        'list': 'list#list',
        'details/:id/show': 'details#show'
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
                controller = match.controller.charAt(0).toLowerCase() + match.controller.substr(1);

                viewClass = Ext.ClassManager.get('BookStore.view.' + controller + '.' + action);

                if (viewClass) {

                    view = Ext.create(viewClass, {
                        border: false
                    });

                    target.removeAll();
                    target.add(view);
                }
            }
        });
    }
});

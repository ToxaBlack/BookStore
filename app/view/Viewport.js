Ext.define('BookStore.view.Viewport', {
    renderTo: Ext.get('main'),
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'Ext.toolbar.Toolbar',
        'Ext.panel.Panel'
    ],
    alias: 'widget.testviewport',
    id: 'viewport',
    overflowY: 'auto',
    layout: 'auto',

    items: [
        {
            xtype: 'panel',
            border: false,
            itemId: 'main-nav-toolbar',
            height: 60,
            defaults: {
                scale: 'large',
                margin: 10
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    html: '<h3>Book Store'
                },
                {
                    xtype: 'button',
                    text: 'Books',
                    itemId: 'books',
                    link: 'books'
                },
                {
                    xtype: 'button',
                    text: 'New book',
                    itemId: 'add',
                    link: 'book/add'

                },
                {xtype: 'tbfill'},
                {
                    xtype: 'button',
                    text: 'Logout',
                    itemId: 'logout',
                    link: 'logout'
                }
            ]
        }, {
            xtype: 'container',
            itemId: 'viewport-target',
            id: 'viewport-target',

            layout: 'fit'
        }, {
            xtype: 'panel',
            border: false,
            itemId: 'spacer',
            id: 'spacer',
            layout: 'fit'
        }, {

            xtype: 'component',
            autoEl: {
                tag: 'footer'
            },
            margin: 10,
            html: '<h3>© 2016 Book Store'
        }
    ]
});
Ext.define('BookStore.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'Ext.toolbar.Toolbar',
        'Ext.panel.Panel'
    ],

    id: 'viewport',
    layout: 'border',
    items: [{
        xtype: 'toolbar',
        region: 'north',
        itemId: 'main-nav-toolbar',
        defaults: {
            scale: 'large',
            padding: '0 20'
        },
        items: [
            {
                text: 'Books',
                itemId: 'books',
                link: 'books'
            },
            {
                text: 'New book',
                itemId: 'add',
                link: 'book/add'

            },
            {xtype: 'tbfill'},
            {
                text: 'Logout',
                itemId: 'logout',
                link: 'logout'
            }
        ]
    }, {
        xtype: 'container',
        itemId: 'viewport-target',
        region: 'center',
        scrollable: true,
        layout: 'card'
    },


        {
            xtype: 'panel',
            region: 'south',
            html: 'Footer text'
        }


    ]
});
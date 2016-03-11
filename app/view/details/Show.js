Ext.define('BookStore.view.details.Show', {
    extend: 'BookStore.view.util.BookForm',

    xtype: 'bookEdit',
    id: 'bookEdit',
    initComponent: function () {
        this.callParent(arguments);
        this.add({
            xtype: 'toolbar',
            ui: 'footer',
            items: [{
                itemId: 'updateButton',
                text: 'Update'
            }]
        });

    }

});

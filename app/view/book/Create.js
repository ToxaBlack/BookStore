Ext.define('BookStore.view.book.Create', {
    extend: 'BookStore.view.util.BookForm',
    initComponent: function() {
        this.callParent(arguments);
        this.add({
            xtype: 'toolbar',
            ui: 'footer',
            items: [{
                itemId: 'saveButton',
                text: 'Save'
            }]
        });

    }
});

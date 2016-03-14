Ext.define('BookStore.view.Edit', {
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
            },
                {
                    xtype: 'panel',
                    border: false,
                    align: 'right',
                    html: '<img id="bookImage" style="height: 100px; width: 100px;" src="" />'
                }]
        });

    }

});

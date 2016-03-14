Ext.define('BookStore.view.Add', {
    extend: 'BookStore.view.util.BookForm',
    initComponent: function () {
        this.callParent(arguments);
        this.add(
            [{
                xtype: 'filefield',
                width: 400,
                hideLabel: true
            }, {
                xtype: 'toolbar',
                ui: 'footer',
                items: [{
                    itemId: 'addButton',
                    text: 'Add'
                }]
            }]);

    }
});

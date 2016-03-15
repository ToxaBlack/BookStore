Ext.define('BookStore.view.Add', {
    extend: 'BookStore.view.util.BookForm',
    title: 'Add',
    titleAlign: 'center',
    initComponent: function () {
        this.callParent(arguments);
        this.add(
            [{
                fieldLabel: 'Image',
                xtype: 'filefield',
                hideLabel: true
            }]);
    },
    buttons: [
        {
            itemId: 'addButton',
            text: 'Add',
            align: 'right'
        }
    ]
});

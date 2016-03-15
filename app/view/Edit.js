Ext.define('BookStore.view.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'bookEdit',
    id: 'bookEdit',
    title: 'Edit',
    titleAlign: 'center',
    bodyPadding: 20,
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
            border: false,
            items: [
                {
                    xtype: 'bookForm',
                    stretch: 1
                },
                {
                    xtype: 'image',
                    id: 'bookImage',
                    cls: 'bookImage',
                    stretch: 1,
                    src: null
                }]
        }
    ],
    buttons: [
        {
            itemId: 'updateButton',
            text: 'Update',
            align: 'right'
        }
    ]

});

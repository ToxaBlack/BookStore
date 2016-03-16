Ext.define('BookStore.view.Add', {
    extend: 'BookStore.view.util.BookForm',
    title: 'Add',
    titleAlign: 'center',
    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'start'
    },
    bodyPadding: 20,

    items: [{
        xtype: 'container',
        flex: 2
    },
        {
            xtype: 'container',
            flex: 6,
            region: 'center',
            layout: 'auto',
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'vbox',
                        align: 'left'
                    },
                    border: false,
                    items: [
                        {
                            xtype: 'bookForm'
                        },
                        {
                            padding: {left: 30},
                            fieldLabel: 'Image',
                            xtype: 'filefield',
                            hideLabel: false
                        }]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    items: [
                        {

                            itemId: 'addButton',
                            xtype: 'button',
                            text: 'Add',
                            scale: 'large'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 2
        }
    ]
});

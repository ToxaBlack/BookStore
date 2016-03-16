Ext.define('BookStore.view.Edit', {
    extend: 'Ext.form.Panel',
    id: 'bookEdit',
    title: 'Edit',
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
                        type: 'hbox',
                        align: 'right'
                    },
                    border: false,
                    flex: 1,
                    items: [
                        {
                            xtype: 'bookForm',
                            flex: 7
                        },
                        {
                            xtype: 'splitter',
                        },
                        {
                            xtype: 'image',
                            id: 'bookImage',
                            flex: 3,
                            src: null
                        }]
                },
                {
                    anchor: '100% 20%',
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    items: [
                        {

                            itemId: 'updateButton',
                            xtype: 'button',
                            text: 'Update',
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

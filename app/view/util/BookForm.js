Ext.define('BookStore.view.util.BookForm', {
    extend: 'Ext.form.Panel',
    bodyPadding: 20,
    buttonAlign: 'left',
    autoScroll: true,
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 85,
        msgTarget: 'side'
    },
    items: [{
        xtype: 'fieldset',
        title: 'Book Information',
        defaultType: 'textfield',
        defaults: {
            width: 280
        },
        items: [{
            fieldLabel: 'Title',
            emptyText: 'Enter title',
            name: 'title'
        }, {
            fieldLabel: 'Author',
            emptyText: 'Enter author',
            name: 'author'
        }, {
            fieldLabel: 'Desciption',
            xtype: 'textarea',
            name: 'description'
        }, {
            xtype: 'combobox',
            fieldLabel: 'Rating',
            name: 'state',
            emptyText: 'Select rating...',
            store: [1, 2, 3, 4, 5]
        }, {
            xtype: 'datefield',
            fieldLabel: 'Creation date',
            name: 'date',
            allowBlank: false,
            maxValue: new Date()
        },
            {
                xtype: 'radiogroup',
                fieldLabel: 'Type',
                name: 'type',
                items: [
                    {boxLabel: 'Paper', name: 'rb-auto', inputValue: 'paper', checked: true},
                    {boxLabel: 'PDF', name: 'rb-auto', inputValue: 'PDF'},
                    {boxLabel: 'EPUB', name: 'rb-auto', inputValue: 'EPUB'}
                ]
            }]
    }]
});

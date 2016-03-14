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
    layout: "anchor",
    items: [
        { xtype: "panel", anchor: "100% 100%" }
    ],
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
            name: 'rating',
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
                defaults: {xtype: "radio",name: "type"},
                items: [
                    {boxLabel: 'Paper',  inputValue: 'paper'},
                    {boxLabel: 'PDF',  inputValue: 'PDF'},
                    {boxLabel: 'EPUB',  inputValue: 'EPUB'}
                ]
            }]
    }]
});

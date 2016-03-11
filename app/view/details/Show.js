Ext.define('BookStore.view.details.Show', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.field.Text',
        'Ext.Button'
    ],

    xtype: 'bookEdit',
    id: 'bookEdit',
    bodyPadding: 20,
    buttonAlign: 'left',
    defaultType: 'textfield',
    autoScroll: true,
    fieldDefaults: {
        labelWidth: 50,
        msgTarget: 'side'
    },
    items: [{
        xtype: 'button',
        ui: 'plain',
        margin: '0 0 10 0',
        text: '&#171; Back to List',
        href: '#list',
        hrefTarget: '_self'
    },
        {name: "id", fieldLabel: "No"},
        {name: "title", fieldLabel: "Title"},
        {name: "author", fieldLabel: "Author"},
        {name: "status", fieldLabel: "Status"},
        {name: "description", xtype: "textarea", fieldLabel: "Created By"},
        {name: "date", xtype: "datefield", fieldLabel: "Created date"}]
});

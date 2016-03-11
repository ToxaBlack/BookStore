Ext.define('BookStore.view.list.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'bookList',
    id: 'bookList',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            itemId: 'deleteButton',
            text: 'Delete'
        }]
    }],
    store: null,
    selType: 'checkboxmodel',
    selModel: {
        mode: 'MULTI'
    },
    columns: [
        {header: "No", dataIndex: "id", width: 30},
        {header: "Title", dataIndex: "title", width: 200},
        {header: "Author", dataIndex: "author"},
        {header: "Status", dataIndex: "status", width: 150}
    ]
});
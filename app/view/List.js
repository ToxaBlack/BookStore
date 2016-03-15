Ext.define('BookStore.view.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'bookList',
    id: 'bookList',
    title: 'List',
    titleAlign: 'center',
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
        {header: 'No', dataIndex: 'id', width: 30},
        {header: 'Title', dataIndex: 'title', width: 200},
        {header: 'Author', dataIndex: 'author'},
        {header: 'Status', dataIndex: 'type', flex:1}
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        store: 'BookList',
        displayInfo: true,
        displayMsg: 'Displaying {0} to {1} of {2} &nbsp;books ',
        emptyMsg: 'No books to display&nbsp;'
    }

});
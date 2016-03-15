Ext.define('BookStore.controller.List', {
    extend: 'BookStore.controller.BaseController',
    refs: [
        {ref: 'bookList', selector: '#bookList'}
    ],

    init: function () {
        this.control({
            'bookList': {
                itemdblclick: this.onListItemClick,
                beforerender: this.load
            },
            'bookList button[itemId=deleteButton]': {
                click: this.delete
            }
        });
    },

    index: function () {
        this.show('List');
    },

    load: function () {
        var store = Ext.getStore('BookList');
        store.load();
        this.getBookList().reconfigure(store);
    },

    delete: function() {
        var bookList = this.getBookList();
        var store = bookList.getStore();
        var selectedRows = bookList.getSelectionModel().getSelection();
        if (selectedRows.length)
            store.remove(selectedRows);
        else
            Ext.Msg.alert('Status', 'Please select at least one record to delete!');
    },

    onListItemClick: function (list, book) {
        Ext.ux.Router.redirect('books/' + book.getId());
    }
});
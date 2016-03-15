Ext.define('BookStore.store.BookList', {
    extend: 'Ext.data.Store',
    model: 'BookStore.model.Book',
    pageSize: 3,
    proxy: {
        type: 'rest',
        url: 'data/list.json',
        reader: {
            type : 'json',
            root : 'books'
        }
    }
});
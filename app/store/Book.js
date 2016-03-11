Ext.define("BookStore.store.Book", {
    extend: "Ext.data.Store",
    model: "BookStore.model.Book",
    proxy: {
        type: "ajax",
        reader: {
            type : "json",
            root : "book"
        }
    }
});
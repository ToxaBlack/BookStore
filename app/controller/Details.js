Ext.define('BookStore.controller.Details', {
    extend: 'Ext.app.Controller',
    refs: [
        {ref: 'bookEdit', selector: "#bookEdit"}
    ],

    id: undefined,

    init: function () {
        this.control({
            'bookEdit': {
               afterrender: this.onEditAfterRender
            }
        });
    },


    show: function (params) {
        this.id = params.id;
    },


    onEditAfterRender: function (editView) {
        var store = Ext.getStore('Book');
        store.getProxy().url = '/data/' + this.id + '.json';
        store.load(function() {
            var user = store.getAt(0);

            if (user) {
                editView.loadRecord(user);
            }
        });

    }
});
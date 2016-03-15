Ext.define('BookStore.controller.Details', {
    extend: 'Ext.app.Controller',
    refs: [
        {ref: 'bookEdit', selector: "#bookEdit"},
        {ref: 'bookImage', selector: '#bookImage'}
    ],

    id: undefined,
    self: this,

    init: function () {
        this.control({
            'bookEdit': {
                beforerender: this.onBeforeRender
            },
            '#updateButton': {
                click: this.update
            }
        });
    },


    edit: function (params) {
        this.id = params.id;
    },

    update: function() {
        Ext.Router.redirect('books');
    },


    onBeforeRender: function (editView) {
        var store = Ext.getStore('Book');
        store.getProxy().url = '/data/' + this.id + '.json';

        Ext.getBody().mask();

        store.load(function () {
            var user = store.getAt(0);

            if (user) {
                editView.loadRecord(user);
                var image = Ext.get('bookImage');
                image.dom.attributes['src'].value = user.data.imageSrc;
                var rating = Ext.getCmp('starRating');
                rating.setValue(user.data.rating);
            }
            Ext.getBody().unmask();
        });



    }
});
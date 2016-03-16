Ext.define('BookStore.controller.Details', {
    extend: 'BookStore.controller.BaseController',
    refs: [
        {ref: 'rating', selector: '#starRating'},
        {ref: 'bookImage', selector: '#bookImage'}
    ],

    init: function () {
        this.control({
            '#bookEdit': {
                beforerender: this.onBeforeRender
            },
            '#updateButton': {
                click: this.update
            }
        });
    },


    index: function (params) {
        this.id = params.id;
        this.show('Edit');
    },

    update: function () {
        Ext.Router.redirect('books');
    },


    onBeforeRender: function (editView) {
        var self = this,
            store = Ext.getStore('Book');
        store.getProxy().url = '/data/' + this.id + '.json';

        Ext.getBody().mask();

        store.load(function () {
            var user = store.getAt(0);

            if (user) {
                editView.loadRecord(user);
                var image = self.getBookImage();
                image.setSrc(user.data.imageSrc);
                var rating = self.getRating();
                rating.setValue(user.data.rating);
            }
            Ext.getBody().unmask();
        });


    }
});
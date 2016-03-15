Ext.define('BookStore.controller.Add', {
    extend: 'BookStore.controller.BaseController',

    init: function () {
        this.control({
            '#addButton': {
                click: this.save
            }
        });
    },

    index: function () {
        this.show('Add');
    },
    save: function() {
        Ext.Router.redirect('books');
    }
});
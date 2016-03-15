Ext.define('BookStore.controller.Add', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            '#addButton': {
                click: this.save
            }
        });
    },

    add: function () {

    },
    save: function() {
        Ext.Router.redirect('books');
    }
});
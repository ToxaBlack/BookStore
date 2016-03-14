Ext.define('BookStore.controller.Add', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            '#addButton button': {
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
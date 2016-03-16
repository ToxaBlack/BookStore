Ext.define('BookStore.controller.BaseController', {
    extend: 'Ext.app.Controller',


    show: function (view) {
        var viewClass,
            viewport = Ext.getCmp('viewport'),
            target = viewport.down('#viewport-target');

        viewClass = Ext.ClassManager.get('BookStore.view.' + view);

        if (viewClass) {

            target.removeAll();
            view = Ext.create(viewClass, {
                border: false
            });

            target.add(view);
           this.getApplication().calculate();
        }
    }
});
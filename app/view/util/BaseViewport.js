Ext.define('BookStore.view.util.BaseViewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.form.Panel',
    id: 'viewport',
    overflowY: 'auto',
    layout: 'fit',
    items: [
        {
            xtype: 'component',
            autoEl: {
                tag: 'article'
            },
            items: {
                xtype: 'component',
                autoEl: {
                    tag: 'div'
                },
                items: {
                    xtype: 'testviewport'
                }
            }
        },
        {
            xtype: 'component',
            autoEl: {
                tag: 'footer'
            },
            margin: 10,
            html: '<h3>© 2016 Book Store'
        }
    ]
});
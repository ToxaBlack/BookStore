Ext.Loader.setConfig({disableCaching: false});
Ext.application({
    name: 'BookStore',

    extend: 'BookStore.Application',

    autoCreateViewport: true
});


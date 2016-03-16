Ext.define('BookStore.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    layout: {
        type : 'vbox',
       align : 'center'
    },
    defaults : {margin:10},

    title: 'Login',
    titleAlign: 'center',
    items: [
        {
            xtype: 'textfield',
            id: 'usernametext',
            fieldLabel: 'User name',value:'admin'
        },
        {
            xtype: 'textfield',
            id: 'passwordtext',
            fieldLabel: 'Password',
            inputType: 'password', value: 'admin'
        },
        {
            xtype: 'button',
            id: 'loginbutton',
            text: 'Login'
        }
    ]
});
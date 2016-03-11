Ext.define("BookStore.view.LoginScreen", {
    extend: "Ext.form.Panel",
    xtype: "login",
    layout: {
        type : "hbox",
        pack : "center",
        align : "middle"
    },
    defaults : {margin:5},
    title: "Login",
    titleAlign: "center",
    padding : 250,
    items: [
        {
            xtype: "textfield",
            id: "usernametext",
            fieldLabel: "User name",value:"admin"
        },
        {
            xtype: "textfield",
            id: "passwordtext",
            fieldLabel: "Password",
            inputType: "password", value: "admin"
        },
        {
            xtype: "button",
            id: "loginbutton",
            text: "Login"
        }
    ]
});
Ext.define('BookStore.view.util.Rating', {
    extend: 'Ext.form.FieldContainer',
    mixins: {
        field: 'Ext.form.field.Field'
    },
    alias: 'widget.ratingfield',
    layout: 'hbox',
    combineErrors: true,
    msgTarget: 'side',
    submitFormat: 'c',

    maxStars: 5,

    value: 0,

    initComponent: function () {
        var me = this;
        me.buildField();
        me.callParent();
    },


    buildField: function () {
        var self = this;
        this.items = Ext.apply( {
            xtype: 'container',
            items: self.initStars(),
            cls: 'rating',
            layout : {
                type : 'hbox',
                pack : 'end'
            }
        })

    },

    initStars: function () {
        var self = this;
        var starArray = [];
        for (var i = 0; i < this.maxStars; i++) {
            starArray.push(Ext.apply({
                xtype: 'component',
                cls: 'star-false',
                listeners: {
                    click: function (btn, e, eOpts) {
                        if (self.hasClass(this.dom, 'star-true')) {
                            this.removeCls('star-true');
                            this.addCls('star-false');

                        } else {
                            this.removeCls('star-false');
                            this.addCls('star-true');
                        }
                        var next = this.dom.previousElementSibling;
                        while(next) {
                            next.classList.remove('star-false');
                            next.classList.add('star-true');
                            next = next.previousElementSibling;
                        }
                    },



                    element: 'el'
                }
            }));
        }
        return starArray;
    },

    swap: function (star) {

    },

    hasClass: function (el, cls) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    },


    getValue: function () {
        return this.value;
    },

    setValue: function (value) {

    }
});
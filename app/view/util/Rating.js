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


    initComponent: function () {
        var me = this;
        me.buildField();
        me.callParent();
        Object.defineProperty(this, 'value', {
            get: function() { return value; },
            set: function(newValue) { value = newValue;},
            enumerable: true,
            configurable: true
        });
    },

    listeners: {
        propertychange: function (source, recordId, value, oldValue) {
            Ext.Msg.alert('Property Changed', Ext.String.format('From: [{0}], To: [{1}]', oldValue.toString(), value.toString()));
        }
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
                id: 'star' + i,
                listeners: {
                    click: function (btn, element) {
                        element.classList.add('star-true');
                        element.classList.remove('star-false');
                        var prev = element.previousElementSibling;
                        while(prev) {
                            prev.classList.remove('star-false');
                            prev.classList.add('star-true');
                            prev = prev.previousElementSibling;
                        }
                        var next = element.nextElementSibling;
                        while(next) {
                            next.classList.remove('star-true');
                            next.classList.add('star-false');
                            next = next.nextElementSibling;
                        }
                        self.value = parseInt(element.id.substr(4, element.id.length));
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
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
        me.callParent(arguments);
    },


    buildField: function () {
        this.items = this.initStars();
    },

    initStars: function () {
        var self = this;
        var starArray = [];
        for (var i = 0; i < this.maxStars; i++) {
            starArray.push(Ext.apply({
                xtype: 'component',
                cls: ['star'],
                id: 'star' + (i + 1),
                listeners: {
                    click: function () {
                        self.draw(this);
                        var next = this.next();
                        while(next) {
                            next.removeCls('star-true');
                            next = next.next();
                        }
                        self.value = parseInt(this.id.substr(4, this.id.length));
                    },
                    mouseover: function() {
                        self.draw(this);
                    },
                    mouseout: function() {
                        var count = parseInt(this.id.substr(4, this.id.length));
                        var prev = this;
                        while(prev && (count > self.value)) {
                            prev.removeCls('star-true');
                            prev = prev.prev();
                            count--;
                        }
                    },
                    element: 'el'
                }
            }));
        }
        return starArray;
    },

    draw: function (star) {
        var prev = star;
        while(prev) {
            prev.addCls('star-true');
            prev = prev.prev();
        }
    },

    getValue: function () {
        return this.value;
    },

    setValue: function (value) {
        this.value = value;
        var star = Ext.get('star' + value);
        this.draw(star);
    }
});
var Make = require('../../lib/make');
var templates = require('../../lib/templates.json');
var view = require('../../lib/view');

module.exports = view.extend({
    id: 'edit',
    template: require('./index.html'),
    created: function () {
        var self = this;

        // Fetch app
        var id = self.$parent.$data.params.id;
        var target = new Make(id);

        // Bind app
        self.$data = target.meta;
        self.$data.updateName = function (name) {
            target.updateName(name);
        };
    }
});
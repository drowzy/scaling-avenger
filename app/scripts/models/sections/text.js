/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TextModel = Backbone.Model.extend({
        url: 'sections/text',

        initialize: function() {
        },

        defaults: {
            header: '',
            body: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return TextModel;
});

/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';
  var SkillModel = Backbone.Model.extend({

    url: 'section/skill',
    initialize: function() {
    },

    defaults: {
      name: '',
      level: 0
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });
  return SkillModel;
});

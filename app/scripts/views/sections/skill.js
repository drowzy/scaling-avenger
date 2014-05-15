/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var SkillView = Backbone.View.extend({
    template: JST['app/scripts/templates/sections/skill.hbs'],
    tagName: 'section',
    //id: '',
    className: 'container-fluid',
    events: {
      'mouseenter': 'showSettings',
      'mouseleave': 'showSettings'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    showSettings: function() {
      this.$el.find('.edit-skill').toggle();
    }

  });

  return SkillView;
});

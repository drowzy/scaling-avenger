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
    tagName: 'div',
    //id: '',
    //className: '',
    //events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  return SkillView;
});

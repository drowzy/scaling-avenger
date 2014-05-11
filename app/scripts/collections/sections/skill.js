/*global define*/

define([
  'underscore',
  'backbone',
  'models/sections/skill'
], function (_, Backbone, SkillModel) {
  'use strict';

  var SectionsSkillCollection = Backbone.Collection.extend({
    model: SkillModel
  });

  return SectionsSkillCollection;
});

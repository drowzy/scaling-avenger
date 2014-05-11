/*global require*/
'use strict';

require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
    handlebars: '../bower_components/handlebars/handlebars'
  }
});

require([
  'jquery',
  'backbone',
  'models/sections/text',
  'models/sections/skill',
  'views/sections/skill',
  'views/sections/text'
], function ($, Backbone, TextModel, SkillModel, SkillView, TextView) {
  Backbone.history.start();

  var text = new TextModel({
    header: 'My first text section',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, debitis.'
  }),
  skill = new SkillModel({
    name: 'JavaScript',
    level: 40
  }),
  textview = new TextView({ model: text }),
  skillView = new SkillView({ model: skill });

  $('body').html(textview.render().el);
  $('body').append(skillView.render().el);
});

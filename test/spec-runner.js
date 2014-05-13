require.config({
  baseUrl: '.',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    handlebars: 'bower_components/handlebars/handlebars',
    models: 'scripts/models'
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

require(['require'], function(require){
  require([
    'spec/model.text.spec',
  ], function(require) {
      mocha.run();
  });
});

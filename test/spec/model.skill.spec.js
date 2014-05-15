define(function(require) {
  'use strict';

  describe('Skill Model', function() {

    var TextModel = require('models/sections/skill');

    it('should have correct default values"', function() {
      var model = new SkillModel();
      model.should.be.ok;
      model.get('name').should.equal('');
      model.get('level').should.equal(0));
    });

    it('should set passed attributes"', function() {
      var model = new SkillModel({
        title: 'My Title',
        content: 'Lorem ipsum dolor.'
      });

      model.get('title').should.equal('My Title');
      model.get('content').should.equal('Lorem ipsum dolor.');
    });

  });
});

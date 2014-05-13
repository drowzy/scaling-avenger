define(function(require) {
    'use strict';

    describe('Text Model', function() {

        var TextModel = require('models/sections/text');

        it('should have correct default values"', function() {
            var model = new TextModel();

            model.should.be.ok;
            model.get('title').should.equal('');
            model.get('content').should.equal('');
        });

        it('should set passed attributes"', function() {
            var model = new TextModel({
                title: 'My Title',
                content: 'Lorem ipsum dolor.'
            });

            model.get('title').should.equal('My Title');
            model.get('content').should.equal('Lorem ipsum dolor.');
        });

    });
});

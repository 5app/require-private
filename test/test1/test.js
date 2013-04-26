var assert = require('assert');
var requirePrivate = require('../../lib/main.js');
describe('Function', function() {
	describe('require-private in same dir', function() {
		it('should return a function when require-private is required', function() {
			assert.equal(typeof(requirePrivate), 'function');
		});
		it('should return a function when testmodule is required in the same directory', function() {
			var testmodule = requirePrivate('testmodule');
			assert.equal(typeof(testmodule), 'function');
		});
		it('testmodule should return the correct string when called', function() {
			var testmodule = requirePrivate('testmodule');
			assert.equal(testmodule(), 'I am the correct module that has been loaded');
		});
		it('should throw an error when a module is not found', function() {
			var a = function() {
				var testmodule = requirePrivate('nonexistant');
			};
			assert.throws(a, /Error: Cannot find module */);
		});
	});
});

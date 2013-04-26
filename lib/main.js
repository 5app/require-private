(function() {
	'use strict';
	/*jslint node: true */


	var modulefolder,
		dir,
		files,
		path = require('path'),
		fs = require('fs');

	module.exports = function(packagename) {
		return require(modulefolder + packagename);
	};

	if (module.parent) {
		dir = path.dirname(module.parent.filename);
	} else {
		dir = __dirname;
	}

	while (dir.length > 0 && !modulefolder) {
		files = fs.readdirSync(dir);
		if (files) {
			if (dir == '/home' || dir === '') {
				throw 'Private module folder not found';
			}
		}
		if (files.some(checkitem)) {
			//Found!
			modulefolder = dir + '/private_modules/';
		} else {
			// Not found. Move up a level
			var dirarr = dir.split('/');
			dirarr.pop();
			dir = dirarr.join('/');
		}
	}
	function checkitem(item) {
		return (item == 'private_modules');
	}

}());

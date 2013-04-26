Require private modules without having to use relative paths or polluting the node_modules folder

Usage:

var requirePrivate = require("require-private");

var mymodule = requirePrivate("mymodule");

Where mymodule is in a folder private_modules at the same level or above the file being executed.

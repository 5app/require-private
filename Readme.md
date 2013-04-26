Require private modules without having to use relative paths or polluting the node_modules folder.

## Use Case

Lets say you have a number of modules written for node that you don't want to publish to npm. To allow these 
modules to require each other you can either use relative paths which gets messy or npm link which requires a 
global install. `require-private` gives you a third option. 

Here is how you could organise the directory:
 
- .git 
- private_modules
 + moduleA
 + moduleB
 + ... 
- node_modules
 + ... 
- main.js
- package.json

In any of the modules you can use the code below to `require` the correct thing.

    var requirePrivate = require("require-private");
    var moduleA = requirePrivate("moduleA");
    var moduleB = requirePrivate("moduleB");

## What it Does

On calling `requirePrivate` it searches up the directory tree until it finds a folder called `private_modules` it 
includes the module from that folder.

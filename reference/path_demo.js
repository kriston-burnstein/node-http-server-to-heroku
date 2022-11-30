const path = require('path');
// Helps us to dissect parts of the file name

// Gets the base file name
console.log(__filename) //because this gives us whole path and file name at end
console.log(path.basename(__filename)); //wrapping in path.basename will give us just file name only => path_demo.js

// Directory name
console.log(path.dirname(__filename)); //only the directory name
console.log(__dirname) //will also give us the directory name, but utilizing the path module above

// File extension
// Will get quite a bit of use in creating HTTP server
console.log(path.extname(__filename)); // => .js

// Create path object with .parse()
// Returns an object with keys of root, dir, base, ext, name
// After which you can then access any property
// An example accessing the base property below
console.log(path.parse(__filename).base); // => 'path_demo'

// Concatenate paths with join
// Use case is create the current directory/test/hello.html
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
// returns full path/reference/test/hello.html
// works really well with issues with delimiters
// example, windows has different delimiters like back slash
// this will put the correct delimiter in (which usually resolves itself), however, there are some cases where it doesn't


// Additional examples


// get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;
console.log(platSpec);


// get the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
const pathformat = path.format({
  dir: pathjoin,
  root: pathjoin,
  base: pathjoin,
  name: pathjoin,
  ext: pathjoin,
});

console.log(pathformat);


// get the parent folder director
const parentDir = path.dirname(__dirname);
console.log(parentDir);

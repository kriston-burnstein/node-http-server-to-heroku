const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL (basically the straight up url)
console.log(myUrl.href); // returns entire url
console.log(myUrl.toString()); // also returns entire url

// Host (root domain)
console.log(myUrl.host); // mywebsite.com:8000 (will also give yout he port)

// Hostname (does not get port)
console.log(myUrl.hostname); //mywebsite.com

// Pathname
console.log(myUrl.pathname); // /hello.html (just the actual file)

// Serialized query (basically the straight up query params)
console.log(myUrl.search); // ?id=100&status=active

// Params object
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// returns each key value pair

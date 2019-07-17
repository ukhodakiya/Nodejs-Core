const url = require('url');
const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

//serialize url
console.log(myUrl.href);
console.log(myUrl.toString());

//host (root domain)
console.log(myUrl.host);

//hostname (doesnt get port)
console.log(myUrl.hostname);

//pathname
//serialized query => search
// params object => searchParams
console.log(myUrl);

//add params
myUrl.searchParams.append('abc',1234);
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name) => {console.log(`${name}:${value}`) }); 

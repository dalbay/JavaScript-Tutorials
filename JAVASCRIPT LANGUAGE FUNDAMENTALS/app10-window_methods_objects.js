// WINDOW METHODS / OBJECTS / PROPERTIES


// Methods:

// **Alert** - You could use alerts in form validations, and using the DOM and outputting a nice Bootstrap alert, rather than using simple alert.
 alert('Hello World');


// **Prompt** - will take an input from the user.
const input = prompt(); 
alert(input);

//**Confirm** - is used when you deleting somethind
if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
}


// Properties:

// **Outter height and width**
let val;
val = window.outerHeight; // returns the window screen height.
val = window.outerWidth;  // returns the window screen width.

// **Inner height and width**
val = window.innerHeight;  // if you have scroll bars 
val = window.innerWidth;   // if you have scroll bars 

// **Scroll points**
val = window.scrollY;  // to figure out where you are in terms of scrolling 
val = window.scrollX;

// For instance, if you put a div in the body with a margin-top: 1000px; will give you a scroll bar
// You could use this when you want to show an animation when you scroll down to a certain point 



// Location Object:

val = window.location;
console.log(val);

/*OUTPUT:
[object Object]: {assign: function assign() { [native code] }, hash: "", host: "127.0.0.1:5500", hostname: "127.0.0.1", href: "http://127.0.0.1:5500/index.html"...}
assign: function assign() { [native code] }
hash: ""
host: "127.0.0.1:5500"
hostname: "127.0.0.1"
href: "http://127.0.0.1:5500/index.html"
origin: "http://127.0.0.1:5500"
pathname: "/index.html"
port: "5500"
protocol: "http:"
reload: function reload() { [native code] }
replace: function replace() { [native code] }
search: ""
toString: function toString() { [native code] }
__proto__: LocationPrototype
*/

val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;  // use it with queryStrings.

/*
- For instance if you type in *?id=1*, the url will show 
http://127.0.0.1:5500/index.html?id=1
	
We can extract the query string values from the URL and use it in our script; or 
create links that people click on; or get forms that people submit with these parameters.
*/

// **Redirect** 
window.location.href = 'http://google.com';

// **Reload** 
window.location.reload();


// History Object:

// will get your browsing history
window.history.go(-2);
val = window.history.length;


// Navigator Object:

// has to do with the browser itself
val = window.navigator;
/*
[object Navigator]: {activeVRDisplays: Array, appCodeName: "Mozilla", appName: "Netscape", appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362", cookieEnabled: true...}
activeVRDisplays: Array
appCodeName: "Mozilla"
appName: "Netscape"
appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362"
cookieEnabled: true
credentials: CredentialsContainer
doNotTrack: null
geolocation: Geolocation
hardwareConcurrency: 8
language: "en-US"
languages: Array
maxTouchPoints: 0
mediaDevices: MediaDevices
mimeTypes: Array
msManipulationViewsEnabled: true
onLine: true
platform: "Win32"
plugins: Array
product: "Gecko"
productSub: "20030107"
serviceWorker: ServiceWorkerContainer
userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362"
vendor: ""
vendorSub: ""
webdriver: false
__proto__: NavigatorPrototype
*/
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; // if windows do.. if mac do …
val = window.navigator.vendor;
val = window.navigator.language;  // en-US

## Autplay on Focus
This bookmarklet causes any video on a page to automatically pause on window blur and resume on focus.

### Setup
To use this bookmarklet, simply drag <a href='javascript:!function(a){var%20b={selectors:{video:"video",msgBox:"#autoplay-msg"},data:{eventsBinded:!1},init:function(a){var%20b=void%200===a||null===a?!0:this.isPage(a),c=document.querySelector(this.selectors.video);null!==c?b&&c.addEventListener("play",this.bindEvents.bind(this)):this.displayMessage("No%20video%20exists%20on%20this%20page.",!0)},displayMessage:function(a,b){function%20d(){this.fadeOut(c)}b=null===b?!1:b;var%20c=document.createElement("span");c.id="autoplay-msg",c.innerHTML=a,c.style.padding="10px%2020px",c.style.backgroundColor=b?"#b30800":"#72b339",c.style.color="white",c.style.fontFamily="Helvetica,%20sans-serif",c.style.position="absolute",c.style.top="10px",c.style.right="10px",c.style.position="fixed",c.style.borderRadius="5px",c.style.zIndex="999999999999",document.querySelector("body").appendChild(c),window.setTimeout(d.bind(this),3e3)},fadeOut:function(a){a.style.opacity="1";var%20b=window.setInterval(function(){var%20c=parseFloat(a.style.opacity);return%20c>0?(a.style.opacity=(c-.1).toString(),void%200):(clearInterval(b),!0)},50)},bindEvents:function(a){this.data.eventsBinded||(window.addEventListener("focus",function(){a.target.play()}),window.addEventListener("blur",function(){a.target.pause()}),this.data.eventsBinded=!0,this.displayMessage("Autoplay-on-focus%20enabled"))},isPage:function(a){var%20b=document.createElement("a");return%20b.href=document.URL,b.pathname.indexOf(a+"/")>0}};b.init(a)}();'>this link</a> to your bookmarks bar.

### Usage
To enable autoplay-on-focus functionality on a page containing a video, just activate the bookmarklet. Once the video has begun playing, it will automatically pause once the window loses focus and resume when the window regains focus.

### Usage as a User Script
This script can be used as a User Script with browser extensions such as [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (Chrome) or [Greesemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/) (Firefox) to automatically run and prevent having to activate the bookmarklet. 

To enable the script only on a certain page or section of a website, an argument can be passed into the anonymous function, indicating a part of the URI that must exist in order for the script to run. For example, to only run the script on _example.com/videos/lessons/_ pages, you would modify the script and pass in `'lessons'` as an argument, like so:<br>
`(function(pageName) { ... })(`**_`'lessons'`_**`)`
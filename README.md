## Autoplay on Focus
This bookmarklet causes any video on a page to automatically pause on window blur and resume on focus.

### Setup
To use this bookmarklet, copy the contents of [the minified file](https://raw.githubusercontent.com/ravroid/autoplay-on-focus/master/autoplay_focus.min.js) and paste them into a new bookmark. Prefix the code with `javascript:`.

### Usage
To enable autoplay-on-focus functionality on a page containing a video, just activate the bookmarklet. Once the video has begun playing, it will automatically pause once the window loses focus and resume when the window regains focus.

### Usage as a User Script
This script can be used as a User Script with browser extensions such as [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (Chrome) or [Greesemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/) (Firefox) to cause the script to be run automatically run and to prevent you from having to activate the bookmarklet. 

To enable the script only on a certain page or section of a website, an argument can be passed into the anonymous function, indicating a part of the URI that must exist in order for the script to run. For example, to only run the script on _example.com/videos/lessons/_ pages, you would modify the script and pass in `'lessons'` as an argument, like so:<br>
`(function(pageName) { ... })(`**_`'lessons'`_**`)`

(function(pageName) {
	var app = {

		selectors: {
			video: 'video',
			msgBox: '#autoplay-msg'
		},

		data: {
			eventsBinded: false
		},

		init: function(pageName) {
			var isPage = (pageName === undefined || pageName === null) ? true : this.isPage(pageName);
			var video = document.querySelector(this.selectors.video);

	    	if (video !== null) {
	    		if (isPage) {
					video.addEventListener('play', this.bindEvents.bind(this));
	    		}
	    	} else {
	    		this.displayMessage('No video exists on this page.', true);
	    	}
		},

		/**
		 * Display a messag dialog
		 * @param  {string}  message 	The message to display
		 * @param  {Boolean} isError 	If true, the message dialog will be formatted as an error
		 */
		displayMessage: function(message, isError) {
			isError = (isError === null) ? false : isError;

			// create notification element
	    	var msgBox = document.createElement('span');
	    	msgBox.id = 'autoplay-msg';
	    	msgBox.innerHTML = message;
	    
	    	// apply styles to element
	    	msgBox.style.padding = '10px 20px';
	    	msgBox.style.backgroundColor = (isError) ? '#b30800' : '#72b339';
	    	msgBox.style.color = 'white';
	    	msgBox.style.fontFamily = 'Helvetica, sans-serif';
	    	msgBox.style.position = 'absolute';
	    	msgBox.style.top = '10px';
	    	msgBox.style.right = '10px';
	    	msgBox.style.position = 'fixed';
	    	msgBox.style.borderRadius = '5px';
	    	msgBox.style.zIndex = '999999999999';

			// display notification
	    	document.querySelector('body').appendChild(msgBox);

	    	function callFadeout() {
	    		this.fadeOut(msgBox);
	    	}

	    	window.setTimeout(callFadeout.bind(this), 3000);
		},

		/**
		 * Fade out an element
		 * @param  {Element} el 	The element to fade out
		 */
		fadeOut: function(el) {
			el.style.opacity = '1';

			var interval = window.setInterval(function() {
				
				var opacity = parseFloat(el.style.opacity);
				if (opacity > 0) {
					el.style.opacity = (opacity - .1).toString();
				} else {
					clearInterval(interval);
					return true;
				}

			}, 50);
		},

		/**
		 * Creates auto-play and auto-pause event bindings
		 * @param  {Event} e [description]
		 */
		bindEvents: function(e) {
			if (!this.data.eventsBinded) {
				window.addEventListener('focus', function() {
					e.target.play();
				});
				window.addEventListener('blur', function() {
					e.target.pause();
				});

				this.data.eventsBinded = true;
	        	this.displayMessage('Autoplay-on-focus enabled');
			}
		},

		isPage: function(pageName) {
	        var parser = document.createElement('a');
	        parser.href = document.URL;
	        
	        return (parser.pathname.indexOf(pageName + '/') > 0);
	    }

	};

	app.init(pageName);
})();
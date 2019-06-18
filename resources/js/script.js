$(document).ready(function() {
	
	// NAV BAR ANIMATION
	const header = document.querySelector('header');
	const callback = function (entries, observer) {
		entries.forEach(function(entry) {
			const navBar = document.querySelector('.header-nav');
			if (entry.isIntersecting)  {
				navBar.classList.remove('sticky-nav');
			} else {
				navBar.classList.add('sticky-nav');
			}
		})
	}
	const options = {
		rootMargin: "-60px 0px", //height of secondary nav bar
	}
	const observer = new IntersectionObserver(callback, options);
	observer.observe(header);
});
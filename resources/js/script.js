//	NAV BAR ANIMATION
const header = document.querySelector('header');
const navBarOptions = {
	rootMargin: "-60px 0px", //height of secondary nav bar
}
const navBarObserver = new IntersectionObserver(function (entries, observer) {
	entries.forEach(function(entry) {
		const navBar = document.querySelector('.header-nav');
		if (entry.isIntersecting)  {
			navBar.classList.remove('sticky-nav');
		} else {
			navBar.classList.add('sticky-nav');
		}
	})
}, navBarOptions);
navBarObserver.observe(header);

// ANIMATION ON VIEWPORT
function animateOnViewport(elementQuery, animationClassName) {
	const element = document.querySelector(elementQuery);
	const options = { threshold: 1 };
	const observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				element.classList.add(animationClassName);
				observer.unobserve(element);
			}
		});
	}, options);
	observer.observe(element);
}

animateOnViewport('.section--feature__features', 'animation-fade-in');
animateOnViewport('.content__left img', 'animation-fade-in-up');
animateOnViewport('.section--cities__content', 'animation-fade-in');
animateOnViewport('.section--plans__content .plan:first-child', 'animation-pulse');
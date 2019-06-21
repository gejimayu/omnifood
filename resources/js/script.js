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

// SMOOTH SCROLLING
function smoothScroll(fromClassName, toIdName) {
	const elements = document.querySelectorAll(fromClassName);
	elements.forEach(function(element) {
		element.addEventListener('click', function(e) {
			e.preventDefault();
			window.scroll({
			  top: document.querySelector(toIdName).offsetTop,
			  left: 0,
			  behavior: 'smooth',
			})
		});
	});
}

smoothScroll('.js--scroll-to-section-feature', '#section--feature');
smoothScroll('.js--scroll-to-section-how-it-works', '#section--how-it-works');
smoothScroll('.js--scroll-to-section-cities', '#section--cities');
smoothScroll('.js--scroll-to-section-contact', '#section--contact');
smoothScroll('.js--scroll-to-section-plans', '#section--plans');

// RESPONSIVE NAVBAR
const hamburgerIcon = document.querySelector('.header-nav ion-icon');
const navs = document.querySelector('.header-nav nav');
let isHamburgerIconOpen = true;
hamburgerIcon.addEventListener('click', function(element) {
	if (isHamburgerIconOpen) {
		hamburgerIcon.setAttribute('name', 'close');
		navs.style.opacity = 1;
		navs.style.height = '170px';
		navs.style.marginTop = '20px';
	} else {
		hamburgerIcon.setAttribute('name', 'menu');
		navs.style.opacity = 0;
		navs.style.height = '40px';
		navs.style.marginTop = '0px';
	}	
	isHamburgerIconOpen = !isHamburgerIconOpen;
})

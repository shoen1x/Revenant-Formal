//	Revenant Formal by NMVX
//	Shoen1x.github.io | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

	// Disable Mobile Experiences
	function isMobile() {
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)))
	}

	jQuery.noConflict();
	jQuery(document).ready(function () {
		if (isMobile()) document.getElementsByTagName('body')[0].style.display = 'none', document.title = 'Mobile experience not working';
		else console.log('Hello user!');
	});

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
	breakpoints({
		xxlarge: ['1681px', '1920px'],
		xlarge: ['1281px', '1680px'],
		large: ['1001px', '1280px'],
		medium: ['737px', '1000px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Touch mode.
	if (browser.mobile)
		$body.addClass('is-touch');
	else {

		breakpoints.on('<=small', function () {
			$body.addClass('is-touch');
		});

		breakpoints.on('>small', function () {
			$body.removeClass('is-touch');
		});

	}

	// Fix: IE flexbox fix.
	if (browser.name == 'ie') {

		var $main = $('.main.fullscreen'),
			IEResizeTimeout;

		$window
			.on('resize.ie-flexbox-fix', function () {

				clearTimeout(IEResizeTimeout);

				IEResizeTimeout = setTimeout(function () {

					var wh = $window.height();

					$main.each(function () {

						var $this = $(this);

						$this.css('height', '');

						if ($this.height() <= wh)
							$this.css('height', (wh - 50) + 'px');

					});

				});

			})
			.triggerHandler('resize.ie-flexbox-fix');

	}

	// Gallery.
	$window.on('load', function () {

		var $gallery = $('.gallery');

		$gallery.poptrox({
			baseZIndex: 10001,
			useBodyOverflow: false,
			usePopupEasyClose: false,
			overlayColor: '#1f2328',
			overlayOpacity: 0.65,
			usePopupDefaultStyling: false,
			usePopupCaption: true,
			popupLoaderText: '',
			windowMargin: 50,
			usePopupNav: true
		});

		// Hack: Adjust margins when 'small' activates.
		breakpoints.on('>small', function () {
			$gallery.each(function () {
				$(this)[0]._poptrox.windowMargin = 50;
			});
		});

		breakpoints.on('<=small', function () {
			$gallery.each(function () {
				$(this)[0]._poptrox.windowMargin = 5;
			});
		});

	});

	// Section transitions.
	if (browser.canUse('transition')) {

		var on = function () {

			// Galleries.
			$('.gallery')
				.scrollex({
					top: '30vh',
					bottom: '30vh',
					delay: 50,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			// Generic sections.
			$('.main.style1')
				.scrollex({
					mode: 'middle',
					delay: 100,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			$('.main.style2')
				.scrollex({
					mode: 'middle',
					delay: 100,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			// Contact.
			$('#contact')
				.scrollex({
					top: '50%',
					delay: 50,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			// Youtube.
			$('#youtube')
				.scrollex({
					top: '50%',
					delay: 50,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

		};

		var off = function () {

			// Galleries.
			$('.gallery')
				.unscrollex();

			// Generic sections.
			$('.main.style1')
				.unscrollex();

			$('.main.style2')
				.unscrollex();

			// Contact.
			$('#contact')
				.unscrollex();

			// Youtube.
			$('#youtube')
				.unscrollex();

		};

		breakpoints.on('<=small', off);
		breakpoints.on('>small', on);

	}

	// Events.
	var resizeTimeout, resizeScrollTimeout;

	$window
		.on('resize', function () {

			// Disable animations/transitions.
			$body.addClass('is-resizing');

			clearTimeout(resizeTimeout);

			resizeTimeout = setTimeout(function () {

				// Update scrolly links.
				$('a[href^="#"]').scrolly({
					speed: 1500,
					offset: $header.outerHeight() - 1
				});

				// Re-enable animations/transitions.
				setTimeout(function () {
					$body.removeClass('is-resizing');
					$window.trigger('scroll');
				}, 0);

			}, 100);

		})
		.on('load', function () {
			$window.trigger('resize');
		});

	// Hero Slider
	$('.slide-nav').on('click', function (e) {
		e.preventDefault();
		// get current slide
		var current = $('.flex--active').data('slide'),
			// get button data-slide
			next = $(this).data('slide');

		$('.slide-nav').removeClass('active');
		$(this).addClass('active');

		if (current === next) {
			return false;
		} else {
			$('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
			$('.flex--active').addClass('animate--end');
			setTimeout(function () {
				$('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
				$('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
			}, 800);
		}
	});

	// Images Timer Scroll
	setInterval(function () {
		var current = $('.flex--active').data('slide'), next = $('.slide-nav').data('slide');

		next = current + 1;
		$('.slide-nav').removeClass('active');
		$(this).addClass('active');

		if (next == 6) {
			current = 1;
			next = 1;
			$('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
			$('.flex--active').addClass('animate--end');
			setTimeout(function () {
				$('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
				$('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
			}, 800);
		} else {
			if (current === next) {
				return false;
			} else {
				$('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
				$('.flex--active').addClass('animate--end');
				setTimeout(function () {
					$('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
					$('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
				}, 800);
			}
		}
	}, 15000);

	// Splide base Ads carousel
	var splide;

	document.addEventListener('DOMContentLoaded', function () {

		splide = new Splide('.splide', {
			autoplay: true,
			interval: 12000,
			pauseOnHover: false,

			arrows: false,
			perPage: 1,
			type: 'loop',
			pagination: true,
			keyboard: false,
			slideFocus: false
		}).mount();

		splide.on('move', function () {
			var slides = document.querySelectorAll('.splide .splide__slide');

			slides.forEach(function (slide) {
				slide.classList.add('is-visible');
			});
		});

	});

	// Scroll Indicator
	const indicator = document.querySelector(".scroll-indicator")

	const scroll = () => {
		const height = document.documentElement.offsetHeight
		const mx = document.documentElement.scrollHeight - document.documentElement.clientHeight
		const perc = document.documentElement.scrollTop * 100 / mx
		indicator.style.width = perc + "%"
	}

	document.addEventListener("scroll", scroll)

	// Replace bottom articles
	$('.stpage').on('click', function (e) {
		e.preventDefault();
		const projectarticle = document.querySelector('.main.style5.primary');

		var fetchnumber = $(this).data('navpagenum');
		if (fetchnumber == 1) {
			$('#pdisplay').removeClass('hidden');

			document.querySelector('#header h1').innerHTML = 'Southern Tigers Concept'
			document.querySelector('.project').innerHTML = 'Southern Tigers Concept';
			document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.project-overview').innerHTML = 'Southern Tigers Lorem';
			document.querySelector('.wrap').innerHTML = '<image-parallax sp="60" class="el1" src="images/fulls/full/st1.webp"></image-parallax><image-parallax sp="100" class="el2" src="images/fulls/full/st2.webp"></image-parallax><image-parallax sp="-80" class="el3"><img src="images/fulls/full/st3.webp"/></image-parallax>';

			document.querySelector('.center-image-background').innerHTML = `
			<img class="center-image-parallax" src="images/fulls/full/st7.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st1.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st2.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st3.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st4.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st5.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st6.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st8.webp" />
			<img class="center-image-parallax" src="images/fulls/full/st9.webp" />
			<img class="center-image-parallax" src="images/fulls/full/su1.webp" />`;

			document.querySelector('#center-image').style.cssText = `
				background: linear-gradient(to bottom, rgb(46, 58, 141) 0%,rgba(228, 30, 42, 0.25) 100%), url("images/fulls/full/st1.webp");
				background-size: cover;
				background-attachment: fixed;
				background-position: top center;
				background-repeat: no-repeat;`;
			document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left center no-repeat, url('images/fulls/full/st7.webp') center no-repeat";

			projectarticle.scrollIntoView();

		} else if (fetchnumber == 2) {
			$('#pdisplay').removeClass('hidden');

			document.querySelector('#header h1').innerHTML = 'Istinggar'
			document.querySelector('.project').innerHTML = 'Istinggar Concept';
			document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.wrap').innerHTML = '<image-parallax sp="60" class="el1" src="images/fulls/full/ic1.webp"></image-parallax><image-parallax sp="100" class="el2" src="images/fulls/full/ic2.webp"></image-parallax><image-parallax sp="-80" class="el3"><img src="images/fulls/full/ic3.webp"/></image-parallax>';

			document.querySelector('.center-image-background').innerHTML = `
			<img class="center-image-parallax" src="images/fulls/full/ic1.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ic2.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ic3.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ic4.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ic5.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ic6.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ic7.webp" />`;

			document.querySelector('#center-image').style.cssText = `
				background: linear-gradient(to bottom, rgb(78, 78, 80) 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp2.webp");
				background-size: cover;
				background-attachment: fixed;
				background-position: top center;
				background-repeat: no-repeat;`;
			document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left center no-repeat, url('images/fulls/full/ic3.webp') center no-repeat";

			projectarticle.scrollIntoView();

		} else if (fetchnumber == 3) {
			$('#pdisplay').removeClass('hidden');

			document.querySelector('#header h1').innerHTML = 'Aerophantom Earbuds'
			document.querySelector('.project').innerHTML = 'Aerophantom Earbuds';
			document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.wrap').innerHTML = `
			<image-parallax sp="60" class="el1" src="images/fulls/full/ae4.webp"></image-parallax>
			<image-parallax sp="100" class="el2" src="images/fulls/full/ae2.webp"></image-parallax>
			<image-parallax sp="-80" class="el3" src="images/fulls/full/ae3.webp"></image-parallax>`;

			document.querySelector('.center-image-background').innerHTML = `
			<img class="center-image-parallax" src="images/fulls/full/ae1.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ae2.webp" />	
			<img class="center-image-parallax" src="images/fulls/full/ae3.webp" />
			<img class="center-image-parallax" src="images/fulls/full/ae4.webp" />`;

			document.querySelector('#center-image').style.cssText = `
				background: linear-gradient(to bottom, rgb(78, 78, 80) 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp3.webp");
				background-size: cover;
				background-attachment: fixed;
				background-position: top center;
				background-repeat: no-repeat;`;
			document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left center no-repeat, url('images/fulls/full/ae3.webp') center no-repeat";

			projectarticle.scrollIntoView();
		} else if (fetchnumber == 4) {
			$('#pdisplay').removeClass('hidden');

			document.querySelector('#header h1').innerHTML = 'Nordic Axe Concept'
			document.querySelector('.project').innerHTML = 'Nordic Axe Concept';
			document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.wrap').innerHTML = `
			<image-parallax sp="60" class="el1" src="images/fulls/full/na1.webp"></image-parallax>
			<image-parallax sp="100" class="el2" src="images/fulls/full/na5.webp"></image-parallax>
			<image-parallax sp="-80" class="el3" src="images/fulls/full/na4.webp"></image-parallax>`;

			document.querySelector('.center-image-background').innerHTML = `
			<img class="center-image-parallax" src="images/fulls/full/na1.webp" />
			<img class="center-image-parallax" src="images/fulls/full/na2.webp" />	
			<img class="center-image-parallax" src="images/fulls/full/na3.webp" />
			<img class="center-image-parallax" src="images/fulls/full/na4.webp" />
			<img class="center-image-parallax" src="images/fulls/full/na5.webp" />
			<img class="center-image-parallax" src="images/fulls/full/na6.webp" />`;

			document.querySelector('#center-image').style.cssText = `
				background: linear-gradient(to bottom, rgb(78, 78, 80) 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp4.webp");
				background-size: cover;
				background-attachment: fixed;
				background-position: top center;
				background-repeat: no-repeat;`;
			document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left center no-repeat, url('images/fulls/full/na2.webp') center no-repeat";

			projectarticle.scrollIntoView();
		} else {
			$('#pdisplay').removeClass('hidden');

			document.querySelector('#header h1').innerHTML = 'Harimau Malaya'
			document.querySelector('.project').innerHTML = 'Harimau Malaya';
			document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
			document.querySelector('.wrap').innerHTML = `
			<image-parallax sp="60" class="el1" src="images/fulls/full/hm1.webp"></image-parallax>
			<image-parallax sp="100" class="el2" src="images/fulls/full/hm4.webp"></image-parallax>
			<image-parallax sp="-80" class="el3" src="images/fulls/full/hm6.webp"></image-parallax>`;

			document.querySelector('.center-image-background').innerHTML = `
			<img class="center-image-parallax" src="images/fulls/full/hm1.webp" />
			<img class="center-image-parallax" src="images/fulls/full/hm2.webp" />	
			<img class="center-image-parallax" src="images/fulls/full/hm3.webp" />
			<img class="center-image-parallax" src="images/fulls/full/hm4.webp" />
			<img class="center-image-parallax" src="images/fulls/full/hm5.webp" />
			<img class="center-image-parallax" src="images/fulls/full/hm6.webp" />`;

			document.querySelector('#center-image').style.cssText = `
				background: linear-gradient(to bottom,  #FFD700 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp5.webp");
				background-size: cover;
				background-attachment: fixed;
				background-position: top center;
				background-repeat: no-repeat;`;
			document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left center no-repeat, url('images/fulls/full/bp5.webp') center no-repeat";

			projectarticle.scrollIntoView();
		}
	})

	// On focus top file
	$('#navsection').on('mouseover mouseout', function () {
		if (document.documentElement.scrollTop == 0) {
			$('#pdisplay').addClass('hidden');
			document.querySelector('#header h1').innerHTML = 'Projects'
		} else {
			return;
		}

	})

	// Hanya Allah yang tahu

})(jQuery);

jQuery.event.special.touchstart = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
	}
};
jQuery.event.special.touchmove = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
	}
};
jQuery.event.special.wheel = {
	setup: function (_, ns, handle) {
		this.addEventListener("wheel", handle, { passive: true });
	}
};
jQuery.event.special.mousewheel = {
	setup: function (_, ns, handle) {
		this.addEventListener("mousewheel", handle, { passive: true });
	}
};
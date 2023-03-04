(function ($) {

    // Replace bottom articles
    $('.stpage').on('click', function (e) {
        e.preventDefault();
        const projectarticle = document.querySelector('.main.style5.primary');

        var fetchnumber = $(this).data('navpagenum');

        switch (fetchnumber) {
            case 1:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Southern Tigers Concept'
                document.querySelector('.project').innerHTML = 'Southern Tigers<br>Concept';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

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
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/st7.webp') center no-repeat";

                projectarticle.scrollIntoView();

                break;
            case 2:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Istinggar'
                document.querySelector('.project').innerHTML = 'Istinggar<br>Concept';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

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
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/ic3.webp') center no-repeat";

                projectarticle.scrollIntoView();
                break;
            case 3:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Aerophantom Earbuds'
                document.querySelector('.project').innerHTML = 'Aerophantom<br>Earbuds';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

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
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/ae3.webp') center no-repeat";

                projectarticle.scrollIntoView();
                break;
            case 4:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Nordic Axe Concept'
                document.querySelector('.project').innerHTML = 'Nordic Axe<br>Concept';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

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
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/na2.webp') center no-repeat";

                projectarticle.scrollIntoView();
                break;
            case 5:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Harimau Malaya'
                document.querySelector('.project').innerHTML = 'Harimau<br>Malaya';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

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
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp5.webp') center no-repeat";

                projectarticle.scrollIntoView();
                break;
            case 6:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Kelantan Home Concept'
                document.querySelector('.project').innerHTML = 'Kelantan Home<br>Concept';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

                document.querySelector('.center-image-background').innerHTML = `
            <img class="center-image-parallax" src="images/fulls/full/cs1.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs2.webp" />	
            <img class="center-image-parallax" src="images/fulls/full/cs3.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs4.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs5.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs6.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs7.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs8.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs9.webp" />`;

                document.querySelector('#center-image').style.cssText = `
                background: linear-gradient(to bottom,  #E50C11 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp6.webp");
                background-size: cover;
                background-attachment: fixed;
                background-position: top center;
                background-repeat: no-repeat;`;
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp6.webp') center no-repeat";

                projectarticle.scrollIntoView();
                break;
            case 7:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Kelantan Away Concept'
                document.querySelector('.project').innerHTML = 'Kelantan Away<br>Concept';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

                document.querySelector('.center-image-background').innerHTML = `
            <img class="center-image-parallax" src="images/fulls/full/cs1a.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs2a.webp" />	
            <img class="center-image-parallax" src="images/fulls/full/cs3a.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs4a.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs5a.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs6a.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs7a.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs8a.webp" />
            <img class="center-image-parallax" src="images/fulls/full/cs9a.webp" />`;

                document.querySelector('#center-image').style.cssText = `
                background: linear-gradient(to bottom,  #D1B31D 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp7.webp");
                background-size: cover;
                background-attachment: fixed;
                background-position: top center;
                background-repeat: no-repeat;`;
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp7.webp') top no-repeat";

                projectarticle.scrollIntoView();
                break;
            case 8:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Sri Pahang X Voltra'
                document.querySelector('.project').innerHTML = 'Sri Pahang<br>X Voltra';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

                document.querySelector('.center-image-background').innerHTML = `
            <img class="center-image-parallax" src="images/fulls/full/sxv1.webp" />
            <img class="center-image-parallax" src="images/fulls/full/sxv2.webp" />	
            <img class="center-image-parallax" src="images/fulls/full/sxv3.webp" />
            <img class="center-image-parallax" src="images/fulls/full/sxv4.webp" />
            <img class="center-image-parallax" src="images/fulls/full/sxv5.webp" />
            <img class="center-image-parallax" src="images/fulls/full/sxv6.webp" />
            <img class="center-image-parallax" src="images/fulls/full/sxv7.webp" />
            <img class="center-image-parallax" src="images/fulls/full/sxv8.webp" />
            <img class="center-image-parallax" src="images/fulls/full/sxv9.webp" />`;

                document.querySelector('#center-image').style.cssText = `
                background: linear-gradient(to bottom,  #FFD700 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp8.webp");
                background-size: cover;
                background-attachment: fixed;
                background-position: top center;
                background-repeat: no-repeat;`;
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp8.webp') center no-repeat";

                projectarticle.scrollIntoView();
                break;
            case 9:
                $('#pdisplay').removeClass('hidden');

                document.querySelector('#header h1').innerHTML = 'Futuristic Sword Concept'
                document.querySelector('.project').innerHTML = 'Futuristic <br>Sword Concept';
                document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
                document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

                document.querySelector('.center-image-background').innerHTML = `
            <img class="center-image-parallax" src="images/fulls/full/rn1.webp" />
            <img class="center-image-parallax" src="images/fulls/full/rn2.webp" />	
            <img class="center-image-parallax" src="images/fulls/full/rn3.webp" />
            <img class="center-image-parallax" src="images/fulls/full/rn4.webp" />
            <img class="center-image-parallax" src="images/fulls/full/rn5.webp" />`;

                document.querySelector('#center-image').style.cssText = `
                background: linear-gradient(to bottom,  #FA8072 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp9.webp");
                background-size: cover;
                background-attachment: fixed;
                background-position: top center;
                background-repeat: no-repeat;`;
                document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp9.webp') center no-repeat";

                projectarticle.scrollIntoView();
                break;
        }
    });

    // Header news like hero
    let mainPosts = document.querySelectorAll(".main-post");
    let posts = document.querySelectorAll(".post");

    let i = 0;
    let postIndex = 0;
    let currentPost = posts[postIndex];
    let currentMainPost = mainPosts[postIndex];

    let progressInterval = setInterval(progress, 100); // 180

    function progress() {
        if (i === 100) {
            i = -5;
            // reset progress bar
            currentPost.querySelector(".progress-bar__fill").style.width = 0;
            document.querySelector(
                ".progress-bar--primary .progress-bar__fill"
            ).style.width = 0;
            currentPost.classList.remove("post--active");

            postIndex++;

            currentMainPost.classList.add("main-post--not-active");
            currentMainPost.classList.remove("main-post--active");

            // reset postIndex to loop over the slides again
            if (postIndex === posts.length) {
                postIndex = 0;
            }

            currentPost = posts[postIndex];
            currentMainPost = mainPosts[postIndex];
        } else {
            i++;
            currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
            document.querySelector(
                ".progress-bar--primary .progress-bar__fill"
            ).style.width = `${i}%`;
            currentPost.classList.add("post--active");

            currentMainPost.classList.add("main-post--active");
            currentMainPost.classList.remove("main-post--not-active");
        }
    }

    // Carousel Bottom Select Project
    (() => {
        // Respect user perference
        const isReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
      
        // Helper to apply inline CSS
        const setStyleProps = ($el, styles) => {
          for (const [key, value] of Object.entries(styles)) {
            if (value === false) {
              $el.style.removeProperty(key);
            } else {
              $el.style.setProperty(key, value);
            }
          }
        };
      
        document.querySelectorAll('.Carousel').forEach(($carousel) => {
          $carousel.scrollLeft = 0;
      
          const $cards = Array.from($carousel.querySelectorAll('.Card'));
          const $pagination = $carousel.nextElementSibling;
          const [$previous, $next] = $pagination.querySelectorAll('.Arrow');
          $pagination.querySelector('.Dot').classList.add('Dot--active');
      
          const $start = document.createElement('div');
          const $end = document.createElement('div');
          $carousel.prepend($start);
          $carousel.append($end);
      
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.target === $start) {
                if ($previous) {
                  $previous.disabled = entry.isIntersecting;
                }
              }
              if (entry.target === $end) {
                if ($next) {
                  $next.disabled = entry.isIntersecting;
                }
              }
            });
          });
          observer.observe($start);
          observer.observe($end);
      
          const scrollTo = ($card) => {
            let offset = getOffset($card);
            const left = document.dir === 'rtl' ? -offset : offset;
            const behavior = isReducedMotion ? 'auto' : 'smooth';
            $carousel.scrollTo({left, behavior});
          };
      
          const getOffset = ($el) => {
            let offset = $el.offsetLeft;
            if (document.dir === 'rtl') {
              offset = $carousel.offsetWidth - (offset + $el.offsetWidth);
            }
            return offset;
          };
      
          $previous.addEventListener('click', (ev) => {
            ev.preventDefault();
            let $card = $cards[0];
            const scroll = Math.abs($carousel.scrollLeft);
            $cards.forEach(($item) => {
              const offset = getOffset($item);
              if (offset - scroll < -1 && offset > getOffset($card)) {
                $card = $item;
              }
            });
            scrollTo($card);
          });
      
          $next.addEventListener('click', (ev) => {
            ev.preventDefault();
            let $card = $cards[$cards.length - 1];
            const scroll = Math.abs($carousel.scrollLeft);
            $cards.forEach(($item) => {
              const offset = getOffset($item);
              if (offset - scroll > 1 && offset < getOffset($card)) {
                $card = $item;
              }
            });
            scrollTo($card);
          });
      
          $pagination.addEventListener('click', (ev) => {
            if (ev.target.classList.contains('Dot')) {
              ev.preventDefault();
              const $card = document.querySelector(new URL(ev.target.href).hash);
              if ($card) scrollTo($card);
            }
          });
      
          // Highlight nearest "Dot" in pagination
          let scrollTimeout;
          $carousel.addEventListener(
            'scroll',
            () => {
              clearTimeout(scrollTimeout);
              scrollTimeout = setTimeout(() => {
                let $dot = $pagination.querySelector('.Dot--active');
                if ($dot) $dot.classList.remove('Dot--active');
                let $active;
                const scroll = Math.abs($carousel.scrollLeft);
                if (scroll <= 0) {
                  $active = $cards[0];
                }
                if (scroll >= $carousel.scrollWidth - $carousel.offsetWidth) {
                  $active = $cards[$cards.length - 1];
                }
                if (!$active) {
                  let oldDiff;
                  $cards.forEach(($card) => {
                    const newDiff = Math.abs(scroll - getOffset($card));
                    if (!$active || newDiff < oldDiff) {
                      $active = $card;
                      oldDiff = newDiff;
                    }
                  });
                }
                $dot = $pagination.querySelector(
                  `[href="#${($active ?? $card[0]).id}"]`
                );
                if ($dot) $dot.classList.add('Dot--active');
              }, 50);
            },
            {passive: true}
          );
      
          // Improve arrow key navigation
          $carousel.addEventListener('keydown', (ev) => {
            if (/^(Arrow)?Left$/.test(ev.key)) {
              ev.preventDefault();
              (document.dir === 'rtl' ? $next : $previous).click();
            } else if (/(Arrow)?Right$/.test(ev.key)) {
              ev.preventDefault();
              (document.dir === 'rtl' ? $previous : $next).click();
            }
          });
      
          // Improve transition when tabbing focus
      
          let scrollLeft = 0;
          $carousel.addEventListener(
            'blur',
            (ev) => {
              scrollLeft = $carousel.scrollLeft;
            },
            {capture: true}
          );
          $carousel.addEventListener(
            'focus',
            (ev) => {
              $carousel.scrollLeft = scrollLeft;
              const $card = ev.target.closest('.Card');
              if ($card) scrollTo($card);
            },
            {capture: true}
          );
        });
      
        // Optional polyfill for Safari 14
        if (!isReducedMotion && !window.CSS.supports('scroll-behavior: smooth')) {
          import('https://cdn.skypack.dev/smoothscroll-polyfill').then((module) => {
            module.polyfill();
          });
        }
      })();
      
      (() => {
        // Toggle right-to-left for demo
        document.querySelector('#toggle-rtl').addEventListener('change', (ev) => {
          document.dir = ev.target.checked ? 'rtl' : 'ltr';
          document.querySelectorAll('.Carousel').forEach(($carousel) => {
            $carousel.scrollLeft = 0;
          });
        });
      
        // Toggle single slides class for demo
        document.querySelector('#toggle-single').addEventListener('change', (ev) => {
          document.querySelectorAll('.Carousel').forEach(($carousel) => {
            $carousel.classList.toggle('Carousel--single', ev.target.checked);
          });
        });
      })();

})(jQuery);
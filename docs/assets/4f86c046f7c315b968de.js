function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function ($) {
  //  Disable Mobile Experiences
  function isMobile() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }

  // -----------------------------------------

  // Draw new canvas and images
  function canvasfpro(gic, gifn) {
    for (var _i = 0; _i < gic; _i++) {
      var pfigure = document.createElement("figure");
      var pimg = document.createElement("img");
      var pfigc = document.createElement("figcaption");
      document.querySelector('.gallery').appendChild(pfigure);
      pfigure.className = "gallery-image";
      pfigure.appendChild(pimg);
      pfigure.appendChild(pfigc);
      pimg.src = "images/fulls/full/" + gifn + (_i + 1) + ".webp";
      pfigc.innerHTML = _i + 1;
    }
  }

  // Remove Child and reset canvas
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // Replace carousel to grid images
  $('.Card__link').on('click', function () {
    var caroldata = $(this).data("pcarou");
    var gal = document.querySelector('.gallery');
    removeAllChildNodes(gal);
    switch (caroldata) {
      case 1:
        document.querySelector('#p-title').innerHTML = "Johor Darul Ta'zim Concept Jersey";
        canvasfpro(9, "st");
        break;
      case 2:
        document.querySelector('#p-title').innerHTML = "Istinggar";
        canvasfpro(7, "ic");
        break;
      case 3:
        document.querySelector('#p-title').innerHTML = "Aerophantom Earbud";
        canvasfpro(4, "ae");
        break;
      case 4:
        document.querySelector('#p-title').innerHTML = "Nordic Axe";
        canvasfpro(6, "na");
        break;
      case 5:
        document.querySelector('#p-title').innerHTML = "Harimau Malaya Jersey Concept";
        canvasfpro(7, "hm");
        break;
      case 6:
        document.querySelector('#p-title').innerHTML = "Kelantan Home Jersey Concept";
        canvasfpro(9, "cs");
        break;
      case 7:
        document.querySelector('#p-title').innerHTML = "Kelantan Away Jersey Concept";
        canvasfpro(9, "csa");
        break;
      case 8:
        document.querySelector('#p-title').innerHTML = "Twin Fangs Sword";
        canvasfpro(5, "rn");
        break;
    }
    startcanvas();
    $('#app').removeClass("Hidden");
  });

  //Image Grid
  function startcanvas() {
    var elApp = document.querySelector("#app");
    var elImages = Array.from(document.querySelectorAll(".gallery-image"));
    var elDetail = document.querySelector(".detail");
    function flipImages(firstEl, lastEl, change) {
      var firstRect = firstEl.getBoundingClientRect();
      var lastRect = lastEl.getBoundingClientRect();
      var deltaX = firstRect.left - lastRect.left;
      var deltaY = firstRect.top - lastRect.top;
      var deltaW = firstRect.width / lastRect.width;
      var deltaH = firstRect.height / lastRect.height;
      change();
      lastEl.parentElement.dataset.flipping = true;
      var animation = lastEl.animate([{
        transform: "translateX(".concat(deltaX, "px) translateY(").concat(deltaY, "px) scaleX(").concat(deltaW, ") scaleY(").concat(deltaH, ")")
      }, {
        transform: 'none'
      }], {
        duration: 600,
        // milliseconds
        easing: 'cubic-bezier(.2, 0, .3, 1)'
      });
      animation.onfinish = function () {
        delete lastEl.parentElement.dataset.flipping;
      };
    }
    elImages.forEach(function (figure) {
      figure.addEventListener("click", function () {
        var elImage = figure.querySelector('img');
        elDetail.innerHTML = "";
        var elClone = figure.cloneNode(true);
        elDetail.appendChild(elClone);
        var elCloneImage = elClone.querySelector('img');
        flipImages(elImage, elCloneImage, function () {
          elApp.dataset.state = "detail";
        });
        function revert() {
          flipImages(elCloneImage, elImage, function () {
            elApp.dataset.state = "gallery";
            elDetail.removeEventListener('click', revert);
          });
        }
        elDetail.addEventListener('click', revert);
      });
    });
  }
  ;

  // Header news like hero
  var mainPosts = document.querySelectorAll(".main-post");
  var posts = document.querySelectorAll(".post");
  var i = 0;
  var postIndex = 0;
  var currentPost = posts[postIndex];
  var currentMainPost = mainPosts[postIndex];
  var progressInterval = setInterval(progress, 100); // 180

  function progress() {
    if (i === 100) {
      i = -5;
      // reset progress bar
      currentPost.querySelector(".progress-bar__fill").style.width = 0;
      document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = 0;
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
      currentPost.querySelector(".progress-bar__fill").style.width = "".concat(i, "%");
      document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = "".concat(i, "%");
      currentPost.classList.add("post--active");
      currentMainPost.classList.add("main-post--active");
      currentMainPost.classList.remove("main-post--not-active");
    }
  }

  // Carousel Bottom Select Project
  (function () {
    // Respect user perference
    var isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Helper to apply inline CSS
    var setStyleProps = function setStyleProps($el, styles) {
      for (var _i2 = 0, _Object$entries = Object.entries(styles); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value === false) {
          $el.style.removeProperty(key);
        } else {
          $el.style.setProperty(key, value);
        }
      }
    };
    document.querySelectorAll('.Carousel').forEach(function ($carousel) {
      $carousel.scrollLeft = 0;
      var $cards = Array.from($carousel.querySelectorAll('.Card'));
      var $pagination = $carousel.nextElementSibling;
      var _$pagination$querySel = $pagination.querySelectorAll('.Arrow'),
        _$pagination$querySel2 = _slicedToArray(_$pagination$querySel, 2),
        $previous = _$pagination$querySel2[0],
        $next = _$pagination$querySel2[1];
      $pagination.querySelector('.Dot').classList.add('Dot--active');
      var $start = document.createElement('div');
      var $end = document.createElement('div');
      $carousel.prepend($start);
      $carousel.append($end);
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
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
      var scrollTo = function scrollTo($card) {
        var offset = getOffset($card);
        var left = document.dir === 'rtl' ? -offset : offset;
        var behavior = isReducedMotion ? 'auto' : 'smooth';
        $carousel.scrollTo({
          left: left,
          behavior: behavior
        });
      };
      var getOffset = function getOffset($el) {
        var offset = $el.offsetLeft;
        if (document.dir === 'rtl') {
          offset = $carousel.offsetWidth - (offset + $el.offsetWidth);
        }
        return offset;
      };
      $previous.addEventListener('click', function (ev) {
        ev.preventDefault();
        var $card = $cards[0];
        var scroll = Math.abs($carousel.scrollLeft);
        $cards.forEach(function ($item) {
          var offset = getOffset($item);
          if (offset - scroll < -1 && offset > getOffset($card)) {
            $card = $item;
          }
        });
        scrollTo($card);
      });
      $next.addEventListener('click', function (ev) {
        ev.preventDefault();
        var $card = $cards[$cards.length - 1];
        var scroll = Math.abs($carousel.scrollLeft);
        $cards.forEach(function ($item) {
          var offset = getOffset($item);
          if (offset - scroll > 1 && offset < getOffset($card)) {
            $card = $item;
          }
        });
        scrollTo($card);
      });
      $pagination.addEventListener('click', function (ev) {
        if (ev.target.classList.contains('Dot')) {
          ev.preventDefault();
          var _$card = document.querySelector(new URL(ev.target.href).hash);
          if (_$card) scrollTo(_$card);
        }
      });

      // Highlight nearest "Dot" in pagination
      var scrollTimeout;
      $carousel.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
          var _$active;
          var $dot = $pagination.querySelector('.Dot--active');
          if ($dot) $dot.classList.remove('Dot--active');
          var $active;
          var scroll = Math.abs($carousel.scrollLeft);
          if (scroll <= 0) {
            $active = $cards[0];
          }
          if (scroll >= $carousel.scrollWidth - $carousel.offsetWidth) {
            $active = $cards[$cards.length - 1];
          }
          if (!$active) {
            var oldDiff;
            $cards.forEach(function ($card) {
              var newDiff = Math.abs(scroll - getOffset($card));
              if (!$active || newDiff < oldDiff) {
                $active = $card;
                oldDiff = newDiff;
              }
            });
          }
          $dot = $pagination.querySelector("[href=\"#".concat(((_$active = $active) !== null && _$active !== void 0 ? _$active : $card[0]).id, "\"]"));
          if ($dot) $dot.classList.add('Dot--active');
        }, 50);
      }, {
        passive: true
      });

      // Improve arrow key navigation
      $carousel.addEventListener('keydown', function (ev) {
        if (/^(Arrow)?Left$/.test(ev.key)) {
          ev.preventDefault();
          (document.dir === 'rtl' ? $next : $previous).click();
        } else if (/(Arrow)?Right$/.test(ev.key)) {
          ev.preventDefault();
          (document.dir === 'rtl' ? $previous : $next).click();
        }
      });

      // Improve transition when tabbing focus

      var scrollLeft = 0;
      $carousel.addEventListener('blur', function (ev) {
        scrollLeft = $carousel.scrollLeft;
      }, {
        capture: true
      });
      $carousel.addEventListener('focus', function (ev) {
        $carousel.scrollLeft = scrollLeft;
        var $card = ev.target.closest('.Card');
        if ($card) scrollTo($card);
      }, {
        capture: true
      });
    });
  })();

  // // Optional polyfill for Safari 14
  // if (!isReducedMotion && !window.CSS.supports('scroll-behavior: smooth')) {
  //   import('https://cdn.skypack.dev/smoothscroll-polyfill').then((module) => {
  //     module.polyfill();
  //   });
  // }

  // (() => {
  //   // Toggle right-to-left for demo
  //   document.querySelector('#toggle-rtl').addEventListener('change', (ev) => {
  //     document.dir = ev.target.checked ? 'rtl' : 'ltr';
  //     document.querySelectorAll('.Carousel').forEach(($carousel) => {
  //       $carousel.scrollLeft = 0;
  //     });
  //   });

  //   // Toggle single slides class for demo
  //   document.querySelector('#toggle-single').addEventListener('change', (ev) => {
  //     document.querySelectorAll('.Carousel').forEach(($carousel) => {
  //       $carousel.classList.toggle('Carousel--single', ev.target.checked);
  //     });
  //   });
  // })();
})(jQuery);
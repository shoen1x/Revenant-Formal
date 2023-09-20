/******/ (() => { // webpackBootstrap
/******/ 	/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//	Revenant Formal by NMVX
//	shoenix-studios.web.app | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {
  //  Disable Mobile Experiences
  function isMobile() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
  var $window = $(window),
    $body = $('body'),
    $header = $('#header'),
    $all = $body.add($header);

  // animasi putar2
  $window.on('load', function () {
    setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // -----------------------------------------

  // Ambik sekut ikut 'home'
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var _i = 0; _i < ca.length; _i++) {
      var c = ca[_i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  var lang_injection = getCookie("firebase-language-override");
  var gal = document.querySelector('.gallery');
  var carol_title = document.querySelector('#p-title');
  var db;
  function fetchDB() {
    return _fetchDB.apply(this, arguments);
  }
  function _fetchDB() {
    _fetchDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!db) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", Promise.resolve(db));
          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch("https://shoenix-studios.web.app/databank.json");
          case 5:
            response = _context.sent;
            db = response.json();
            _context.next = 9;
            return db;
          case 9:
            return _context.abrupt("return", _context.sent);
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", console.log(_context.t0));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 12]]);
    }));
    return _fetchDB.apply(this, arguments);
  }
  function loadImage(imageUrl, onprogress) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var notifiedNotComputable = false;
      var total;
      xhr.open('GET', imageUrl, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function (ev) {
        if (ev.lengthComputable) {
          onprogress(parseInt(ev.loaded / ev.total * 100));
        } else {
          if (!notifiedNotComputable) {
            notifiedNotComputable = true;
            onprogress(-1);
          }
        }
      };
      xhr.onloadend = function () {
        if (!xhr.status.toString().match(/^2/)) {
          reject(xhr);
        } else {
          if (!notifiedNotComputable) {
            onprogress(100);
          }
          var options = {};
          var headers = xhr.getAllResponseHeaders();
          var m = headers.match(/^Content-Type\:\s*(.*?)$/mi);
          if (m && m[1]) {
            options.type = m[1];
          }
          var blob = new Blob([this.response], options);
          resolve(window.URL.createObjectURL(blob));
        }
      };
      xhr.send();
    });
  }
  function canvasfpro(_x) {
    return _canvasfpro.apply(this, arguments);
  }
  function _canvasfpro() {
    _canvasfpro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(caroldata) {
      var datajson, gic, gifn, barstatus, gallery, _loop, width, _i2;
      return _regeneratorRuntime().wrap(function _callee2$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetchDB();
          case 2:
            datajson = _context3.sent;
            gic = datajson.projects[caroldata - 1].project_num_list;
            gifn = datajson.projects[caroldata - 1].project_tagged;
            barstatus = document.querySelector("#barStatus");
            if (lang_injection == 'en') {
              carol_title.innerHTML = DOMPurify.sanitize(datajson.projects[caroldata - 1].language.en);
            } else if (lang_injection == 'ms') {
              carol_title.innerHTML = DOMPurify.sanitize(datajson.projects[caroldata - 1].language.ms);
            }
            gallery = document.querySelector('.gallery');
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(_i2) {
              var pfigure, pfigc;
              return _regeneratorRuntime().wrap(function _loop$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    pfigure = document.createElement("figure");
                    pfigc = document.createElement("figcaption");
                    width = 100 / gic;
                    gallery.appendChild(pfigure);
                    pfigure.className = "gallery-image skeleton";
                    pfigc.innerHTML = DOMPurify.sanitize(_i2 + 1);
                    loadImage("https://shoenix-studios.web.app/global/assets/images/".concat(gifn).concat(_i2 + 1, ".webp"), function (ratio) {
                      if (ratio == -1) {
                        console.log("ratio -1");
                      }
                    }).then(function (imgSrc) {
                      var pimg = document.createElement("img");
                      pimg.src = imgSrc;
                      pfigure.appendChild(pimg);
                      pfigure.classList.remove("skeleton");
                      barstatus.style.width = width + "%";
                      width = width + 100 / gic;
                      if (_i2 == gic - 1) {
                        document.querySelector('.project-header').classList.remove("Hidden");
                        document.querySelector('#app').scrollIntoView();
                        $(".backtotop-button").addClass("show");
                      }
                    }, function (xhr) {
                      console.log("Script error");
                    });
                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _loop);
            });
            _i2 = 0;
          case 10:
            if (!(_i2 < gic)) {
              _context3.next = 15;
              break;
            }
            return _context3.delegateYield(_loop(_i2), "t0", 12);
          case 12:
            _i2++;
            _context3.next = 10;
            break;
          case 15:
            ;
            startcanvas();
            setTimeout(function rmvstatus() {
              barstatus.style.width = "0%";
            }, 6000);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee2);
    }));
    return _canvasfpro.apply(this, arguments);
  }
  $(".backtotop-button").on('click', function (e) {
    e.preventDefault;
    this.classList.remove('show');
    removeAllChildNodes(gal);
    carol_title.innerHTML = DOMPurify.sanitize("");
    document.querySelector("#barStatus").style.width = "0%";
    $('#app').addClass("Hidden");
    $('html, body').animate(document.querySelector('.Carousel').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    }));
  });

  // Remove Child and reset canvas
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // Replace carousel to grid images
  $('.Card__link').on('click', function () {
    var caroldata = $(this).data("pcarou");
    removeAllChildNodes(gal);
    canvasfpro(caroldata);
    $('#app').removeClass("Hidden");
  });
  function startcanvas() {
    //Image Grid
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
        elDetail.innerHTML = DOMPurify.sanitize("");
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
  $('.page-previous').on('click', function () {
    var activeDot = document.querySelectorAll("[active]");
    var nextDot = activeDot[0].nextElementSibling ? activeDot[0].nextElementSibling : document.getElementById("list").firstElementChild;
    activeDot[0].removeAttribute("active");
    nextDot.setAttribute("active", "true");
    detectpagination();
  });
  $('.page-next').on('click', function () {
    var activeDot = document.querySelectorAll("[active]");
    var previousDot = activeDot[0].previousElementSibling ? activeDot[0].previousElementSibling : document.getElementById("list").lastElementChild;
    activeDot[0].removeAttribute("active");
    previousDot.setAttribute("active", "true");
    detectpagination();
  });
  var listdots = document.querySelectorAll("#list-dots");
  $(listdots).on('click', function () {
    var activeDot = document.querySelectorAll("[active]");
    activeDot[0].removeAttribute("active");
    var nextDot = this;
    activeDot[0].removeAttribute("active");
    nextDot.setAttribute("active", "true");
    detectpagination();
  });
  function detectpagination() {
    var page_dots = document.querySelectorAll('#list li');
    var carol1 = document.querySelector('#carousel1');
    var carol2 = document.querySelector('#carousel2');
    if (page_dots[0].hasAttribute('active')) {
      carol1.classList.remove('Hidden');
      carol2.classList.add('Hidden');
    } else if (page_dots[1].hasAttribute('active')) {
      carol2.classList.remove('Hidden');
      carol1.classList.add('Hidden');
    }
    $('html, body').animate(document.querySelector('.Carousel').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    }));
  }
})(jQuery);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
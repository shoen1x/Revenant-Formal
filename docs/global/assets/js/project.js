/******/ (() => { // webpackBootstrap
/******/ 	/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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

  // Video Carousel | Owl
  var videoSlider = $('.owl-carousel');
  videoSlider.owlCarousel({
    loop: true,
    merge: true,
    video: true,
    lazyLoad: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    autoHeight: true
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
  } // Image importer
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
  function loadImage(_x, _x2) {
    return _loadImage.apply(this, arguments);
  } // Draw new canvas and images
  function _loadImage() {
    _loadImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(imageUrl, imageAlt) {
      var img, imageLoadPromise;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            imageLoadPromise = new Promise(function (resolve) {
              img = new Image();
              img.onload = resolve;
              img.src = imageUrl;
              img.alt = imageAlt;
            });
            _context2.next = 3;
            return imageLoadPromise;
          case 3:
            return _context2.abrupt("return", img);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _loadImage.apply(this, arguments);
  }
  function canvasfpro(caroldata) {
    fetchDB().then(function (datajson) {
      var gic = datajson.projects[caroldata - 1].project_num_list;
      var gifn = datajson.projects[caroldata - 1].project_tagged;
      if (lang_injection == 'en') {
        carol_title.innerHTML = DOMPurify.sanitize(datajson.projects[caroldata - 1].language.en);
      } else if (lang_injection == 'ms') {
        carol_title.innerHTML = DOMPurify.sanitize(datajson.projects[caroldata - 1].language.ms);
      }
      var _loop = function _loop(_i2) {
        var pfigure = document.createElement("figure");
        // const pimg = document.createElement("img");
        var pfigc = document.createElement("figcaption");
        document.querySelector('.gallery').appendChild(pfigure);
        pfigure.className = "gallery-image skeleton";
        pfigc.innerHTML = DOMPurify.sanitize(_i2 + 1);
        loadImage(net_path + "/global/assets/images/" + gifn + (_i2 + 1) + ".webp", datajson.projects[caroldata - 1].project_tagged + (_i2 + 1)).then(function (images) {
          pfigure.appendChild(images);
          pfigure.appendChild(pfigc);
          pfigure.classList.remove("skeleton");
          if (_i2 == gic - 1) {
            document.getElementById('p-title').scrollIntoView();
          }
        });
        // pimg.onload = function () {
        //   pimg.setAttribute('src', this.src);
        //   pimg.setAttribute('alt', this.alt);
        //   pimg.setAttribute('width', this.width);
        //   pimg.setAttribute('height', this.height);
        //   pfigure.classList.remove("skeleton");
        //   pfigure.appendChild(pfigc);
        //   pfigc.innerHTML = DOMPurify.sanitize(i + 1);
        // };
        // pimg.src = net_path + "/global/assets/images/" + gifn + (i + 1) + ".webp";
        // pimg.alt = datajson.projects[caroldata - 1].project_tagged + (i + 1);

        // pimg.src = net_path + "/global/assets/images/" + gifn + (i + 1) + ".webp";
      };
      for (var _i2 = 0; _i2 < gic; _i2++) {
        _loop(_i2);
      }
      ;
      startcanvas();
    });
    var backtotop = document.createElement("a");
    backtotop.className = "backtotop-button";
    document.querySelector('.Main').appendChild(backtotop);
    var bttbtn = document.querySelector('.backtotop-button');
    bttbtn.classList.add('show');
    $(".backtotop-button").on('click', function (e) {
      e.preventDefault();
      bttbtn.classList.remove('show');
      removeAllChildNodes(gal);
      carol_title.innerHTML = DOMPurify.sanitize("");
      $('html, body').animate(document.querySelector('.Carousel').scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      }));
    });
  }
  ;

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
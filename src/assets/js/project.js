//	Revenant Formal by NMVX
//	shoenix-studios.web.app | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

  //  Disable Mobile Experiences
  function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)))
  }

    // Video Carousel | Owl
    var videoSlider = $('.owl-carousel');
    videoSlider.owlCarousel({
      loop: true,
      video:true,
      merge:true,
      margin: 10,
      lazyLoad: true,
      nav: true,
      dots: true,
      items: 1,
      center:true,  
    });

  // -----------------------------------------

    // Ambik sekut ikut 'home'
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    const lang_injection = getCookie("firebase-language-override");
    const gal = document.querySelector('.gallery');
    var carol_title = document.querySelector('#p-title');

    let db;
    async function fetchDB() {
      if (db) return Promise.resolve(db);
      try {
        const response = await fetch("/src/assets/js/databank.json");
        db = response.json();
        return await db;
      } catch (err) {
        return console.log(err);
      }
    }

  // Draw new canvas and images
  function canvasfpro(caroldata) {

    fetchDB().then(datajson => {
      const gic = datajson.projects[caroldata - 1].project_num_list;
      const gifn = datajson.projects[caroldata - 1].project_tagged;

      if(lang_injection == 'en'){
        carol_title.innerHTML = DOMPurify.sanitize(datajson.projects[caroldata - 1].language.en);
      }else if(lang_injection == 'ms'){
        carol_title.innerHTML = DOMPurify.sanitize(datajson.projects[caroldata - 1].language.ms);
      }

    for (let i = 0; i < gic; i++) {
      const pfigure = document.createElement("figure");
      const pimg = document.createElement("img");
      const pfigc = document.createElement("figcaption");

      document.querySelector('.gallery').appendChild(pfigure);
      pfigure.className = "gallery-image";

      pfigure.appendChild(pimg);
      pfigure.appendChild(pfigc);

      pimg.src = net_path + "/global/assets/images/" + gifn + (i + 1) + ".webp";
      pfigc.innerHTML = DOMPurify.sanitize(i + 1);
      document.getElementById('p-title').scrollIntoView();
    }
  });

  const backtotop = document.createElement("a");
  backtotop.className = "backtotop-button";
  document.querySelector('.Main').appendChild(backtotop);
  var bttbtn = document.querySelector('.backtotop-button');

  bttbtn.classList.add('show');

  $(".backtotop-button").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate(document.querySelector('.Carousel').scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }));
    bttbtn.classList.remove('show');
    removeAllChildNodes(gal)
    carol_title.remove();
  });

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
    removeAllChildNodes(gal);

    canvasfpro(caroldata);
    startcanvas();
    $('#app').removeClass("Hidden");
  });

  //Image Grid
  function startcanvas() {
    const elApp = document.querySelector("#app");

    const elImages = Array.from(document.querySelectorAll(".gallery-image"));

    const elDetail = document.querySelector(".detail");

    function flipImages(firstEl, lastEl, change) {
      const firstRect = firstEl.getBoundingClientRect();

      const lastRect = lastEl.getBoundingClientRect();

      const deltaX = firstRect.left - lastRect.left;
      const deltaY = firstRect.top - lastRect.top;
      const deltaW = firstRect.width / lastRect.width;
      const deltaH = firstRect.height / lastRect.height;

      change();
      lastEl.parentElement.dataset.flipping = true;

      const animation = lastEl.animate([
        {
          transform: `translateX(${deltaX}px) translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})`
        },
        {
          transform: 'none'
        }
      ], {
        duration: 600, // milliseconds
        easing: 'cubic-bezier(.2, 0, .3, 1)'
      });

      animation.onfinish = () => {
        delete lastEl.parentElement.dataset.flipping;
      }

    }

    elImages.forEach(figure => {

      figure.addEventListener("click", () => {
        const elImage = figure.querySelector('img');

        elDetail.innerHTML = DOMPurify.sanitize("");

        const elClone = figure.cloneNode(true);
        elDetail.appendChild(elClone);

        const elCloneImage = elClone.querySelector('img');

        flipImages(elImage, elCloneImage, () => {
          elApp.dataset.state = "detail";
        });

        function revert() {

          flipImages(elCloneImage, elImage, () => {
            elApp.dataset.state = "gallery";
            elDetail.removeEventListener('click', revert);
          });

        }

        elDetail.addEventListener('click', revert);

      });
    });
  };


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

  $('.page-previous').on('click', function() {
    const activeDot = document.querySelectorAll("[active]");
    let nextDot = activeDot[0].nextElementSibling
      ? activeDot[0].nextElementSibling
      : document.getElementById("list").firstElementChild;
  
    activeDot[0].removeAttribute("active");
    nextDot.setAttribute("active", "true");
    detectpagination();
  });
  
  $('.page-next').on('click', function() {
    const activeDot = document.querySelectorAll("[active]");
    let previousDot = activeDot[0].previousElementSibling
      ? activeDot[0].previousElementSibling
      : document.getElementById("list").lastElementChild;
  
    activeDot[0].removeAttribute("active");
    previousDot.setAttribute("active", "true");
    detectpagination();
  });

  const listdots = document.querySelectorAll("#list-dots");
  $(listdots).on('click', function(){
    const activeDot = document.querySelectorAll("[active]");
    activeDot[0].removeAttribute("active");
  
    const nextDot = this;
    activeDot[0].removeAttribute("active");
    nextDot.setAttribute("active", "true");
    detectpagination();
  });
  
  function detectpagination() {
    const page_dots = document.querySelectorAll('#list li');
    const carol1 = document.querySelector('#carousel1');
    const carol2 = document.querySelector('#carousel2');
  
    if(page_dots[0].hasAttribute('active')){
      carol1.classList.remove('Hidden');
      carol2.classList.add('Hidden');
    }else if(page_dots[1].hasAttribute('active')){
      carol2.classList.remove('Hidden');
      carol1.classList.add('Hidden');
    }
  }

})(jQuery);


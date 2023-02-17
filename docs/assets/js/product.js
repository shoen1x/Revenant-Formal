//	Revenant Formal by NMVX
//	Shoen1x.github.io | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

    const products = document.querySelectorAll(".product");
    const container = document.querySelector(".product-container");
    const nav = document.querySelector(".product-nav");
    const cover = document.querySelector(".product-cover");
    const productWidth = 310;
    const overlay = document.querySelector(".product__overlay");

    function getProductOffset() {
        return (container.offsetWidth - container.offsetWidth * 70 / 100) / 2;
    }

    function removeActiveClass() {
        const activeProduct = document.querySelector(".product--active");
        if (activeProduct) {
            activeProduct.scrollTop = 0;
            activeProduct.classList.remove("product--active");
            container.classList.remove("product-container--detail");
            cover.style.width = "500px";
        }
    }

    products.forEach(product => {
        product.addEventListener("click", e => {
            if (e.target.classList.contains("product__close")) {
                overlay.style.display = "none";
                removeActiveClass();
                return;
            }
            document.onkeydown = function (evt) {
                evt = evt || window.event;
                var isEscape = false;
                if ("key" in evt) {
                    isEscape = (evt.key === "Escape" || evt.key === "Esc");
                } else {
                    isEscape = (evt.keyCode === 27);
                }
                if (isEscape) {
                    overlay.style.display = "none";
                    removeActiveClass();
                    return;
                }
            };
            if (!e.currentTarget.classList.contains("product--active")) {
                overlay.style.display = "block";
                removeActiveClass();
                e.currentTarget.classList.add("product--active");
                container.classList.add("product-container--detail");

                e.currentTarget.scrollIntoView({ inline: "start" });
                cover.style.width = "0";

                const left =
                    productWidth * parseInt(e.currentTarget.getAttribute("data-index")) +
                    cover.offsetWidth +
                    parseInt(e.currentTarget.getAttribute("data-index")) * 6 +
                    nav.offsetWidth -
                    getProductOffset();

                container.scrollLeft = left;
                overlay.style.display = "none";
                if (
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent)) {
                    e.currentTarget.scrollIntoView({ inline: "start" });
                }
            }
        });
    });

    const slider = document.querySelector('.product-container');
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
        mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (!mouseDown) { return; }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);

    addEventListener("DOMContentLoaded", e => {
        var product_selection = localStorage.getItem("product_number");
        var url_selection = window.location.href.match(/\d+$/);
        if (product_selection && url_selection == null) {
            alert("Error");
            location.href = '/';
        } else {
            // localStorage.removeItem("product_number");
            if ((product_selection == 1) || (url_selection == 1)) {
                return;
            } else if ((product_selection == 2) || (url_selection == 2)) {

                document.querySelector('#header h1').innerHTML = 'Collection 1'
                document.querySelector('.product-nav__text').innerHTML = 'In The Name of Tsar Collection'
                document.querySelector('.product-cover').style.backgroundImage = 'url("images/products/product-tc.webp")';

                document.querySelectorAll('.product')[0].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection1/1.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE MONARCH</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection1/1-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">DIMENSION</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection1/1-1.webp" /><img src="images/products/collection1/1-2.webp" /><img
                    src="images/products/collection1/1-3.webp" /><img src="images/products/collection1/1-4.webp" /><img
                    src="images/products/collection1/1-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[1].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection1/2.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE BOS GAURUS</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection1/2-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection1/2-1.webp" /><img src="images/products/collection1/2-2.webp" /><img
                    src="images/products/collection1/2-3.webp" /><img src="images/products/collection1/2-4.webp" /><img
                    src="images/products/collection1/2-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[2].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection1/3.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE NIGHTMARE</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection1/3-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection1/3-1.webp" /><img src="images/products/collection1/3-2.webp" /><img
                    src="images/products/collection1/3-3.webp" /><img src="images/products/collection1/3-4.webp" /><img
                    src="images/products/collection1/3-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[3].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection1/4.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE</br>LEGION</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection1/4-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection1/4-1.webp" /><img src="images/products/collection1/4-2.webp" /><img
                    src="images/products/collection1/4-3.webp" /><img src="images/products/collection1/4-4.webp" /><img
                    src="images/products/collection1/4-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

            } else if ((product_selection == 3) || (url_selection == 3)) {

                document.querySelector('#header h1').innerHTML = 'Collection 2'
                document.querySelector('.product-nav__text').innerHTML = 'Black Steel Eagle Collection'
                document.querySelector('.product-cover').style.backgroundImage = 'url("images/products/product-bc.webp")';

                document.querySelectorAll('.product')[0].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection2/1.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE NEXUS</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection2/1-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">DIMENSION</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection2/1-1.webp" /><img src="images/products/collection2/1-2.webp" /><img
                    src="images/products/collection2/1-3.webp" /><img src="images/products/collection2/1-4.webp" /><img
                    src="images/products/collection2/1-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[1].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection2/2.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE PLEXUS</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection2/2-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection2/2-1.webp" /><img src="images/products/collection2/2-2.webp" /><img
                    src="images/products/collection2/2-3.webp" /><img src="images/products/collection2/2-4.webp" /><img
                    src="images/products/collection2/2-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[2].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection2/3.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE SCAR</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection2/3-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection2/3-1.webp" /><img src="images/products/collection2/3-2.webp" /><img
                    src="images/products/collection2/3-3.webp" /><img src="images/products/collection2/3-4.webp" /><img
                    src="images/products/collection2/3-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[3].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection2/4.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">THE NEMESIS</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection2/4-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection2/4-1.webp" /><img src="images/products/collection2/4-2.webp" /><img
                    src="images/products/collection2/4-3.webp" /><img src="images/products/collection2/4-4.webp" /><img
                    src="images/products/collection2/4-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

            } else if ((product_selection == 4) || (url_selection == 4)) {

                document.querySelector('#header h1').innerHTML = 'Collection 3'
                document.querySelector('.product-nav__text').innerHTML = 'The World Collection'
                document.querySelector('.product-cover').style.backgroundImage = 'url("images/products/product-tw.webp")';

                document.querySelectorAll('.product')[0].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection3/1.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">SAN MIRAGE</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection3/1-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">DIMENSION</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection3/1-1.webp" /><img src="images/products/collection3/1-2.webp" /><img
                    src="images/products/collection3/1-3.webp" /><img src="images/products/collection3/1-4.webp" /><img
                    src="images/products/collection3/1-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[1].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection3/2.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">AVARICE</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection3/2-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection3/2-1.webp" /><img src="images/products/collection3/2-2.webp" /><img
                    src="images/products/collection3/2-3.webp" /><img src="images/products/collection3/2-4.webp" /><img
                    src="images/products/collection3/2-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[2].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection3/3.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">CHAOS</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection3/3-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection3/3-1.webp" /><img src="images/products/collection3/3-2.webp" /><img
                    src="images/products/collection3/3-3.webp" /><img src="images/products/collection3/3-4.webp" /><img
                    src="images/products/collection3/3-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

                document.querySelectorAll('.product')[3].innerHTML =
                    `<div class="product__close">Close</div>
                <div class="product__new">NEW</div><img class="product__img" src="images/products/collection3/4.webp"/>
                <div class="product__brand">NULL</div>
                <div class="product__title">WRATH</div>
                <div class="product__price">RMNULL</div>
                <div class="product__buttons" style="--delay: 0.2s">
                  <div class="product__options">
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                    <button class="product__option">NULL</button>
                  </div>
                  <button class="product__option product__add">NULL</button>
                </div>
                <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                  veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                  laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                  aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
                <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                  repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                  deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                  excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                  class="product__detail-img" src="images/products/collection3/4-wallpaper.webp" />
                <div class="product__table">
                  <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                  <div class="product__table-row">
                    <div class="product__table-cell">Dimensions</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">FILE SIZE</div>
                    <div class="product__table-cell">Lorem ipsum dolor</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus.</div>
                  </div>
                  <div class="product__table-row">
                    <div class="product__table-cell">TYPE</div>
                    <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                      illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                  </div>

                  <div class="product__option">ALL SPECIFICATIONS</div>
                </div>
                <div class="product__grid">
                <img src="images/products/collection3/4-1.webp" /><img src="images/products/collection3/4-2.webp" /><img
                    src="images/products/collection3/4-3.webp" /><img src="images/products/collection3/4-4.webp" /><img
                    src="images/products/collection3/4-5.webp" />
                </div>
                <div class="product__detail">VIEW DETAILS</div>`;

            } else if ((product_selection == 5) || (url_selection == 5)) {
       
              document.querySelector('#header h1').innerHTML = 'Collection 4'
              document.querySelector('.product-nav__text').innerHTML = 'Unity Collection'
              document.querySelector('.product-cover').style.backgroundImage = 'url("images/products/product-uc.webp")';

              document.querySelectorAll('.product')[0].innerHTML =
                  `<div class="product__close">Close</div>
              <div class="product__new">NEW</div><img class="product__img" src="images/products/collection4/1.webp"/>
              <div class="product__brand">NULL</div>
              <div class="product__title">ALPHA</div>
              <div class="product__price">RMNULL</div>
              <div class="product__buttons" style="--delay: 0.2s">
                <div class="product__options">
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                </div>
                <button class="product__option product__add">NULL</button>
              </div>
              <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                class="product__detail-img" src="images/products/collection4/1-wallpaper.webp" />
              <div class="product__table">
                <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                <div class="product__table-row">
                  <div class="product__table-cell">DIMENSION</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">FILE SIZE</div>
                  <div class="product__table-cell">Lorem ipsum dolor</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TYPE</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                </div>

                <div class="product__option">ALL SPECIFICATIONS</div>
              </div>
              <div class="product__grid">
              <img src="images/products/collection4/1-1.webp" /><img src="images/products/collection4/1-2.webp" /><img
                  src="images/products/collection4/1-3.webp" /><img src="images/products/collection4/1-4.webp" /><img
                  src="images/products/collection4/1-5.webp" />
              </div>
              <div class="product__detail">VIEW DETAILS</div>`;

              document.querySelectorAll('.product')[1].innerHTML =
                  `<div class="product__close">Close</div>
              <div class="product__new">NEW</div><img class="product__img" src="images/products/collection4/2.webp"/>
              <div class="product__brand">NULL</div>
              <div class="product__title">BETA</div>
              <div class="product__price">RMNULL</div>
              <div class="product__buttons" style="--delay: 0.2s">
                <div class="product__options">
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                </div>
                <button class="product__option product__add">NULL</button>
              </div>
              <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                class="product__detail-img" src="images/products/collection4/2-wallpaper.webp" />
              <div class="product__table">
                <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                <div class="product__table-row">
                  <div class="product__table-cell">Dimensions</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">FILE SIZE</div>
                  <div class="product__table-cell">Lorem ipsum dolor</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TYPE</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                </div>

                <div class="product__option">ALL SPECIFICATIONS</div>
              </div>
              <div class="product__grid">
              <img src="images/products/collection4/2-1.webp" /><img src="images/products/collection4/2-2.webp" /><img
                  src="images/products/collection4/2-3.webp" /><img src="images/products/collection4/2-4.webp" /><img
                  src="images/products/collection4/2-5.webp" />
              </div>
              <div class="product__detail">VIEW DETAILS</div>`;

              document.querySelectorAll('.product')[2].innerHTML =
                  `<div class="product__close">Close</div>
              <div class="product__new">NEW</div><img class="product__img" src="images/products/collection4/3.webp"/>
              <div class="product__brand">NULL</div>
              <div class="product__title">CHARLIE</div>
              <div class="product__price">RMNULL</div>
              <div class="product__buttons" style="--delay: 0.2s">
                <div class="product__options">
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                </div>
                <button class="product__option product__add">NULL</button>
              </div>
              <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                class="product__detail-img" src="images/products/collection4/3-wallpaper.webp" />
              <div class="product__table">
                <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                <div class="product__table-row">
                  <div class="product__table-cell">Dimensions</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">FILE SIZE</div>
                  <div class="product__table-cell">Lorem ipsum dolor</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TYPE</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                </div>

                <div class="product__option">ALL SPECIFICATIONS</div>
              </div>
              <div class="product__grid">
              <img src="images/products/collection4/3-1.webp" /><img src="images/products/collection4/3-2.webp" /><img
                  src="images/products/collection4/3-3.webp" /><img src="images/products/collection4/3-4.webp" /><img
                  src="images/products/collection4/3-5.webp" />
              </div>
              <div class="product__detail">VIEW DETAILS</div>`;

              document.querySelectorAll('.product')[3].innerHTML =
                  `<div class="product__close">Close</div>
              <div class="product__new">NEW</div><img class="product__img" src="images/products/collection4/4.webp"/>
              <div class="product__brand">NULL</div>
              <div class="product__title">DELTA</div>
              <div class="product__price">RMNULL</div>
              <div class="product__buttons" style="--delay: 0.2s">
                <div class="product__options">
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                  <button class="product__option">NULL</button>
                </div>
                <button class="product__option product__add">NULL</button>
              </div>
              <div class="product__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error mollitia
                veritatis odio repudiandae. Suscipit dolorum sunt rem aspernatur saepe sint sequi aut quis. Doloribus neque
                laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.3s">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Id error mollitia veritatis odio repudiandae. Suscipit dolorum sunt rem
                aspernatur saepe sint sequi aut quis. Doloribus neque laborum fugiat officiis quae.</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.4s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div>
              <div class="product__subtitle product__subtitle--expanded" style="--delay: 0.5s">Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quod, quos? Nesciunt quibusdam corporis quo repellendus sequi. Molestiae
                repellendus ab vitae mollitia distinctio quod molestias quis, suscipit magni id ex in?Nostrum quibusdam, sunt
                deleniti vel sapiente modi tempore ea omnis non adipisci earum totam illo esse quo voluptatem dignissimos
                excepturi saepe! Minima vero consequatur eos laudantium deleniti architecto ducimus quia?</div><img
                class="product__detail-img" src="images/products/collection4/4-wallpaper.webp" />
              <div class="product__table">
                <div class="product__table-title">TECHNICAL SPECIFICATIONS</div>
                <div class="product__table-row">
                  <div class="product__table-cell">Dimensions</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia impedit maxime facere.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">FILE SIZE</div>
                  <div class="product__table-cell">Lorem ipsum dolor</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TEMPLATE</br>FORMAT</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus.</div>
                </div>
                <div class="product__table-row">
                  <div class="product__table-cell">TYPE</div>
                  <div class="product__table-cell">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio a
                    illo, earum, iste doloribus, quo id itaque veniam sapiente unde officia placeat non libero ducimus</div>
                </div>

                <div class="product__option">ALL SPECIFICATIONS</div>
              </div>
              <div class="product__grid">
              <img src="images/products/collection4/4-1.webp" /><img src="images/products/collection4/4-2.webp" /><img
                  src="images/products/collection4/4-3.webp" /><img src="images/products/collection4/4-4.webp" /><img
                  src="images/products/collection4/4-5.webp" />
              </div>
              <div class="product__detail">VIEW DETAILS</div>`;
     
            } else {
              alert('Error');
            }
        }
    });



})(jQuery);


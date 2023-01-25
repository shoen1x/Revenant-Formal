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

})(jQuery);

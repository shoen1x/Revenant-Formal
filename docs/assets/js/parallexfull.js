class ImageParallax extends HTMLElement{
    constructor(scrollElement = window) {
      super();
      
      this.ctn = document.createElement('div');
      this.ctn.classList.add('ip-ctn');
      
      let src = this.getAttribute('src');
      if (src != undefined) {
        this.img = document.createElement("img");
        this.img.src = src;
        this.ctn.appendChild(this.img);
      }
      
      while (this.firstChild) {
        this.ctn.appendChild(this.firstChild);
      }
      
      this.appendChild(this.ctn);
      
      this.offset = parseInt(this.getAttribute('sp'));
      
      if (this.offset > 0) {
        this.dir = -1;
        this.classList.add('front');
      } else {
        this.dir = 1;
        this.classList.add('back');
      }
  
      this.resize();
  
      scrollElement.addEventListener('scroll', () => {
        window.requestAnimationFrame( () => this.scroll() );
      });
      this.scroll();
    }
  
    resize() {
      this.ctn.style.height = 100 + Math.abs(this.offset) + '%';
      
      let bounding = this.getBoundingClientRect();
      
      this.top = bounding.top - window.scrollY - window.innerHeight;
      
      this.bottom = this.top + bounding.height + window.innerHeight;
      
      this.max = this.clientHeight * ( this.offset / 100);
      
    }
    
    mapRange(progress, minIn, maxIn, minOut, maxOut) {
          progress = (progress > maxIn) ? maxIn : progress;
          progress = (progress < minIn) ? minIn : progress;
          let res = minOut + (progress - minIn) * (maxOut - minOut) / (maxIn - minIn);
          return res;
      }
  
    scroll() {
      let tmp = this.mapRange(window.scrollY, this.top, this.bottom, 0, this.max);
      this.ctn.style.transform = 'translate3D(0, '+tmp+'px, 0) ';
    }
    
    
    static putStyle() {
      const eSheet = new CSSStyleSheet();
      eSheet.replaceSync(`
  image-parallax {
    position:relative;
    display:block;
    width:100%;
    height:fit-content;
    overflow:hidden;
  }
  image-parallax .ip-ctn {
    z-index:2;
    position:absolute;
    left:0;
    right:0;
    width:100%;
    
  }
  image-parallax.front .ip-ctn {
    bottom:0;
  }
  image-parallax.back .ip-ctn {
    top:0;
  }
  image-parallax img {
    display:block;
    object-fit:cover;
    object-position:center;
    height:100%;
    width:100%;
  }
      `);
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, eSheet];
    }
  }
  
  ImageParallax.putStyle();
  
  
  customElements.define('image-parallax', ImageParallax);
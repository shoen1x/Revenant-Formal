<a name="readme-top"></a>

<!-- Header -->
<h1 align="center"><strong>Revenant's Formal<strong></h1>
<div align="center">
    <p>2024 update: Revenant's Formal project was deprecated, replaced with
     <a href="https://github.com/shoen1x/Project-Revenant">Project Revenant</a>
     with better framework, UI/UX and script.
    </p>
    </br>
</div>

<!-- Build With -->
# Built With

### Frameworks

[![HTML 5][HTML5.html]][HTML5-url]
[![Javascript][Javascript.js]][Javascript-url]
[![Jquery][Jquery.js]][Jquery-url]
[![Firebase][Firebase.js]][Firebase-url]

### Plugins

[![Webpack][Webpack.js]][Webpack-url]
[![Slick][slick.js]][slick-url]

<br />

<!-- ROADMAP -->
# Roadmap

- ### Homepage

  - [x] Added favicon based `.ico`.
    - [x] Replaced favicon .ico with .svg+xml (Problematic with multiple .logos packages)
  - [x] Hero Images.
    - [x] Added new Shoenix's Assc system logos `(3)`.
  - [x] Parallax scrolling friendly background images.
  - [x] 3D Model preview.
    - [x] Disable interactive (Zoom, pitch, yaw, drag) to reduce GPU taxing and CPU overhead problems.
  - [x] [Jquery](https://jquery.com/) based poptrox gallery for new works display.
  - Game-card like images collection ***`Deprecated`***
    - Removed due to cluttered looking and performances issues
  - Dropdown menu ***`Deprecated`***
    - Re-sync with header and footer
  - Youtube section ***`Deprecated`***
    - Removed due to network and static website limitation
    - Resort to local stored video?.
  - Full project grid/carousel for multi images project (min 4 images) ***`Deprecated`***
  - [x] Collection/ Products card preview for product purchases, (See <a href="#product">Product</a> for more details).
    - [x] Redirect problematic solved.
  - [x] 'Experimental Project', new page replacing the project grid/carousel (See <a href="#project">Project</a> for more details).
  - [x] 'Developer Logs' for all new website version changes, (See <a href="#blog">Blog</a> for more details).

- ### Project

  - [x] Added new ***Project*** page
    - [x] News like project preview for Hero.
    - [x] Added carousel based selection.
      - [x] Fix the js instability for selection (too much card jump from one selection to another).
    - [x] Grid based full preview with initial focus on click.
      - [x] Fix problematic canvas display sizes for multiple ratio of display (`Problematic with (max-width: 480px) and (min-width: 408px)`).
    - [x] Grid based overhaul.
      - [x] Pagination added for more projects supports
      - [x] Loading progress bar for loading projects

- ### Product ***`Deprecated`*** **`Removed`**

  - [x] Added new ***Product*** page
    - [x] 4 Different `Collection` Based product.
    - [x] Redesign overview for product, technical specs, and documentation.
    - [x] Added new hotspot based garment inspection for more elaborate explanation about the interchangeability in product.
      - [x] Fixed canvas overflows.
    - [x] Added new product select card information with custom logo.
    - [ ] Added guides for templates.
    - [ ] New payment gateway
      - [ ] New custom inquery/ Order system in last section for `Product` page?
  - [x] 20 SEPTEMBER 2023 ***Product*** page was removed.

- ### Blog

  - [x] Blog page for documentation and versioning purposes.
    - [x] Simplified version, not tally to main website design.
    - [x] JSON Reacted versioning.
    - [x] Adjusted all UI from paragraph to canonical based articel

- ### Header and Footer

  - [x] Total revamped footer and header with more modern looking design.
    - [x] Added new breadcrumb likes for navigation display
    - [x] Fixed all hyperlinks `(<a>)` problems for web crawlers.
  - [x] Imported custom font.
    - Multi custom fonts? ***`Deprecated`***.
    - Change from futura to montserrat font family.

- ### Optimizations

  - [X] CSS Cleanup
    - [x] SASS/SCSS base, components, layout, libs cleanup
    - [ ] SASS/SCSS implementation fix later for more usable ***`Will change in future`***
  - [x] Javascript
    - [x] All js files cleanup
      - [x] Re-unified all redundances and extra codes into single unit, Minified using Babel in webpack.
    - Embed (youtube.com) js network problem removed ***`Permanent Removed`***
  - [x] Assets & images
    - [X] Assets converted to webp for modern format.
    - [X] Optimized thumbs for better resolution and size for multiple display ratio.
  - Single page or new paging file?

- ### Ads banner (Pre-alpha version) ***`Deprecated`***

  - Reintroduced in later version with better images, sizes control using Slick Carousel plugin implemented.

- ### Marquee Logos for 'service used by' (Pre-alpha version) ***`Deprecated`***

  - Reintroduced in later version with better images, sizes control using Slick Carousel plugin implemented.

<!-- Authors & Support -->
# Credit

NMVX | Shoenix Studios <kbd>shoenixstudios@gmail.com</kbd>

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Jquery.js]: https://img.shields.io/badge/JQUERY-20232A?style=for-the-badge&logo=jquery&logoColor=61DAFB
[Jquery-url]: https://jquery.com/
[HTML5.html]: https://img.shields.io/badge/HTML5-20232A?style=for-the-badge&logo=html5&logoColor=61DAFB
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[Javascript.js]: https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript&logoColor=61DAFB
[Javascript-url]: https://www.oracle.com/java/technologies
[Webpack.js]: https://img.shields.io/badge/Webpack-20232A?style=for-the-badge&logo=webpack&logoColor=61DAFB
[Webpack-url]: https://webpack.js.org/
[Firebase.js]: https://img.shields.io/badge/Firebase-20232A?style=for-the-badge&logo=firebase&logoColor=61DAFB
[Firebase-url]: https://firebase.google.com/
[slick.js]: https://img.shields.io/badge/Slick-20232A?style=for-the-badge&logo=dev.to&logoColor=61DAFB
[slick-url]: https://kenwheeler.github.io/slick/

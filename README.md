<!--
	Revenant Formal by NMVX
	Shoen1x.github.io | @Shoenixstudios
	under the CCA 3.0 License | Credit to HTML5 UP for template
-->

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    * {
        font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
    }
</style>

<a name="readme-top"></a>

<!-- Header -->
<h1 align="center"><strong>Revenant's Formal<strong></h1>
<div align="center">
    <img src="https://shoenix-studios.web.app/global/assets/images/revenant-formal-header.webp" width="100%" style="border-radius: 18px;" alt="Revenant Formal"></img>
    <h2>A experimental project by <strong>NMVX</strong></h2>
    <a href="https://shoenix-studios.web.app/home"><strong>Quick access!</strong></a>
    </br>
</div>

<!-- Contents -->
<div align="center">
    <details>
    <summary>Contents</summary>
        <ol style="list-style-type: none;margin: 0;padding: 0;">
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#license">License</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#acknowledgements">Acknowledgments</a></li>
        </ol>
    </details>
</div>
</br>

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

- ### Product

  - [x] Added new ***Product*** page
    - [x] 4 Different `Collection` Based product.
    - [x] Redesign overview for product, technical specs, and documentation.
    - [x] Added new hotspot based garment inspection for more elaborate explanation about the interchangeability in product.
      - [x] Fixed canvas overflows.
    - [x] Added new product select card information with custom logo.
    - [ ] Added guides for templates.
    - [ ] New payment gateway
      - [ ] New custom inquery/ Order system in last section for `Product` page?

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

- ### License generated

- ### NPM reoptimized

  - [x] Added all new following packages for major version (Build) changes;-

     ```javascript
        "devDependencies": {
            "@babel/core": "^7.21.3",
            "@babel/preset-env": "^7.20.2",
            "assets-webpack-plugin": "^7.1.1",
            "babel-loader": "^9.1.2",
            "clean-webpack-plugin": "^4.0.0",
            "css-loader": "^6.7.3",
            "css-minimizer-webpack-plugin": "^5.0.0",
            "cssnano": "^6.0.1",
            "html-loader": "^4.2.0",
            "html-webpack-injector": "^1.1.4",
            "html-webpack-plugin": "^5.5.0",
            "mini-css-extract-plugin": "^2.7.6",
            "postcss": "^8.4.23",
            "postcss-loader": "^7.3.0",
            "webpack": "^5.76.1",
            "webpack-assets-manifest": "^5.1.0",
            "webpack-cli": "^5.0.1",
            "webpack-subresource-integrity": "^5.2.0-rc.1"
        }
    ```

- ### ***`Webpack implemented`***

```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "set NODE_ENV=development&& webpack --mode development",
    "dev:watch": "set NODE_ENV=development&& webpack --mode development --watch",
    "build": "set NODE_ENV=production&& webpack --mode production",
    "prod": "npm run build",
    "start": "set NODE_ENV=development&& webpack-dev-server --mode development --open",
    "watch": "npm run dev:watch",
    "lint": "eslint assets/scripts/*.js",
    "clean": "rm -rf docs"
  }
```
</br>

<!-- Contributing -->
# Contributing


If you have a suggestion that would make this website better, please [open issues](https://github.com/shoen1x/Revenant-Formal/issues). You can also simply open an issue with the tag "enhancement".

1. Identify the problem or suggestions
2. Create your new [issues](https://github.com/shoen1x/Revenant-Formal/issues)
3. Submit

</br>

<!-- License -->
# License

Distributed under the 'CC0 1.0 Universal' License. See `LICENSE.txt` or [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) for more information.

</br>

<!-- Authors & Support -->
# Support

> [NMVX](https://www.github.com/shoen1x)

For support, email <kbd>shoenixstudios@gmail.com</kbd>

</br>

<!-- Ackdnowledgements -->
# Acknowledgements

### [<strong>html5up</strong>](https://html5up.net/) for base template

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

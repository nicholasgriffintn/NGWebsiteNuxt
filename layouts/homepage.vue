<template>
  <div>
    <nuxt/>
    <div class="cookies js-cookie-message" hidden>
      <div class="cookies__box">
        <p>
          <strong>
            Another 🍪
            notification.
          </strong>
          <br>Sorry to bug you, I know these are annoying, just letting you know that I
          am
          using cookies on this site to track analytics, annoymously of course.
        </p>
        <button class="button button--primary">That's fine</button>
      </div>
    </div>
    <link href="/css/main.15f091f2.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">

    <script>
  // Check for Promises and fetch
  window.Promise ||
    document.write('<script src="js/es6-promise.min.js" ><\/script>');
  window.fetch || document.write('<script src="js/fetch.min.js"><\/script>');
    </script>

    <script type="text/javascript">
  window.addEventListener("DOMContentLoaded", function(event) {
    // Load the service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/serviceworker.js", { scope: "/" })

        .then(function(registration) {
          console.log(
            `Service Worker successfully registered for`,
            registration.scope
          );
        })

        .catch(function(error) {
          console.log(`ServiceWorker not registered: ${error}`);
        });

      if (navigator.serviceWorker.controller) {
        window.addEventListener("load", function() {
          navigator.serviceWorker.controller.postMessage({
            command: "trimCaches"
          });
        });
      }
    }
  });
    </script>

    <script src="js/lazyload.min.js"></script>

    <script src="js/typed.min.js" type="text/javascript"></script>
    <script src="js/nghpjs.js"></script>

  </div>
</template>

<style>
body,
div#root {
  overflow-x: hidden;
}
body,
html {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: 0 0;
}
.single-page .mid-box-background {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.App {
  text-align: center;
}
.App-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #222;
  padding: 20vh 20px 20px;
  padding-left: 0 !important;
  color: #fff;
}
.background-colours {
  opacity: 0.1;
}
.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #093054;
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0, #093054),
    color-stop(100%, #0b1042)
  );
  background: -webkit-linear-gradient(-45deg, #093054, #0b1042);
  background: -o-linear-gradient(-45deg, #093054 0, #0b1042 100%);
  background: -webkit-linear-gradient(315deg, #093054, #0b1042);
  background: -o-linear-gradient(315deg, #093054 0, #0b1042 100%);
  background: linear-gradient(135deg, #093054, #0b1042);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#093054", endColorstr="#0b1042", GradientType=1);
}
.title-wrapper h1 {
  font-size: 3.1em !important;
  line-height: 1.4;
  font-weight: 700;
  color: #fff;
}
.App-content {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background: #fff;
  z-index: 9;
}
.lazy {
  opacity: 1;
  transition: opacity 0.3s;
}
.lazy[data-src] {
  opacity: 0;
}
#OpeningContentWrapper img {
  max-height: 80px;
  height: 120px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: auto;
}
#BlogPostOpenerWrapper {
  display: inline-block;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 20px;
  width: 100%;
  color: #fff;
}
#OpeningContentSocial a {
  text-decoration: none;
}
#default-typed-strings,
#second-typed-strings-delay,
#third-typed-strings-delay,
#typed-strings,
#typed-strings-delay,
.scroll-down {
  display: none;
}
#OpeningContentWrapper p,
#welcometomysite,
.homepage-subtitle {
  display: inline-block;
}
.homepage-subtitle #typed,
.typed-cursor {
  font-size: 1.5em !important;
}
.typed-cursor {
  margin-left: 10px;
}
@media only screen and (min-width: 992px) {
  #OpeningContentWrapper {
    padding-top: 0;
    padding-right: 120px;
  }
  #welcometomysite {
    margin-left: 0.25em;
  }
  #MusicOpeningWrapper,
  div#OpeningContentWrapperWrap {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
#welcometomysite {
  font-size: 2.5em;
}
.post-img {
  width: 100%;
  height: auto;
  max-height: 200px;
}
.homepage-subtitle {
  width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
  margin-right: 10px;
}
#BlogandMoreAboutSeconndWrapper .card {
  overflow: hidden;
}
#BlogandMoreAboutSeconndWrapper .card .image {
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: -1rem;
}
.post-button.ui.bottom.button {
  margin-left: -1em;
  margin-top: -0.75em;
  margin-bottom: -1em;
  border-radius: 0;
  padding-bottom: 1em;
  background: #19034e;
  color: #fff;
  width: calc(100% - 1em);
}
#TwitterLinkWrap,
.social-icon {
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
}
.social-icon {
  max-width: 40px;
}
#cookie-law {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 100%;
  max-width: 320px;
  background: #f6f6f6;
  border: 1px solid #333;
  z-index: 999;
  padding: 5px;
}
#blogLoadMoreButton {
  margin-top: 20px;
  background: #ddd;
  color: #000;
}
div#customSpotifyRight {
  height: 300px;
}
div#customSpotifyRightElementSongWrapper {
  height: 100%;
  position: relative;
}
div#customSpotifyRightElementSongContainer {
  height: 100%;
  background-size: cover;
}
div#customSpotifyRightElementSongOverlay {
  position: absolute;
  top: 0;
  left: 0;
  background: 0 0;
  width: 100%;
  height: 100%;
  color: #fff;
}
div#nowPlayingOverlay {
  position: absolute;
  right: 0;
  top: 0;
  background: #0b0444;
  padding: 10px;
}
#customSpotifyLeft,
#customSpotifyRight,
.leftSideSong div,
a.trackLinkFloat {
  padding: 0 !important;
}
div#customSpotifyRightElementSongOverlayContent {
  margin-top: 100px;
}
.trackLinkPlay svg {
  max-width: 50px;
  fill: #fff;
  margin-top: 10px;
}
.trackLinkPlay svg path {
  fill: #fff;
}
div#customSpotifyRightElementSongOverlayContent span {
  display: inline-block;
  width: 100%;
}
div#spotifyOpenerWrapper {
  display: inline-block;
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid;
}
.leftSideSong {
  background: #000;
  color: #fff;
  position: relative;
}
a.trackLinkFloat {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  z-index: 999;
}
div#customSpotifyLeftElementSongWrapper {
  margin-top: 15px;
  background: #000;
}
.leftSideSong,
div#spotify-widget {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
#spotify-widget {
  margin-top: 20px !important;
}
.leftSideSong.ui.grid {
  border-bottom: 1px solid;
  padding-bottom: 5px;
  padding-top: 5px;
}
.leftSideSong h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1em;
}
.leftSideSong span {
  margin-right: 5px;
  font-size: 0.8em;
}
div#customSpotifyLeft {
  max-height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
}
div#mainOpeningContentWrap {
  margin: 10vh 0 0;
  display: flex;
}
div#OpeningContentWrapper {
  text-align: left;
}
@media only screen and (min-width: 992px) {
  #OpeningContentWrapper p img {
    max-height: 2.5em;
    height: auto;
    margin-bottom: 0;
    margin-top: 0;
    width: auto;
  }
}
@media only screen and (max-width: 992px) {
  #OpeningContentWrapper p img {
    max-height: 5em;
    height: auto;
    margin-bottom: 0;
    margin-top: 0;
    width: auto;
  }
  h2#welcometomysite {
    width: 100%;
  }
}
span#MusicOpeningWrapperTitle {
  display: inline-block;
  width: 100%;
  margin-top: 20px;
}
div#spotify-widget {
  height: 450px;
}
.social-icon-wrap {
  font-size: 2.4em;
  color: #000;
}
#TwitterLinkWrap {
  color: #1da1f2;
}
a#LinkedinLinkWrap {
  color: #0077b5;
}
.coloured-container {
  background: #19034e;
  padding-bottom: 250px;
  margin-top: 100px;
}
.coloured-float-container {
  margin-top: -250px;
  margin-bottom: 100px;
}
#ExtraContentWrapper {
  margin-top: 150px;
  margin-bottom: 150px;
}
#SkillsContentContainer {
  margin-top: 50px;
}
.column.icon-grid-item {
  padding: 0 !important;
  text-align: center;
}
.icon-grid-item img {
  max-width: 50px !important;
}
.icon-grid-item span {
  width: 100%;
  display: inline-block;
  margin-top: 10px;
}
#SkillsContentContainer h3 {
  margin-bottom: 50px;
  margin-top: 50px;
  display: inline-block;
  width: 100%;
}
.cookies.js-cookie-message {
  position: fixed;
  bottom: 20px;
  right: 0;
  max-width: 320px;
  width: 100%;
  z-index: 9999;
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.cookies__box button {
  width: 100%;
  padding: 0.5rem;
  background: 0;
  border-color: #171f32;
  color: #171f32;
  font-weight: 600;
  border-radius: 4px;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
header {
  background: #000;
  width: calc(100% - 2rem);
  padding: 1rem;
}
.text-normal {
  text-align: initial;
}
header .site-title-header {
  display: inline-block;
  width: auto;
  font-size: 1.5rem;
  color: #a3a7ae;
  font-weight: 600;
}
header .site-title-header a {
  text-decoration: none;
  color: #a3a7ae;
}
header .site-links-header {
  display: inline-block;
  float: right;
}
header .site-links-header a {
  color: #485569;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.25rem;
  display: inline-block;
}
header a:hover {
  color: #fff !important;
}
.ui.container {
  display: block;
  max-width: 100% !important;
}
@media only screen and (max-width: 767px) {
  .ui.container,
  .ui.grid.container,
  .ui.relaxed.grid.container,
  .ui.very.relaxed.grid.container {
    width: auto !important;
  }
  .ui.container {
    margin-left: 1em !important;
    margin-right: 1em !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.container {
    width: 723px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .ui.grid.container {
    width: calc(723px + 2rem) !important;
  }
  .ui.relaxed.grid.container {
    width: calc(723px + 3rem) !important;
  }
  .ui.very.relaxed.grid.container {
    width: calc(723px + 5rem) !important;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .ui.container {
    width: 933px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .ui.grid.container {
    width: calc(933px + 2rem) !important;
  }
  .ui.relaxed.grid.container {
    width: calc(933px + 3rem) !important;
  }
  .ui.very.relaxed.grid.container {
    width: calc(933px + 5rem) !important;
  }
}
@media only screen and (min-width: 1200px) {
  .ui.container {
    width: 1127px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .ui.grid.container {
    width: calc(1127px + 2rem) !important;
  }
  .ui.relaxed.grid.container {
    width: calc(1127px + 3rem) !important;
  }
  .ui.very.relaxed.grid.container {
    width: calc(1127px + 5rem) !important;
  }
}
#BlogContentContainer .card .image {
  max-height: 220px;
  overflow: hidden;
}
.repo-language-color {
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  position: relative;
  top: 1px;
  width: 12px;
  background-color: #19034e;
}
#githubReposContainer {
  margin: 0;
  padding-top: 1rem;
}
.PHP .repo-language-color {
  background-color: #777bb4;
}
.HTML .repo-language-color {
  background-color: #e34f25;
}
.CSS .repo-language-color {
  background-color: #1372b6;
}
.JavaScript .repo-language-color {
  background-color: #f7df1c;
}
.repo-language-color {
  margin-right: 5px !important;
}
.card .content a.header {
  text-decoration: none;
  margin-bottom: 5px;
}
pre {
  background: rgb(39, 39, 39);
  color: #fff;
  white-space: pre-wrap;
  font-size: 16px;
  font-family: Menlo, Monaco, "Courier New", Courier, monospace;
  overflow: auto;
}
.post-content-sidebar {
  max-width: 320px;
}
.App-content {
  top: 0 !important;
  margin-top: 90vh;
}
.single-page .App-content {
  top: 0 !important;
  margin-top: 0 !important;
}
.social-icon-wrap svg {
  width: 32px;
  height: auto;
}
#TwitterLinkWrap svg,
#TwitterLinkWrap svg path {
  fill: #1da1f2 !important;
}
#TwitterLinkWrap svg,
#TwitterLinkWrap svg path {
  fill: #1da1f2 !important;
}

#LinkedinLinkWrap svg,
#LinkedinLinkWrap svg path {
  fill: #0077b5;
}
.social-icon-wrap:hover svg {
  opacity: 0.6;
}
@media only screen and (max-width: 768px) {
  .App-header.full-height-header {
    height: 100%;
    padding-top: 20px;
  }
}
#MusicOpeningWrapperTitle svg {
  width: 14px;
  display: inline-block;
  transform: rotate(180deg);
}
img.lazy.loaded {
  opacity: 1 !important;
}

.alert.alert-danger {
  color: #d22d2d;
}

.alert {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
}

.button-block {
  display: block;
  width: 100%;
}

.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}
</style>

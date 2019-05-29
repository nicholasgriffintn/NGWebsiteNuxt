<script>
// Let's require the needed modules
var hljs = require('highlight.js');

const fm = require("front-matter");
var md = require("markdown-it")({
  html: true,
  langPrefix:   '',
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`);
    let res = fm(fileContent.default);
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    };
  },
  head() {
    return {
      title: this.attributes.title + ' | Nicholas Griffin',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.attributes.description
        }
      ]
    };
  }
};
</script>

<template>
  <div :key="$route.params.post">
    <div class="single-page">
          <div class="header-single-image-full">
    <img
                    :src="attributes.header"
                    :alt="attributes.title"
                    loading="lazy"
                  >
    </div>
      <div class="App-content">
        <div class="ui container">
          <div class="post-header">
          <div class="post-header-titles">
          <h1 id="single-title" class="animated bounceInDown">{{ attributes.title }}</h1>
            <h2>
              <div class="post-buttons-wrapper"></div>
            </h2>
          </div>
          </div>
          <div v-html="content" class="post-content-wrap"></div>
        </div>
      </div>
    </div>

<link rel="stylesheet" href="/css/dracula.min.css" />
    <script>
  window.onload = function() {
    if ("serviceWorker" in navigator) {
      const offlineButton = document.createElement("button");

      offlineButton.className = "button";

      caches.open("SavedPages").then(function(cache) {
        cache.match(window.location.href).then(function(result) {
          if (result) {
            document
              .querySelector(".post-buttons-wrapper")
              .appendChild(offlineButton);
            offlineButton.innerText =
              "This page is ready for offline reading 👍🏻";
            offlineButton.setAttribute("disabled", "disabled");
          } else {
            document
              .querySelector(".post-buttons-wrapper")
              .appendChild(offlineButton);
            offlineButton.innerText = "Save this page for offline reading";
          }
        });
      });

      caches.open("cachedPages").then(function(cache) {
        cache.match(window.location.href).then(function(result) {
          if (result) {
            document
              .querySelector(".post-buttons-wrapper")
              .appendChild(offlineButton);
            offlineButton.innerText =
              "This page is ready for offline reading 👍🏻";
            offlineButton.setAttribute("disabled", "disabled");
          } else {
            document
              .querySelector(".post-buttons-wrapper")
              .appendChild(offlineButton);
            offlineButton.innerText = "Save this page";
          }
        });
      });

      offlineButton.addEventListener("click", function(ev) {
        ev.preventDefault();

        var btn = this;

        btn.innerText = "Saving...";

        caches.open("SavedPages").then(function(cache) {
          cache.add(window.location.href).then(function() {
            const data = {
              title: document.querySelector("title").innerText
            };

            localStorage.setItem(window.location.href, JSON.stringify(data));

            btn.innerText = "This page is ready for offline reading 👍🏻";
            btn.setAttribute("disabled", "disabled");
          });
        });
      });
    }
  };
    </script>


  </div>
</template>

<style>
.single-page .App-header {
  height: auto !important;
  padding-top: 0 !important;
  position: relative;
}
.single-page .App-content {
  top: 0 !important;
  padding: 1rem;
  text-align: left;
  min-height: 150px;
  width: calc(100% - 2rem);
}
img.post-image {
  width: 100%;
  height: auto;
}
.post-content-wrap {
  max-width: 780px;
  width: 100%;
  margin: auto;
  padding: 1rem;
}
.post-buttons-wrapper .button {
  background: #000;
  font-size: 0.7rem;
  opacity: 1;
  border-radius: 4px;
  padding: 1rem;
  cursor: pointer;
}

.post-buttons-wrapper {
  margin-top: 0.5rem;
}
</style>
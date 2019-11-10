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
        { hid: 'title', property: 'title', content: this.attributes.title },
        { hid: 'description', name: 'description', content: this.attributes.description },
        { hid: 'og:description', name: 'og:description', content: this.attributes.description },
        { hid: 'keywords', name: 'keywords', content: this.attributes.tags },
        { hid: 'ogTitle', property: 'og:title', content: this.attributes.title },
        { hid: 'ogType', property: 'og:type', content: 'article' },
        { hid: 'ogImage', property: 'og:image', content: this.attributes.header }
      ],
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
            <small>
                Posted {{ attributes.ctime.getDate() + "-" + (attributes.ctime.getMonth() + 1) + "-" + attributes.ctime.getFullYear() }}
            </small>
            <hr>
              <div class="post-buttons-wrapper"></div>
          </div>
          </div>
          <div v-html="content" class="post-content-wrap"></div>
        </div>
      </div>
    </div>

<link rel="stylesheet" href="/css/dracula.min.css" />


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
  width: calc(100% -  2rem);
  margin: auto;
  padding: 1rem;
}

.post-buttons-wrapper .button {
    background: #fff;
    font-size: 0.7rem;
    opacity: 1;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    color: #000;
    margin: 0;
    line-height: 0.7rem;
}

.post-buttons-wrapper {
  margin-top: 0.5rem;
}


@media (max-width: 780px) {
  .post-header-titles {
    margin-top: 0 !important;
  }
}
</style>
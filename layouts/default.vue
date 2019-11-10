<template>
  <div>
    <header>
    <div class="ui container text-normal">
        <span class="site-title-header">
          <nuxt-link :to="'/'">
            Nicholas Griffin
            </nuxt-link>
        </span>
        <div class="site-links-header">
          <nuxt-link :to="'/'">
                Home
            </nuxt-link>
        </div>
    </div>
</header>

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

    <div id="scriptsWrap"></div>
  </div>
</template>

<script>
function insertAndExecute(id, text) {
    document.getElementById(id).innerHTML = text;
    var scripts = Array.prototype.slice.call(document.getElementById(id).getElementsByTagName("script"));
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src != "") {
            var tag = document.createElement("script");
            tag.src = scripts[i].src;
            document.getElementsByTagName("head")[0].appendChild(tag);
        }
        else {
            eval(scripts[i].innerHTML);
        }
    }
}

function removeJS(filename){
 var tags = document.getElementsByTagName('script');
 for (var i = tags.length; i >= 0; i--){ //search backwards within nodelist for matching elements to remove
  if (tags[i] && tags[i].getAttribute('src') != null && tags[i].getAttribute('src').indexOf(filename) != -1)
   tags[i].parentNode.removeChild(tags[i]); //remove element by calling parentNode.removeChild()
 }
}

export default {
  name: 'default',
  mounted () {

    removeJS('/js/ngnpjs.js')
    insertAndExecute('scriptsWrap', "<script src='/js/ngnpjs.js'><\/script>")

  }
}
</script>


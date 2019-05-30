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

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">


    <script src="js/lazyload.min.js"></script>

    <script src="js/typed.min.js" type="text/javascript"></script>
    <script src="js/nghpjs.js"></script>

  </div>
</template>

<script>
import '~/static/css/style.css'

export default {
  name: 'homepage',
}
</script>
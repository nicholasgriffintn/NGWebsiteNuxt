<template>
  <div class="ui three stackable cards" id="BlogContentContainer">
    <article v-for="(post,key) in bloglist" :key="key" class="ui card">
      <div class="image">
        <img
          class="lazy"
          :data-src="post.thumbnail"
          :alt="post.title"
          loading="lazy"
        />
      </div>
      <div class="content">
        <nuxt-link class="header" :to="`/post-single/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
        <div class="meta">
          <span class="date">
            {{ post.ctime }}
          </span>
        </div>
        <div class="description">
          {{ post.description }}
        </div>
      </div>
      <div class="extra content">
        <nuxt-link class="ui button primary basic inverted" :to="`/post-single/${post.slug}`">
         Read more
        </nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  computed: {
    bloglist() {
      if ( ! this.isPaginated ) {
        return this.$store.state.bloglist.slice(0,this.postsPerPage);
      } else {
        return this.$store.state.bloglist;
      }
    },
    totalPages() {
      return this.isPaginated ? Math.ceil(this.$store.state.bloglist.length / this.postsPerPage) : 1
    }
  },
  props: {
    isPaginated: Boolean,
    postsPerPage: Number
  }
};
</script>
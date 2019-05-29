<template>
    <div class="ui container">
        <h1>The latest from me, well possibly...</h1>
        <ArticleList :isPaginated="true" :postsPerPage="10" />
    </div>
</template>

<script>
import ArticleList from "~/components/ArticleList";
export default {
  components: {
    ArticleList
  }
};
</script>
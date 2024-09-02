<template>
  <div>
    <h2 style="text-align: left; margin-left: 30px">Featured Articles</h2>
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
      class="ArticleCard"
    ></ArticleCard>
  </div>
</template>

<script>
import ArticleCard from "../components/ArticleCard.vue";
import { mapState } from "vuex";
// import { mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["articles"])
  },
  components: {
    ArticleCard
  },
  created() {
    this.$store.dispatch("fetchArticles");
  }
};
</script>

<style scoped>
#article-link {
  text-align: left;
  outline: black;
  padding: 30px;
}
.ArticleCard {
  margin: 25px;
  text-align: left;
}
</style>

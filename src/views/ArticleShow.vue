<template>
  <div class="main">
    <router-link :to="{ path: '/' }">
      <button href="/" class="back-button">
        <b-icon icon="arrow-left" variant="dark"></b-icon></button
    ></router-link>
    <h3>
      <br />
      <b
        ><i>{{ article.title }}</i></b
      >
    </h3>
    <h5 style="color: gray">{{ article.subtitle }}</h5>
    <p>{{ article.writer }}</p>
    <br />
    <p>{{ article.content }}</p>
    <button v-if="showAddArticleLink" @click="deleteArticle">
      Remove article
    </button>
  </div>
</template>

<script>
import APIService from "@/APIService.js";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  props: ["id"], // "id" has been passed as a prop when I import this component to its parent
  data() {
    return {
      article: {},
    };
  },
  methods: {
    ...mapActions(["removeArticle"]),
    deleteArticle() {
      this.removeArticle(this.id);
      alert("Head back to the main Articles list to see your changes");
    },
  },
  computed: {
    ...mapState(["showAddArticleLink"]),
  },
  created() {
    APIService.getArticle(this.id).then((response) => {
      this.article = response.data;
      console.log(this.article);
    });
    // .catch(error => {
    //   console.log("There was an error:", error.response);
    // });
  },
};
</script>

<style lang="css" scoped>
.main {
  text-align: left;
  margin-left: 50px;
}
.b-icon {
  font-size: 50px;
  color: black;
}
.back-button {
  border: none;
  background-color: transparent;
}
</style>

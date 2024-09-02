<template>
  <div class="hello">
    <h2>Add a new blog post</h2>
    <form @submit.prevent="addArticle()">
      <label>Title:</label>
      <input type="text" v-model="title" />
      <label>Subtitle:</label>
      <input type="text" v-model="subtitle" />
      <label>Writer:</label>
      <input type="text" v-model="writer" />
      <label>Article Content:</label>
      <textarea v-model="content"></textarea>
      <label>Image: <i style="color: grey">(coming soon)</i></label>
      <button>Upload here</button>
      <br />
      <button type="submit" style="margin: 20px; width: 60%">Post</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      subtitle: "",
      writer: "",
      content: "",
      id: Math.floor(Math.random() * 10000000),
    };
  },
  methods: {
    ...mapActions(["createArticle"]),
    addArticle() {
      let newArticle = Object.create(null);
      newArticle["title"] = this.title;
      newArticle["subtitle"] = this.subtitle;
      newArticle["writer"] = this.writer;
      newArticle["content"] = this.content;
      newArticle["id"] = this.id;
      this.createArticle(newArticle);
      this.title = "";
      this.subtitle = "";
      this.content = "";
      this.writer = "";
    },
  },
  computed: {
    ...mapState(["articles"]),
  },
};
</script>

<style scoped>
input,
textarea {
  width: 100%;
  margin-bottom: 15px;
}
.hello {
  margin: auto;
  padding: 30px;
  max-width: 750px;
}
</style>

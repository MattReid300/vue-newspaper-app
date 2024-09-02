import Vue from "vue";
import Vuex from "vuex";
import APIService from "@/APIService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showAddArticleLink: false,
    moderatorPassword: "admin1",
    articles: []
  },
  mutations: {
    DISPLAY_ADD_ARTICLE_LINK: state => {
      state.showAddArticleLink = true;
    },
    SET_ARTICLES: (state, articles) => {
      state.articles = articles;
      //console.log(state.articles);
    },
    ADD_ARTICLE: (state, article) => {
      state.articles.push(article);
    },
    REMOVE_ARTICLE: (state, article) => {
      state.articles.splice(article, 1);
    }
  },
  actions: {
    removeArticle: ({ commit }, id) => {
      return APIService.removeArticle(id).then(() => {
        commit("REMOVE_ARTICLE", id);
      });
    },
    createArticle({ commit }, article) {
      return APIService.postArticle(article).then(() => {
        commit("ADD_ARTICLE", article);
      });
    },
    fetchArticles({ commit }) {
      return APIService.getArticles()
        .then(response => {
          commit("SET_ARTICLES", response.data); //reponse.data.articles
        })
    }
  },
  modules: {}
});

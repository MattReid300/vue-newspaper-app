<template>
  <div>
    <div id="nav">
      <b-navbar toggleable="lg" type="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About </router-link>
            <router-link to="/articleadder" v-if="showAddArticleLink"
              >Add Article</router-link
            >
            <b-dropdown id="dropdown-1" variant="none" text="Administrador">
              <label><b>Password:</b> (admin1)</label>
              <div style="display: flex; flex-direction: row">
                <b-input
                  type="text"
                  v-model="inputPassword"
                  style="width: 12rem"
                >
                </b-input>
                <b-button @click="PasswordCheck()">Check</b-button>
              </div>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      inputPassword: "",
    };
  },
  methods: {
    displayArticleAdder() {
      this.$store.commit("DISPLAY_ADD_ARTICLE_LINK");
    },
    PasswordCheck() {
      // this.store.commit("runPasswordCheck");
      if (this.inputPassword == this.$store.state.moderatorPassword) {
        this.displayArticleAdder();
      } else alert("Wrong password, try again");
    },
  },
  computed: {
    ...mapState(["showAddArticleLink"]),
  },
};
</script>

<style lang="css">
/*scoped*/
#nav {
  /* padding-top: 30px; */
  /* padding-left: 30px; */
  /* margin-bottom: -50px; */
  /* display: flex;
  flex-direction: row; */
  text-align: left;
  font-size: 20px;
  width: 60%;
}

#nav a {
  color: black;
  padding-right: 20px;
}

#dropdown-1 > button {
  text-align: left;
  font-size: 1.2rem;
  color: black;
  padding: 0;
}
#dropdown-1 {
  display: block;
}

#nav a.router-link-exact-active {
  color: gray;
}
</style>

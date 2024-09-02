<template>
  <div id="app">
    <div class="front-img">
      <div class="img-chunk">
        <NavBar id="navbar-1"></Navbar>
        <b-jumbotron id="title-jumbo">
          <h1 class="title">The Post</h1>
        </b-jumbotron>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
window.addEventListener("load", () => {
  alert("Access as an administrator to write / delete articles on the database");
});
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
/* eslint-disable */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-family: Verdana, Tahoma, sans-serif;
  max-width: 80rem;
  margin: 0px auto;
}

#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}

#title-jumbo {
  margin: auto;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: white;
}

.front-img {
  text-align: center;
  /* background-image: url("newspaper-wallpaper.png"); */
  width: 100%;
  padding-top: 20px;
}

.title {
  font-family: titleFont;
  font-size: 5rem;
}

@font-face {
  font-family: titleFont;
  src: url(Engravers Old English Normal.ttf);
}
</style>

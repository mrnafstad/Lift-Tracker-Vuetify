<template>
  <v-app>
    <Header />
    <Login />

    <v-main style="padding: 15px 0px 0px;">
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Login from './components/Login.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Login
  }
};
</script>

<style>
element.style {
  padding: 15px 0px 0px;
}
</style>

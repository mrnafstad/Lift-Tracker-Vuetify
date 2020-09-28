<template>
  <v-app>
    <Header />
    
    <Login />

    <v-main>
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

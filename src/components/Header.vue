<template>
  <v-container>
    <v-app-bar app color="black" dark>
      <v-btn color="secondary" @click="toggleLogin">Login</v-btn>

      <v-spacer />
        <router-link to="/">Today</router-link>
      <v-spacer />
      <!-- <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="secondary" dark v-bind="attrs" v-on="on">Menu</v-btn>
      </template>-->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!--</v-menu>-->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed right temporary>
      <v-list dense>
        <v-list-item
          v-for="route in $router.options.routes"
          :key="route.path"
          @click="$router.push(route.path)"
        >
          <v-list-item-title :to="route.path">{{ route.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-switch @click="toggleAdvanced" label='Advanced'></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Header",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    ...mapActions(['toggleLogin', 'toggleAdvanced']),
  }
};
</script>

<style scoped>
a.router-link-active:hover {
	color: blue;
	text-decoration: none
}

a.router-link-active {
	color: lightblue;
	text-decoration: none;
}
</style>
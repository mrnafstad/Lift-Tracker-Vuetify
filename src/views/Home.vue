<template>
  <v-container class="text-center">
    <h3>Todays workout</h3>
    <v-expansion-panels>
        <v-expansion-panel
        v-for="(exercise,idx) in getToday"
        :key="idx"
        >
            <v-expansion-panel-header>{{ exercise.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    data() {
        return {
            selected: null
        }
    },
    computed: {
        ...mapGetters(['getToday'])
    }
}
</script>

<style>

</style>
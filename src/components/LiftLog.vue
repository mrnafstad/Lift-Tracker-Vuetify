<template>
  <v-container>
      <v-row align="center">
      <v-col cols="4">
        <v-btn icon block @click="set.weight = set.weight*1 + 1"><v-icon>mdi-chevron-up</v-icon></v-btn>
        <v-text-field 
        label="Weight (Kg)" 
        v-model="set.weight" 
        type="number"></v-text-field>
        <v-btn icon block @click="set.weight = set.weight*1 - 1"><v-icon>mdi-chevron-down</v-icon></v-btn>
      </v-col>
      <v-col cols="4">
          <v-btn icon block @click="set.reps = set.reps*1 + 1"><v-icon>mdi-chevron-up</v-icon></v-btn>
          <v-text-field label="Reps" v-model="set.reps" type="number" />
          <v-btn icon block @click="set.reps = set.reps*1 - 1"><v-icon>mdi-chevron-down</v-icon></v-btn>
      </v-col>
      <v-col cols="4">
          <v-select :items="types" label="Regular" v-model="set.type" />
      </v-col>
      </v-row>
        <v-slider
          v-model="set.rpe"
          thumb-label
          min=0
          max=10
          tick-size=0.5
          label="RPE"
        ></v-slider>

        <v-btn block @click="addSet">Add set</v-btn>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'LiftLog',
    data() {
        return {
            set: {
                weight: 0,
                reps: 0,
                rpe: 5,
                type: 'Regular'
            },
            types: ['Myoreps', 'Superset', 'Regular', 'Rest-pause']
        }
    },
    methods: {
        ...mapActions(['newSet']),
        addSet() {
            this.newSet(this.set)
        }
    },
    computed: {
        ...mapGetters(['currentLift'])
    }
}
</script>

<style>

</style>
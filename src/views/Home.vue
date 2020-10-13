<template>
  <v-container class="text-center">
    <h3>Todays workout</h3>
    <v-expansion-panels>
      <v-expansion-panel v-for="(exercise, idx) in getToday" :key="idx">
        <v-expansion-panel-header>{{
          exercise.exercise
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row style="background-color: gainsboro; border-radius: 5px;">
            <v-col> Sets <br />{{ exercise.sets }} </v-col>
            <v-col> Reps <br />{{ exercise.reps }} </v-col>
            <v-col v-if="advanced">
              Eff. reps <br />
              {{ exercise.effectiveReps }}
            </v-col>
            <v-col>
              Vol <br />
              {{ exercise.volume }}
            </v-col>
            <v-col v-if="advanced">
                Eff. vol <br />{{ exercise.effectiveVolume }}
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      selected: null
    };
  },
  computed: {
    ...mapGetters(["getToday", "advanced"])
  }
};
</script>

<style></style>

<template>
  <v-container> 
      <v-row justify="center">
        <v-col md="6">
            <v-btn block icon color="grey" @click="addExercise = !addExercise">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-select :items="exercises" label="Exercises" item-text="Name" v-model="selected"></v-select>
            
            <LiftLog v-if="selected !== null" />
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LiftLog from '../components/LiftLog.vue'

export default {
    name: 'CurrentExercise',
    data() {
        return {  
            addExercise: false,
            selected: null
        }
    },
	components: {
		LiftLog,
    },
    methods: {
        ...mapActions(['getExercises', 'setCurrentE']),
		selectExercise(exercise) {
			this.setCurrentE(exercise)
		}
    },
	computed: {
		...mapGetters(['currentLift', 'exercises'])
	},
	async created() {
		if (this.exercises.length === 0) {
			await this.getExercises()
		}
	}
}
</script>

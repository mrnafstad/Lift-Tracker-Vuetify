import Vue from "vue";
import Vuex from "vuex";
import db from "../firebaseConfig.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todaysWorkout: [],
    exercises: [],
    currentExercise: null,
    login: false,
    advanced: false
  },
  mutations: {
    login: (state) => (state.login = !state.login),
    advanced: (state) => state.advanced = !state.advanced,
    setExercises: (state, exercises) => (state.exercises = exercises),
    newExercise: (state, exercise) => state.exercises.unshift(exercise),
    setCurrent: (state, exercise) => (state.currentExercise = exercise),
    addSet: (state, set) => {
      state.currentExercise.Sets.push(set);
      const reps = set.reps;
      var effectiveReps = 0;
      if (reps > 5) {
        effectiveReps = set.rpe - 5;
      } else {
        effectiveReps = set.reps;
      }
      if (state.currentExercise.Sets.length === 1) {
        state.todaysWorkout.push({
          exercise: state.currentExercise.Name,
          reps: set.reps,
          volume: set.reps * set.weight,
          effectiveReps: effectiveReps,
          effectiveVolume: effectiveReps * set.weight,
          sets: 1,
        });
      } else {
        console.log(state.currentExecercise.Sets.length)
        let update = state.todaysWorkout.find(
          (element) => element.Name === set.Name
        );

        update.reps = update.reps * 1 + set.reps * 1;
        update.effectiveReps = update.effectiveReps * 1 + 1 * effectiveReps;
        update.volume += set.reps * set.weight;
        update.effectiveVolume += effectiveReps * set.weight;
        update.sets++;
      }
    },
  },
  actions: {
    toggleLogin({ commit }) {
      commit("login");
    },
    async getExercises({ commit }) {
      await db.exercises.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, doc.data());
          commit("newExercise", {
            id: doc.id,
            Name: doc.data().Name,
            Primary: doc.data().Primary,
            Secondary: doc.data().Secondary,
            Sets: [],
          });
        });
      });
    },
    setCurrentE({ commit }, selection) {
      commit("setCurrent", selection);
      console.log(selection);
    },
    newSet({ commit }, set) {
      console.log(set);
      commit("addSet", {
        weight: set.weight,
        reps: set.reps,
        rpe: set.rpe,
        type: set.type,
      });
    },
    toggleAdvanced({ commit }) {
      commit("advanced")
    }
  },
  getters: {
    currentLift: (state) => state.currentExercise,
    exercises: (state) => state.exercises,
    getToday: (state) => state.todaysWorkout,
    login: (state) => state.login,
    advanced: (state) => state.advanced
  },
  // state: {
  //   login: false
  // },
  // mutations: {
  //   login: (state) => state.login = !state.login
  // },
  // actions: {
  //   toggleLogin({ commit }) {
  //     commit('login')
  //   }
  // },
  // modules: {},
  // getters: {
  //   login: (state) => state.login
  // }
});

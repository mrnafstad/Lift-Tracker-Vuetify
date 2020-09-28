<template>
  <v-container fluid>
    <v-overlay id="login" :value="login" absolute>
          <v-card light>
          <v-list>
        <v-list-item>
          <v-text-field v-model="username" label="Username" prepend-icon="mdi-account-circle" />
        </v-list-item>
        <v-list-item>
          <v-text-field
            v-model="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-list-item>
        <v-list-item>
          <v-btn color="danger" @click="toggleLogin">Exit</v-btn>
          <v-spacer />
          <v-btn color="info" @click="signIn" disabled>Login</v-btn>
        </v-list-item>
      </v-list>
      </v-card>
      </v-overlay>
      

        
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      showPassword: false,
    };
  },
  methods: {
    ...mapActions(['toggleLogin']),
    signIn() {
      this.username = null
      this.password = null
    }
  },
  computed: {
    ...mapGetters(['login'])
  }
};
</script>
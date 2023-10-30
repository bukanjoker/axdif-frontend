<template>
  <div class="mt-8">
    <div class="title-black">
      Login to your Account
    </div>
    <div class="mt-2">
      Hi, welcome back! Select method to login
    </div>
  </div>
  <v-row class="mt-4">
    <v-col sm="6" cols="12">
      <v-btn block variant="outlined" size="large">
        <v-icon start>
          <v-img src="@/assets/icon-google.png"></v-img>
        </v-icon>
        Google
      </v-btn>
    </v-col>
    <v-col sm="6" cols="12">
      <v-btn block variant="outlined" size="large">
        <v-icon start class="pr-1">
          <v-img src="@/assets/icon-linkedin.png"></v-img>
        </v-icon>
        Linked In
      </v-btn>
    </v-col>
  </v-row>

  <div class="mt-4 mb-2 login-divider">
    <span class="text-caption">Or continue with email</span>
  </div>

  <div class="mb-2">
    <FieldInput label="Email" type="email" v-model="formLogin.email" required/>
    <FieldInput label="Password" type="password" v-model="formLogin.password" required/>
  </div>

  <div class="d-flex align-center mb-2" style="margin-top: -20px;">
    <v-checkbox 
      label="Remember me" 
      hide-details
      v-model="formLogin.rememberMe"
    ></v-checkbox>
    <v-btn color="#0796E5" variant="plain">
      Forgot password?
    </v-btn>
  </div>

  <v-btn color="#EC4B5A" block @click="$router.push({ name: 'Overview' })" size="large">
    Login
  </v-btn>
</template>

<script setup>;
import { reactive } from 'vue';
import FieldInput from '@/components/FieldInput.vue'

const formLogin = reactive({
  email: '',
  password: '',
  rememberMe: false,
})
</script>

<style scoped>
  .login-divider {
    text-align: center; 
  }

  .login-divider span {
    color: #5B6591;
    background:#fff; 
  }
</style>

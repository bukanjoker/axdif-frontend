<template>
  <v-row>
    <v-col v-show="display.mdAndUp" md="8" class="bg-primary landing-left">
      <div class="px-10 pt-12">
        <v-img src="@/assets/bg-login.png"></v-img>
      </div>
      <div class="footer">© Copyright 2023. All Right Reserved.</div>
    </v-col>
    <v-col 
      md="4" 
      class="landing-right" 
      :style="display.mdAndUp ? 'padding: 72px 56px 0 56px;' : 'padding: 48px 32px 0 32px;'"
    >
      <v-img width="140px" src="@/assets/logo-axdif.png"></v-img>
      <LoginForm />
      <div class="pb-6 pt-8 text-center">Privacy Policy • Terms & Condition</div>
    </v-col>
  </v-row>
  <div v-show="!display.mdAndUp" class="pb-6 pt-8 text-center">© Copyright 2023. All Right Reserved.</div>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import LoginForm from '@/components/LoginForm.vue'

const display = ref(useDisplay());
</script>

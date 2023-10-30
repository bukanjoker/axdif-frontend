<template>
  <div :class="display.mdAndUp ? 'text-center mt-16' : 'text-center mt-8'">
    <v-img 
      v-show="display.mdAndUp" 
      class="mx-auto mb-8" 
      width="600px" 
      src="@/assets/register-guide.png"
    ></v-img>
    <v-img 
      v-show="!display.mdAndUp" 
      class="mx-auto mb-8" 
      width="200px" 
      src="@/assets/register-guide-vertical.png"
    ></v-img>
    <v-btn color="#EC4B5A" @click="$router.push({ name: 'Login' })">Login to Axdif</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = ref(useDisplay());
</script>

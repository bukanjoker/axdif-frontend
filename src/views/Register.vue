<template>
  <!-- web -->
  <v-row v-show="display.mdAndUp">
    <v-col class="bg-primary landing-left">
      <div class="title mt-16 px-10">
        A few clicks away from being a part of Axdif
      </div>
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows="hover"
      >
        <v-carousel-item
          v-for="(slide, i) in content"
          :key="i"
        >
          <v-img max-width="280px" class="px-10 my-8 mx-auto" :src="slide.image"></v-img>
          <div class="subtitle">
            {{ slide.subtitle }}
          </div>
          <div class="mt-2 px-8 text-center">
            {{ slide.desc }}
          </div>
        </v-carousel-item>
      </v-carousel>
      
    </v-col>
    <v-col 
      md="8" 
      class="landing-right" 
      style="padding: 56px 64px 0 64px;"
    >
      <v-img width="140px" src="@/assets/logo-axdif.png"></v-img>

      <v-carousel height="auto" hide-delimiters :show-arrows="false" v-model="isRegistered">
        <v-carousel-item>
          <RegisterForm :submitAction="formNext" />
        </v-carousel-item>
        <v-carousel-item>
          <RegisterComplete />
        </v-carousel-item>
      </v-carousel>

      <div class="pb-6 pt-8">© Copyright 2023. All Right Reserved.</div>
    </v-col>
  </v-row>

  <!-- mobile -->
  <div v-show="!display.mdAndUp">
    <div class="py-4 px-4">
      <v-img width="140px" src="@/assets/logo-axdif.png"></v-img>
    </div>
    <div class="bg-primary landing-left">
      <div class="title pt-8 pb-4 px-9">
        A few clicks away from being a part of Axdif
      </div>
      <div class="bg-white mx-4 my-4 pb-8 px-6" style="border-radius: 8px;">
        <v-carousel height="auto" hide-delimiters :show-arrows="false" v-model="isRegistered">
          <v-carousel-item>
            <RegisterForm :submitAction="formNext" />
          </v-carousel-item>
          <v-carousel-item>
            <RegisterComplete />
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="pb-6 pt-4 text-center">© Copyright 2023. All Right Reserved.</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

import RegisterForm from '@/components/RegisterForm.vue'
import RegisterComplete from '@/components/RegisterComplete.vue'

const display = ref(useDisplay());
const isRegistered = ref(0);

const formNext = () => {
  isRegistered.value++
}

const content = [
  {
    image: '/src/assets/register-1.png',
    subtitle: 'Manage Task Easily & Efficiently',
    desc: 'Increase employee productivity and performance in a measurable and precision system in one application.'
  },
  {
    image: '/src/assets/register-2.png',
    subtitle: 'Communication Is Key',
    desc: 'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.'
  },
  {
    image: '/src/assets/register-3.png',
    subtitle: 'Employee Self-Service',
    desc: 'Simplify the administrative affairs of the company where you work wherever and whenever. Let’s get started with all these conveniences'
  },
]
</script>

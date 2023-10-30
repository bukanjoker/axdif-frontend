<template>
  <div :class="display.mdAndUp ? 'w-66 mt-4' : 'mt-4'">
    <div class="title-black">
      Manage all your employee efficiently
    </div>
    <div class="mt-2">
      Let’s get you all set up so you can verify your personal account and begin setting up your profile
    </div>
  </div>
  <div class="mt-10 mb-4">
    <v-row>
      <v-col sm="6" cols="12" class="py-0">
        <FieldInput label="Company Name" type="text" v-model="formData.company" required/>
      </v-col>
      <v-col sm="6" cols="12" class="py-0">
        <FieldInput label="Fullname" type="text" v-model="formData.name" required/>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" cols="12" class="py-0">
        <FieldInput label="Email" type="email" v-model="formData.email" required/>
      </v-col>
      <v-col sm="6" cols="12" class="py-0">
        <FieldInput label="Phone Number (optional)" type="number" v-model="formData.number"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" cols="12" class="py-0">
        <FieldInput label="Password" type="password" v-model="formData.password" required/>
      </v-col>
      <v-col sm="6" cols="12" class="py-0">
        <FieldInput label="Confirm Password" type="password" v-model="formData.confirmPassword" required/>
      </v-col>
    </v-row>
  </div>
  <div class="register-checkbox pb-4">
    <v-checkbox 
      label="Yes I want to receive Axdif’s Newsletter" 
      hide-details
      v-model="formData.newsletter"
    ></v-checkbox>
    <v-checkbox 
      label="I have read and accept the Terms & Conditions and Privacy Policy" 
      hide-details
      v-model="formData.termCondition"
    ></v-checkbox>
  </div>
  <v-btn color="#EC4B5A" @click="submitAction" :disabled="!formData.termCondition">
    Submit
  </v-btn>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import FieldInput from '@/components/FieldInput.vue'

defineProps({
  submitAction: Function
})
const display = ref(useDisplay());
const formData = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  company: '',
  name: '',
  number: '',
  termCondition: false,
  newsletter: false,
})

</script>

<style scoped>
  .register-checkbox div {
    margin-top: -20px;
    margin-left: -10px;
  }
</style>
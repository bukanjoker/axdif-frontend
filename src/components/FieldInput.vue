<template>
  <div>
    <div class="mb-2" v-if="label">
      <span class="font-weight-bold">{{ label }} </span>
      <span v-if="required" class="text-red-accent-2 pl-2">*</span>
    </div>

    <!-- general input field -->
    <v-text-field
      v-if="type != 'password'"
      density="compact"
      variant="outlined"
      :type="type" 
      :placeholder="placeholder || label" 
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
    ></v-text-field>

    <!-- password type input field -->
    <v-text-field
      v-if="type == 'password'"
      density="compact"
      variant="outlined"
      :placeholder="placeholder || label" 
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const showPassword = ref(false);

  defineProps({
    label: String,
    placeholder: String,
    type: String,
    required: Boolean,
    options: Array
  })
</script>

<style scoped>
  .relative .v-input__append {
    position: absolute;
    right: 0;
  }
</style>
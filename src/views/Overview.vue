<template>
  <!-- web -->
  <v-row v-show="display.mdAndUp">
    <v-col md="8">
      <OverviewSummary />
      <div class="py-2"></div>
      <OverviewTask />
    </v-col>
    <v-col md="4">
      <OverviewProfile />
      <div class="py-2"></div>
      <OverviewAttendance />
    </v-col>
  </v-row>

  <!-- mobile -->
  <div v-show="!display.mdAndUp">
    <OverviewProfile />
    <div class="py-2"></div>
    <OverviewSummary />
    <div class="py-2"></div>
    <OverviewAttendance />
    <div class="py-2"></div>
    <OverviewTask />
    <div class="py-2"></div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useDisplay } from 'vuetify/lib/framework.mjs';

  import OverviewProfile from '@/components/OverviewProfile.vue';
  import OverviewAttendance from '@/components/OverviewAttendance.vue';
  import OverviewSummary from '@/components/OverviewSummary.vue';
  import OverviewTask from '@/components/OverviewTask.vue';

  const display = ref(useDisplay());
</script>

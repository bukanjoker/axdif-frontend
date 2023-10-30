<template>
  <div class="d-flex justify-space-between align-center pb-4">
    <div class="title-page">Employee Stat</div>
    <!-- <div class="d-flex align-center">
      <div>Display Data in</div>
      <div>Periode</div>
    </div> -->
  </div>

  <v-row>
    <v-col md="8" cols="12">
      <ChartAttendanceSummary />
    </v-col>
    <v-col md="4" cols="12">
      <ChartAttendanceComplete />
    </v-col>
  </v-row>
  <v-row class="mb-4">
    <v-col md="4" cols="12">
      <ChartTask />
    </v-col>
    <v-col md="8" cols="12">
      <ChartTaskComplete />
    </v-col>
  </v-row>
  <TableLeaveRecap />
</template>

<script setup>
  import TableLeaveRecap from '@/components/TableLeaveRecap.vue';
  import ChartAttendanceSummary from '@/components/ChartAttendanceSummary.vue';
  import ChartAttendanceComplete from '@/components/ChartAttendanceComplete.vue';
  import ChartTask from '@/components/ChartTask.vue';
  import ChartTaskComplete from '@/components/ChartTaskComplete.vue';
</script>

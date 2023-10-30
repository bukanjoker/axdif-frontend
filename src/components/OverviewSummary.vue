<template>
  <v-card class="py-2">
    <v-card-item>
      <div class="d-flex justify-space-between align-center">
        <div class="title-card">Summary</div>
        <!-- <div class="d-flex align-center">
          <div class="text-caption pr-4">
            Periode
          </div>
        </div> -->

      </div>
      
      <v-divider class="border-opacity-25 my-4"></v-divider>

      <v-row>
        <v-col md="4" cols="6">
          <div class="subcard">
            <div class="text-label">Working Day(s)</div>
            <div class="text-content font-weight-bold">
              {{ summaryData.workingDay }} Hari
            </div>
          </div>
        </v-col>
        <v-col md="4" cols="6">
          <div class="subcard">
            <div class="text-label">Working Hour(s)</div>
            <div class="text-content font-weight-bold">
              {{ summaryData.workingHour }} hr 
              {{ summaryData.workingMinute }} min
            </div>
          </div>
        </v-col>
        <v-col md="4" cols="6">
          <div class="subcard">
            <div class="text-label">Exceptional Attendance</div>
            <div class="text-content font-weight-bold">
              {{ summaryData.exceptionalAttendance }} Hari
            </div>
          </div>
        </v-col>
        <v-col md="4" cols="6">
          <div class="subcard">
            <div class="text-label">Leave Taken</div>
            <div class="text-content font-weight-bold">
              {{ summaryData.leaveTaken }} Hari
            </div>
          </div>
        </v-col>
        <v-col md="4" cols="6">
          <div class="subcard">
            <div class="text-label">Overtime</div>
            <div class="text-content font-weight-bold">
              {{ summaryData.overtimeHour }} hr 
              {{ summaryData.overtimeMinute }} min
            </div>
          </div>
        </v-col>
        <v-col md="4" cols="6">
          <div class="subcard">
            <div class="text-label">Claim</div>
            <div class="text-content font-weight-bold">
              IDR {{ summaryData.claim }}
            </div>
          </div>
        </v-col>
      </v-row>

    </v-card-item>
  </v-card>
</template>

<script setup>
  const summaryData = {
    workingDay: 2,
    workingHour: 13,
    workingMinute: 14,
    exceptionalAttendance: 0,
    leaveTaken: 0,
    overtimeHour: 13,
    overtimeMinute: 14,
    claim: 0
  }
</script>
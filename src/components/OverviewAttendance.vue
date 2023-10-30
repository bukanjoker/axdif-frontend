<template>
  <v-card class="py-2">
    <v-card-item>
      <div class="title-card">Today's Attendance</div>
      <v-divider class="border-opacity-25 mt-2 mb-4"></v-divider>
      <v-row>
        <v-col>
          <div class="subcard checkin">
            <div class="text-label">Check In</div>
            <div class="title-card">07:00</div>
          </div>
        </v-col>
        <v-col>
          <div class="subcard checkout">
            <div class="text-label">Check Out</div>
            <div class="title-card">18:00</div>
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<style scoped>
  .subcard.checkin {
    border-top: 4px solid green;
  }
  .subcard.checkout {
    border-top: 4px solid red;
  }
</style>
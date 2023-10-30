<template>
  <v-card>
    <v-card-item>
      <div class="title-card pb-4">Attendance Summary</div>
      <canvas id="chartAttSummary" width="400" height="137" class="pb-4 pr-4">
        <p>Chart Attendance Summary</p>
      </canvas>

      <v-row class="pb-4">
        <v-col md="3" cols="6">
          <div class="subcard working-day">
            <div class="text-label">
              Total Working Days
            </div>
            <div class="title-card">
              {{ summaryDetail.totalWorkingDay }} Day(s)
            </div>
          </div>
        </v-col>
        <v-col md="3" cols="6">
          <div class="subcard actual-hour">
            <div class="text-label">
              Actual Working Hours
            </div>
            <div class="title-card">
              {{ summaryDetail.actualWorkingHour }} hr 
              {{ summaryDetail.actualWorkingMinute }} min
            </div>
          </div>
        </v-col>
        <v-col md="3" cols="6">
          <div class="subcard working-hour">
            <div class="text-label">
              Total Working Hours
            </div>
            <div class="title-card">
              {{ summaryDetail.totalWorkingHour }} hr 
              {{ summaryDetail.totalWorkingMinute}} min
            </div>
          </div>
        </v-col>
        <v-col md="3" cols="6">
          <div class="subcard late-coming">
            <div class="text-label">
              Total Late Coming
            </div>
            <div class="title-card">
              {{ summaryDetail.totalLateComing }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup>
  import Chart from 'chart.js/auto';
  import { onMounted } from 'vue';

  onMounted(() => {
    new Chart(
      document.getElementById('chartAttSummary'),
      {
        type: 'bar',
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        },
        data: {
          labels: summaryData.map((d) => d.label),
          datasets: [
            {
                label: "",
                data: summaryData.map((d) => d.dataNotComplete),
                backgroundColor: '#E53935'
            },
            {
                label: "",
                data: summaryData.map((d) => d.dataComplete),
                backgroundColor: '#0796E5'
            },
          ]
        }
      }
    );
  })

  const summaryData = [
    {
      label: 'January',
      dataComplete: 25,
      dataNotComplete: 1,
    },
    {
      label: 'February',
      dataComplete: 20,
      dataNotComplete: 3,
    },
    {
      label: 'March',
      dataComplete: 27,
      dataNotComplete: 1,
    },
    {
      label: 'April',
      dataComplete: 23,
      dataNotComplete: 2,
    },
    {
      label: 'May',
      dataComplete: 24,
      dataNotComplete: 1,
    },
    {
      label: 'June',
      dataComplete: 20,
      dataNotComplete: 1,
    },
    {
      label: 'July',
      dataComplete: 8,
      dataNotComplete: 8,
    },
    {
      label: 'August',
      dataComplete: 23,
      dataNotComplete: 3,
    },
    {
      label: 'September',
      dataComplete: 24,
      dataNotComplete: 2,
    },
    {
      label: 'October',
      dataComplete: 20,
      dataNotComplete: 3,
    },
    {
      label: 'November',
      dataComplete: 22,
      dataNotComplete: 2,
    },
    {
      label: 'December',
      dataComplete: 20,
      dataNotComplete: 1,
    },
  ]

  const summaryDetail = {
    totalWorkingDay: 233,
    totalWorkingHour: 2930,
    totalWorkingMinute: 26,
    actualWorkingHour: 2126,
    actualWorkingMinute: 14,
    totalLateComing: 0
  }
</script>

<style scoped>
  .subcard.working-day{
    border-left: 4px solid #0796E5;
  }
  .subcard.actual-hour{
    border-left: 4px solid #27B3F7;
  }
  .subcard.working-hour{
    border-left: 4px solid #80D2FB;
  }
  .subcard.late-coming{
    border-left: 4px solid #E53935;
  }
</style>
<template>
  <v-card>
    <v-card-item>
      <div class="title-card pb-4">Attendance Completeness</div>
      <canvas id="chartAttComplete" width="200" height="200" class="pa-4">
        <p>Chart Attendance Completeness</p>
      </canvas>
    </v-card-item>
  </v-card>
</template>

<script setup>
  import Chart from 'chart.js/auto';
  import { onMounted } from 'vue';

  const taskData = [
    {
      label: 'Not Complete',
      data: 50,
      color: '#E53935'
    },
    {
      label: 'Complete',
      data: 50,
      color: '#0796E5'
    },
  ]

  onMounted(() => {
    new Chart(
      document.getElementById('chartAttComplete'),
      {
        type: 'pie',
        options: {
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        },
        data: {
          labels: taskData.map((d) => d.label),
          datasets: [{
            data: taskData.map((d) => d.data),
            backgroundColor: taskData.map((d) => d.color),
          }]
        }
      }
    );
  })
</script>
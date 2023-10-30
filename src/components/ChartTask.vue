<template>
  <v-card>
    <v-card-item>
      <div class="title-card pb-4">Overall Task Progress</div>
      <canvas id="chartTask" width="200" height="200" class="pa-4">
        <p>Chart Task Progress</p>
      </canvas>
    </v-card-item>
  </v-card>
</template>

<script setup>
  import Chart from 'chart.js/auto';
  import { onMounted } from 'vue';

  const taskData = [
    {
      label: 'Unscheduled',
      data: 25,
      color: '#D4DFE7'
    },
    {
      label: 'Overdue',
      data: 25,
      color: '#FF9800'
    },
    {
      label: 'Complete',
      data: 50,
      color: '#0796E5'
    },
  ]

  onMounted(() => {
    new Chart(
      document.getElementById('chartTask'),
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
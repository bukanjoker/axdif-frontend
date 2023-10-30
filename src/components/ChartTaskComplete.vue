<template>
  <v-card>
    <v-card-item>
      <div class="title-card">Task Completion in All Project</div>
      <canvas id="chartTaskComplete" width="200" height="63" class="pb-4 pr-4">
        <p>Chart Task All Project</p>
      </canvas>

      <div class="subcard mb-4">
        <v-row>
          <v-col md="3" cols="6" class="text-center">
            <div class="text-label">
              Total Task Completed
            </div>
            <div class="title-card align-center py-2">
              {{ taskCompleteDetail.totalCompletedCurrent }}
              <v-chip 
                class="mx-2" 
                size="x-small" 
                :color="taskCompleteDetail.totalCompletedCurrent > taskCompleteDetail.totalCompletedPrev ? 'green' : 'red'"
                :append-icon="taskCompleteDetail.totalCompletedCurrent > taskCompleteDetail.totalCompletedPrev ? 'mdi-trending-up' : 'mdi-trending-down'"
                label
              >
              {{ taskCompleteDetail.totalCompletedDiff }}%
              </v-chip>
            </div>
            <div class="text-caption">
              Last Year : {{ taskCompleteDetail.totalCompletedPrev }} Task
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col md="3" cols="6" class="text-center">
            <div class="text-label">
              Most Completed Task At
            </div>
            <div class="title-card align-center py-2">
              {{ taskCompleteDetail.mostTask }}
            </div>
            <div class="text-caption">
              {{ taskCompleteDetail.mostTaskAt }}
            </div>
          </v-col>

          <v-divider :vertical="display.mdAndUp"></v-divider>

          <v-col md="3" cols="6" class="text-center">
            <div class="text-label">
              Total Task Created
            </div>
            <div class="title-card align-center py-2">
              {{ taskCompleteDetail.totalCreatedCurrent }}
              <v-chip 
                class="mx-2" 
                size="x-small" 
                :color="taskCompleteDetail.totalCreatedCurrent > taskCompleteDetail.totalCreatedPrev ? 'green' : 'red'"
                :append-icon="taskCompleteDetail.totalCreatedCurrent > taskCompleteDetail.totalCreatedPrev ? 'mdi-trending-up' : 'mdi-trending-down'"
                label
              >
                {{ taskCompleteDetail.totalCreatedDiff }}%
              </v-chip>
            </div>
            <div class="text-caption">
              Last Year : {{ taskCompleteDetail.totalCreatedPrev }} Task
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col md="3" cols="6" class="text-center">
            <div class="text-label">
              Most Completed Tasks At
            </div>
            <div class="title-card align-center py-2">
              {{ taskCompleteDetail.mostCategory }}
            </div>
            <div class="text-caption">
              {{ taskCompleteDetail.mostCategoryTask }} Task
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
  import Chart from 'chart.js/auto';
  import { useDisplay } from 'vuetify/lib/framework.mjs';
  import { onMounted, ref } from 'vue';

  const display = ref(useDisplay());

  onMounted(() => {
    new Chart(
      document.getElementById('chartTaskComplete'),
      {
        type: 'line',
        options: {
          plugins: {
            legend: {
              align: 'end'
            }
          }
        },
        data: {
          labels: taskCompleteData.map((d) => d.label),
          datasets: [
            {
              label: 'Complete',
              data: taskCompleteData.map((d) => d.dataComplete),
              fill: true,
              backgroundColor: 'rgba(7, 150, 229, 0.1)',
              borderColor: 'rgba(7, 150, 229, 1)',
              tension: 0.3
            },
            {
              label: 'Created Task',
              data: taskCompleteData.map((d) => d.dataNotComplete),
              fill: true,
              backgroundColor: 'rgba(255, 152, 0, 0.2)',
              borderColor: 'rgba(255, 152, 0, 1)',
              tension: 0.3
            }
          ]
        }
      }
    );
  })

  const taskCompleteData = [
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

  const taskCompleteDetail = {
    totalCompletedCurrent: 2400,
    totalCompletedPrev: 2000,
    totalCompletedDiff: 20,
    mostTask: 185,
    mostTaskAt: 'May 2022',
    totalCreatedCurrent: 1600,
    totalCreatedPrev: 1800,
    totalCreatedDiff: 20,
    mostCategory: 'UI/UX Design',
    mostCategoryTask: 240
  }
</script>
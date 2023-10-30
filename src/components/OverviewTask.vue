<template>
  <v-card class="py-2">
    <v-card-item>
      <div class="d-flex justify-space-between align-center">
        <div class="title-card">Task Due Soon</div>
        <v-btn size="small" variant="plain" color="primary">See All</v-btn>
      </div>
      <v-divider class="border-opacity-25 my-4"></v-divider>

      <ListItemTask
        v-for="(item, i) in taskList"
        :key="i"
        v-bind:data="item"
      />
      
    </v-card-item>
  </v-card>
</template>

<script setup>
  import ListItemTask from './ListItemTask.vue';

  const taskList = [
    {
      category: 'UI/UX Designer',
      title: '[Wms][Web][Task] Create Goals Design',
      priority: 'High',
      date: '06 Aug 2021',
      countFile: 2,
      countComment: 3
    },
    {
      category: 'UI/UX Designer',
      title: '[Wms][Chat] Improve Design',
      priority: 'Medium',
      date: '06 Aug 2021',
      countFile: 2,
      countComment: 44
    },
    {
      category: 'UI/UX Designer',
      title: '[Wms][Task] Improve Dashboard',
      priority: 'Low',
      date: '06 Aug 2021',
      countFile: 1,
      countComment: 6
    },
  ]
</script>
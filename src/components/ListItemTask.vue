<template>
  <div class="subcard mb-2">
    <v-row class="align-center" justify="space-between">
      <v-col md="6" cols="12">
        <div class="text-label">{{ data.category || '' }}</div>
        <div class="text-content font-weight-bold">
          {{ data.title }}
        </div>
      </v-col>
      <v-col cols="auto">
        <div class="d-flex">
          <div class="text-label mx-2">
            <v-icon 
              icon="mdi-attachment" 
              size="x-small" 
              color="grey-lighten-1" 
              style="margin-top: -2px;"
              class="pr-1"
            ></v-icon>
            {{ data.countFile }}
          </div>
          <div class="text-label mx-2">
            <v-icon 
              icon="mdi-comment-outline" 
              size="x-small" 
              color="grey-lighten-1" 
              style="margin-top: -2px;"
              class="pr-1"
            ></v-icon>
            {{ data.countComment }}
          </div>
          <v-divider
            class="mx-2"
            vertical
          ></v-divider>
          <v-chip 
            class="mx-2" 
            size="x-small" 
            :color="getColorPriority(data.priority)"
          >
            {{ data.priority }}
          </v-chip>
          <div class="text-label mx-2">
            <v-icon 
              icon="mdi-calendar" 
              size="x-small" 
              color="grey-lighten-1" 
              style="margin-top: -2px;"
              class="pr-1"
            ></v-icon>
            {{ data.date }}
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  defineProps({
    data: Object
  })

  const getColorPriority = (priority) => {
    let color = 'grey';

    if (priority == 'Medium') {
      color = 'success'
    } else if (priority == 'High') {
      color = 'red'
    }

    return color
  }
</script>
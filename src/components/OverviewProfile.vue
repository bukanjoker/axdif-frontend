<template>
  <div style="position: relative;">
    <v-card>
      <v-img src="@/assets/bg-profile.png"></v-img>

      <div class="text-center" style="margin-top: -60px;">
        <v-avatar 
          image="@/assets/user.png"
          size="100"
        ></v-avatar>
      </div>
      <v-card-item>
        <div class="text-center">
          <div class="title-card">John Doe</div>
          <div class="profile-caption">
            <v-icon 
              icon="mdi-city" 
              size="x-small" 
              color="grey-lighten-1" 
              style="margin-top: -3px;"
              class="pr-2"
            ></v-icon>
            Google Indonesia
          </div>
        </div>
        <v-divider class="border-opacity-25 my-4"></v-divider>
        <div class="d-flex justify-space-between align-center">
          <div class="profile-label">
            Employee ID
          </div>
          <div class="profile-caption">
            PT-GOO34
          </div>
        </div>
        <div class="d-flex justify-space-between align-center">
          <div class="profile-label">
            Position
          </div>
          <div class="profile-caption">
            Senior Front-End Developer
          </div>
        </div>
        <div class="d-flex justify-space-between align-center">
          <div class="profile-label">
            Join Date
          </div>
          <div class="profile-caption">
            23 Feb 2018
          </div>
        </div>
        <div class="d-flex justify-space-between align-center">
          <div class="profile-label">
            Years of Service
          </div>
          <div class="profile-caption">
            4 Years 5 Months 2 Days
          </div>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>

<style scoped>
  .profile-label {
    font-size: 14px;
    color: #808D93;
    padding: 8px 0;
  }

  .profile-caption {
    font-size: 14px;
  }
</style>
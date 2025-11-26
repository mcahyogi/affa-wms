<template>
  <v-navigation-drawer app permanent color="blue-grey-darken-1">
    <div>
      <v-row class="mb-2" style="">
        <v-col class="pb-0 d-flex justify-center my-4">
          <img
            src="@/assets/logo.svg"
            alt="Icon Appbar"
            width="25%"
            class="cursor-pointer"
            style="color: white"
          />
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
    <v-list density="comfortable">
      <v-list-item
        title="Dashboard"
        to="/dashboard"
        class="bg-blue-grey-darken-1"
      />

      <v-list-item
        title="My Task"
        to="/my-task"
        class="bg-blue-grey-darken-1"
      />
    </v-list>
  </v-navigation-drawer>
</template>
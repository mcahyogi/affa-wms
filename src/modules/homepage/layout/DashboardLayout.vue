<template>
  <v-app>
    <Sidebar />

    <AppBar />

    <v-main>
      <v-container class="ma-2">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import Sidebar from "./Sidebar.vue";
import AppBar from "./AppBar.vue";
</script>

<style>
.v-main {
  background-color: #f5f5f5 !important;
}
</style>
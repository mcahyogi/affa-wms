<template>
  <div>
    <v-card class="" elevation="2">
      <v-card-text>
        <v-row class="">
          <v-col md="6" sm="12" class="">
            <p class="text-black">
              <span class="fz-18 font-weight-bold">Trademark</span> - My Task
            </p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text>
        <v-tabs color="primary">
          <v-tab value="one">Mail Management</v-tab>
          <v-tab value="two">Task Management</v-tab>
        </v-tabs>

        <v-divider></v-divider>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <Mail />
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <v-sheet class="pa-5" color="orange">Two</v-sheet>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Mail from "./mail/main.vue";

const tab = ref('one');
</script>
<template>
  <div>
    <v-card class="" elevation="2">
      <v-card-text>
        <v-row class="">
          <v-col md="6" sm="12" class="">
            <p class="text-black">
              <span class="fz-18 font-weight-bold">Dashboard</span>
            </p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text class="">
        <v-row>
          <v-col class="ml-2">
            <p class="fz-16 font-weight-bold">Trademark Project</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <v-card class="pa-4">
              <p class="mb-2">Registration by Month</p>

              <byMonthChart />
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text>
        <v-row>
          <v-col md="6">
            <v-card class="pa-4">
              <p class="mb-2">Registration by Country</p>

              <byCountry />
            </v-card>
          </v-col>

          <v-col md="6">
            <v-card class="pa-4">
              <p class="mb-2">Registration by Goods/Services</p>

              <byGoodServices />
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text>
        <v-row>
          <v-col md="6">
            <v-card class="pa-4">
              <p class="mb-2">Registration by Priority/Non Priority</p>

              <byPriority />
            </v-card>
          </v-col>

          <v-col md="6">
            <v-card class="pa-4">
              <p class="mb-2">Registration by Progress</p>

              <byProgress />
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import byMonthChart from "./chart/byMonth.vue";
import byCountry from "./chart/byCountry.vue";
import byGoodServices from "./chart/byGoodServices.vue";
import byPriority from "./chart/byPriority.vue";
import byProgress from "./chart/byProgress.vue";
</script>

<style scoped>
</style>

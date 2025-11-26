<template>
  <div class="mx-2 my-2">
    <div class="py-4 px-2 d-flex justify-end">
      <v-btn color="blue-grey-darken-1"> Create Mail From Another </v-btn>
    </div>

    <div class="">
      <v-row>
        <v-col md="2">
          <v-btn color="blue-grey-darken-1 mr-2" block> Compose </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn color="blue-grey-darken-1 mr-2" block> Refresh </v-btn>
        </v-col>
        <v-col md="3">
          <v-text-field
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Enter Keywords"
            variant="outlined"
            :loading="loading"
            @click:append-inner="onClick"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>

    <div class="">
      <v-row>
        <v-col md="2" class="pr-0">
          <v-list
            v-model:selected="panel"
            density="comfortable"
            class="bg-blue-grey-darken-1"
          >
            <v-list-item
              v-for="item in panelItems"
              :value="item.title"
              :key="item.title"
              :title="item.title"
              class=""
            />
          </v-list>
        </v-col>

        <v-col class="pl-0">
          <v-expansion-panels
            v-model="panel"
            variant="accordion"
            :readonly="true"
            class=""
          >
            <v-expansion-panel
              v-for="item in panelItems"
              :value="item.title"
              :key="item.title"
              class=""
            >
              <v-expansion-panel-title class="cursor-default">
                <v-row>
                  <v-col md="2">IPP Master</v-col>
                  <v-col md="8">Please fill our new application</v-col>
                  <v-col md="2">Nov 10, 2025</v-col>
                </v-row>

                <template v-slot:actions="{ expanded }">
                  <v-icon
                    :icon="expanded ? 'mdi-chevron-down' : 'mdi-chevron-right'"
                  ></v-icon>
                </template>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const loaded = ref(false);
const loading = ref(false);
const panel = ref();

const panelItems = [
  {
    title: "Inbox",
  },
  {
    title: "Sent",
  },
  {
    title: "Draft",
  },
  {
    title: "Spam",
  },
];

function onClick() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
}
</script>
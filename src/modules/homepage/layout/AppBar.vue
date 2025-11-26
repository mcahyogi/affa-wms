<template>
  <v-app-bar app color="blue-grey-darken-1">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click=""></v-app-bar-nav-icon>
    </template>
    <!-- <v-app-bar-title>Dashboard</v-app-bar-title> -->

    <v-spacer />

    <v-menu
      :close-on-back="false"
      :close-on-content-click="false"
      v-model="openNotif"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn data-qa="btnNotifications" v-bind="props" class="px-0">
          <template v-if="infoNotif">
            <v-badge color="error" dot>
              <v-icon size="large" icon="mdi-bell-outline"></v-icon>
            </v-badge>
          </template>
          <template v-else>
            <v-icon size="large" icon="mdi-bell-outline"></v-icon>
          </template>
        </v-btn>
      </template>
    </v-menu>

    <v-menu class="blue-grey-darken-1">
      <template v-slot:activator="{ props }">
        <v-btn
          data-qa="btnProfileLogout"
          v-bind="props"
          class="d-flex justify-end profile-nav"
        >
          <v-list lines="three">
            <v-list-item class="pl-0 bg-blue-grey-darken-1">
              <template v-slot:append>
                <!-- <v-icon size="large" class="mt-2" color="#0d47a1">
                  mdi-power
                </v-icon> -->
                <v-btn icon="mdi-account-circle" />
              </template>
              <template v-slot:title>
                <span>Hello, Superadmin</span>
              </template>
              <!-- <template v-slot:subtitle>
                <span class="fz-12">{{ spaceText(roleProfile) }}</span>
              </template> -->
            </v-list-item>
          </v-list>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in userItems"
          :key="i"
          :value="item"
          @click="
            () => {
              menuclick(item);
            }
          "
          nav
        >
          <v-list-item-content class="d-flex align-center">
            <v-list-item-icon class="ml-2">
              <v-icon class="mr-2" size="small" :color="item.color">{{
                item.icon
              }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              v-text="item.text"
              class="mt-1"
              :data-qa="item.text.split(' ').join('') + 'List'"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const openNotif = ref(false);
const infoNotif = ref(false);

const userItems = ref([
  {
    text: "My Profile",
    icon: "mdi-account-circle",
    link: "profile",
    // color: "#2196F3",
  },
  {
    text: "Logout",
    icon: "mdi-logout",
    link: "",
    // color: "red",
  },
]);
</script>

<style scoped>
.profile-nav {
  padding: 0px;
  margin-right: 30px !important;
}
</style>
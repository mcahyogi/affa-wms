<template>
  <div>
    <v-row class="h-100 " style="min-height: 102vh">
      <v-col
        md="6"
        class="d-flex justify-center bg-blue-grey-darken-1"
        style="min-height: 100vh"
      >
        <v-card
          class="bg-blue-grey-darken-1 py-7 bs align-self-center"
          width="500"
        >
          <v-card-text>
            <v-row>
              <v-col class="d-flex justify-center">
                <img src="@/assets/logo.svg" alt="sign in" width="100" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="d-flex flex-column align-center">
            <p class="text-h4 mb-4">Welcome</p>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              exercitationem amet quis quos neque repellat, tenetur, fugit
              iusto, ex delectus praesentium architecto aspernatur soluta
              voluptatibus asperiores dolores facilis necessitatibus libero?
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col md="6" class="d-flex justify-center" style="min-height: 100vh">
        <v-card class="bs align-self-center" width="100%">
          <v-card-text>
            <v-row>
              <v-col class="d-flex justify-center">
                <img src="@/assets/logo.svg" alt="sign in" width="80" />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text class="d-flex flex-column align-center py-0">
            <p class="fz-18 font-weight-bold">Work Management System</p>
            <p class="fz-18">Affa Intelectual Property Rights</p>
          </v-card-text>

          <!-- <v-card-text class="d-flex flex-column">
            <v-row>
              <v-col md="9" class="ml-auto">
                <p class="fz-16">Login</p>
              </v-col>
            </v-row>
          </v-card-text> -->

          <v-card-text class="">
            <v-row>
              <v-col md="9" class="ml-auto mt-2">
                <p class="fz-16">Login</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6" class="mx-auto">
                <v-text-field
                  v-model="email"
                  :readonly="loading"
                  :rules="[required]"
                  class="mb-2"
                  label="Username"
                  clearable
                  variant="underlined"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  :rules="[required]"
                  density="compact"
                  label="Password"
                  variant="underlined"
                  @click:append-inner="visible = !visible"
                ></v-text-field>

                <br />

                <v-btn
                  :loading="loading"
                  color="blue-grey-darken-1"
                  size="large"
                  type="submit"
                  variant="elevated"
                  block
                >
                  Sign In
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6" class="mx-auto">
                <v-divider :thickness="3"
                  ><span class="font-weight-bold"> Or </span></v-divider
                >
              </v-col>
            </v-row>

            <v-row>
              <v-col md="6" class="mx-auto">
                <v-btn
                  :loading="loading"
                  class="rounded-xl px-2"
                  color="blue-grey-darken-1"
                  type="submit"
                  variant="elevated"
                  prepend-icon="mdi-google"
                  block
                >
                  Sign in with Google Account
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
                <v-col md="6" class="d-flex justify-space-between mx-auto mt-4">
                    <p class="text-blue text-decoration-underline">Reset Password</p>
                    <p class="text-blue text-decoration-underline">Create Account</p>
                </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref(null);
const password = ref(null);
const visible = ref(false);

function required(v) {
  return !!v || "Field is required";
}
</script>


<style scoped>
::v-deep(.v-messages__message) {
  margin-left: 4px !important;
}
</style>
<template>
  <div class="container rounded-5 p-4 border border-dark shadow-sm sticky-top">
    <div class="row">
      <div class="d-flex flex-column align-items-center">
        <img
          :src="`http://127.0.0.1:8000/storage/${user.profile_photo_path}`"
          class="img-thumbnail w-25 rounded-5"
        />
        <p class="text-dark fs-4 fw-bold mt-2">{{ user.name }}</p>

        <RouterLink
          :to="{
            name: 'editProfile',
            query: {
              id: user.id,
              name: user.name,
              email: user.email,
              address: user.address,
              phone: user.phone,
              profilePhoto: user.profile_photo_path,
            },
          }"
          class="btn btn-dark text-light rounded-3"
        >
          <i class="fa-solid fa-pen-to-square me-2" style="color: #ffffff"></i
          >Edit Profile
        </RouterLink>
      </div>
    </div>
    <div class="row my-3">
      <p class="bg-dark text-light text-uppercase">Informations</p>
      <div class="d-flex flex-column align-items-start">
        <span class="fs-6 fw-lighter btn btn-dark text-light rounded-2 my-2"
          >Email : {{ user.email }}</span
        >
        <span class="fs-6 fw-lighter btn btn-dark text-light rounded-2 my-2"
          >Address : {{ user.address }}</span
        >
        <span class="fs-6 fw-lighter btn btn-dark text-light rounded-2 my-2"
          >Phone : {{ user.phone }}</span
        >
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 my-2">
        <button
          class="btn btn-danger text-light rounded-3 w-100"
          @click="logout"
        >
          <i
            class="fa-solid fa-right-from-bracket me-2"
            style="color: #ffffff"
          ></i
          >Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileComponent",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("apiToken");
      localStorage.removeItem("user");
      this.$router.push({ name: "login" });
    },
  },
  async beforeMount() {
    const userData = store.getters.getUser;
    this.user = userData;
  },
});
</script>

<style scoped>
.container {
  background-color: #ffffff;
}
</style>

<template>
  <div class="row m-5">
    <div
      class="col-6 offset-3 border border-dark border-1 shadow-sm rounded-5 d-flex flex-column p-4 screen-center"
    >
      <p class="text-uppercase fs-3 fw-light text-center">
        <span class="fw-bold">Hello Good Sir,</span>You Can Login Here!
      </p>

      <label for="Email" class="form-label text-muted">Email</label>
      <input
        type="email"
        id="Email"
        class="form-control"
        v-model="payload.email"
      />

      <label for="Password" class="form-label text-muted mt-3">Password</label>
      <input
        type="password"
        id="Password"
        class="form-control"
        v-model="payload.password"
      />

      <button
        @click="submit"
        class="btn btn-dark text-light rounded-3 text-uppercase col-4 offset-4 my-3"
      >
        Login
      </button>

      <SocialMediaComponent />

      <div class="row my-2">
        <RouterLink
          :to="{ name: 'register' }"
          class="text-decoration-none fs-6 text-center text-hover"
          >Don't you have an account?</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import SocialMediaComponent from "@/components/SocialMediaComponent.vue";
import store from "@/store";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "LoginView",
  components: {
    SocialMediaComponent,
    RouterLink,
  },
  data() {
    return {
      payload: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async submit() {
      await store.dispatch("loginRequest", this.payload);

      if (store.getters.getApiToken != null) {
        this.$router.push({
          name: "home",
        });
      }
    },
  },
});
</script>

<style scoped>
.text-hover {
  color: #6c757d;
}
.text-hover:hover {
  color: #000;
}
</style>

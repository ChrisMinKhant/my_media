<template>
  <div class="row m-5">
    <div
      class="col-6 offset-3 border border-dark border-1 shadow-sm rounded-5 d-flex flex-column p-4 screen-center"
    >
      <div
        class="alert alert-success alert-dismissible fade show"
        role="alert"
        v-if="success != null"
      >
        {{ success }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <p class="text-uppercase fs-3 fw-light text-center">
        <span class="fw-bold">Hello Good Sir,</span>You Can Register Here!
      </p>
      <label for="Name" class="form-label text-muted">Name</label>
      <input
        type="text"
        id="Name"
        class="form-control"
        v-model="payload.name"
      />
      <div v-if="inputErrors != null">
        <small
          class="text-danger"
          v-for="(errors, key) in inputErrors.name"
          :key="key"
          >{{ errors }}</small
        >
      </div>

      <label for="Email" class="form-label text-muted">Email</label>
      <input
        type="email"
        id="Email"
        class="form-control"
        v-model="payload.email"
      />
      <div v-if="inputErrors != null">
        <small
          class="text-danger"
          v-for="(errors, key) in inputErrors.email"
          :key="key"
          >{{ errors }}</small
        >
      </div>

      <label for="Phone" class="form-label text-muted">Phone</label>
      <input
        type="number"
        id="Phone"
        class="form-control"
        v-model="payload.phone"
      />
      <div v-if="inputErrors != null">
        <small
          class="text-danger"
          v-for="(errors, key) in inputErrors.phone"
          :key="key"
          >{{ errors }}</small
        >
      </div>

      <label for="Address" class="form-label text-muted">Address</label>
      <input
        type="text"
        id="Address"
        class="form-control"
        v-model="payload.address"
      />
      <div v-if="inputErrors != null">
        <small
          class="text-danger"
          v-for="(errors, key) in inputErrors.address"
          :key="key"
          >{{ errors }}</small
        >
      </div>

      <label for="Password" class="form-label text-muted mt-3">Password</label>
      <input
        type="password"
        id="Password"
        class="form-control"
        v-model="payload.password"
      />
      <div v-if="inputErrors != null">
        <small
          class="text-danger"
          v-for="(errors, key) in inputErrors.password"
          :key="key"
          >{{ errors }}</small
        >
      </div>

      <label for="Confirm_Password" class="form-label text-muted mt-3"
        >Confirm Password</label
      >
      <input
        type="password"
        id="Confirm_Password"
        class="form-control"
        v-model="payload.confirmPassword"
      />
      <div v-if="inputErrors != null">
        <small
          class="text-danger"
          v-for="(errors, key) in inputErrors.confirmPassword"
          :key="key"
          >{{ errors }}</small
        >
      </div>

      <button
        @click="submit"
        class="btn btn-dark text-light rounded-3 text-uppercase col-4 offset-4 my-3"
      >
        Register
      </button>

      <SocialMediaComponent />

      <div class="row my-2">
        <RouterLink
          :to="{ name: 'login' }"
          class="text-decoration-none fs-6 text-center text-hover"
          >Do you already have an account?</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import SocialMediaComponent from "@/components/SocialMediaComponent.vue";
import axios from "axios";
import { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  name: "RegisterView",
  components: {
    SocialMediaComponent,
  },
  data() {
    return {
      payload: {
        name: null,
        email: null,
        phone: null,
        address: null,
        password: null,
        confirmPassword: null,
      },
      inputErrors: [],
    };
  },
  methods: {
    async submit() {
      /*
      This function is responsible for updating user data to the database
      */
      const response = await axios
        .post("http://127.0.0.1:8000/api/register", this.payload, {
          headers: {
            Accept: "application/json",
            "Content-Type": "appliction/json",
          },
        })
        .catch(function (error) {
          store.dispatch("setInputErrors", error.response.data.errors);
        });

      this.inputErrors = null;

      if (Object.values(store.getters.getInputErrors).length != 0) {
        this.inputErrors = store.getters.getInputErrors;
        store.dispatch("emptyInputErrors");
      }

      this.success = response.data.status;

      this.$router.push({ name: "login" });
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

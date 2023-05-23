<template>
  <div class="col-6 offset-3">
    <div
      class="form border border-dark border-1 shadow-sm rounded-5 d-flex flex-column p-3"
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
      <p class="fs-4 fw-light text-dark text-center text-uppercase">
        <span class="fw-bold">Hello Good Sir</span>, You Can Edit Your Profile
        Here!
      </p>
      <div class="img-container text-center">
        <img
          :src="`http://127.0.0.1:8000/storage/${profilePhoto}`"
          class="img-thumbnail"
        />
        <button type="button" class="pencil-button" @click="showImageEditForm">
          <i class="fa-solid fa-pencil"></i>
        </button>
      </div>
      <!-- Personal Information Input Start -->
      <div class="d-flex flex-column mt-3">
        <p class="fs-5 fw-light text-dark text-uppercase">
          Personal Information
        </p>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInputName"
            placeholder="name"
            v-model="name"
            autocomplete="off"
          />
          <label for="floatingInputName">Your Name</label>
          <div v-if="inputErrors != null">
            <small
              class="text-danger"
              v-for="(errors, key) in inputErrors.name"
              :key="key"
              >{{ errors }}</small
            >
          </div>
        </div>
      </div>
      <!-- Personal Information Input End -->
      <!-- Contact Information Input Start -->
      <div class="d-flex flex-column mt-3">
        <p class="fs-5 fw-light text-dark text-uppercase">
          Contact Information
        </p>
        <!-- Email Input -->
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInputEmail"
            placeholder="email@gmail.com"
            v-model="email"
            autocomplete="off"
          />
          <label for="floatingInputEmail">Your Email Address</label>
          <div v-if="inputErrors != null">
            <small
              class="text-danger"
              v-for="(errors, key) in inputErrors.email"
              :key="key"
              >{{ errors }}</small
            >
          </div>
        </div>
        <!-- Phone Number Input -->
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingInputPhone"
            placeholder="Phone Number"
            v-model="phone"
            autocomplete="off"
          />
          <label for="floatingInputPhone">Your Phone Number</label>
          <div v-if="inputErrors != null">
            <small
              class="text-danger"
              v-for="(errors, key) in inputErrors.phone"
              :key="key"
              >{{ errors }}</small
            >
          </div>
        </div>
        <!-- Address Input -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInputAddress"
            placeholder="Address"
            v-model="address"
            autocomplete="off"
          />
          <label for="floatingInputAddress">Your Address</label>
          <div v-if="inputErrors != null">
            <small
              class="text-danger"
              v-for="(errors, key) in inputErrors.address"
              :key="key"
              >{{ errors }}</small
            >
          </div>
        </div>
      </div>
      <!-- Contact Infromation Input End -->

      <div class="row">
        <button
          @click="submit"
          class="btn btn-dark text-light col-8 offset-2 rounded-3"
        >
          <i class="fa-solid fa-circle-check me-2" style="color: #ffffff"></i
          >Confirm Update
        </button>
      </div>
    </div>

    <div v-show="showForm">
      <!-- Profile Photo Change Form Start -->
      <div
        class="border border-dark border-1 shadow-sm rounded-5 d-flex flex-column p-3"
        id="img-change-form"
      >
        <button
          type="button"
          class="close-button fs-3 fw-bold text-end mb-3"
          @click="closeImageEditForm"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <p class="fs-5 fw-light text-uppercase text-center">
          <span class="fw-bold">Hello Good Sir</span>, You Can Change Your
          Profile Photo Here!
        </p>
        <div class="d-flex flex-column align-items-start my-3">
          <label for="profile_photo" class="form-label"
            >Your Profile Photo</label
          >
          <input
            type="file"
            id="profile_photo"
            class="form-control"
            @change="setProfilePhoto"
          />
          <div v-if="inputErrors != null">
            <small
              class="text-danger"
              v-for="(errors, key) in inputErrors.profilePhoto"
              :key="key"
              >{{ errors }}</small
            >
          </div>
        </div>
        <div class="row">
          <button
            class="btn btn-dark text-light rounded-3 col-4 offset-4"
            @click="changePhoto"
          >
            <i class="fa-solid fa-circle-check me-2" style="color: #ffffff"></i
            >Change
          </button>
        </div>
      </div>
      <!-- Profile Photo Change Form End -->
    </div>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditFormComponent",
  data() {
    return {
      id: this.$route.query.id,
      name: this.$route.query.name,
      email: this.$route.query.email,
      phone: this.$route.query.phone,
      address: this.$route.query.address,
      profilePhoto: this.$route.query.profilePhoto,
      updateProfilePhoto: null,
      showForm: false,
      inputErrors: null,
      success: null,
    };
  },
  methods: {
    showImageEditForm() {
      this.showForm = true;
    },
    closeImageEditForm() {
      this.showForm = false;
    },
    async submit() {
      let payload = {
        id: this.id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      };

      /*
      This function is responsible for updating user data to the database
      */
      const response = await axios
        .post("http://127.0.0.1:8000/api/account/update", payload, {
          headers: {
            Accept: "application/json",
            Authorization: localStorage.getItem("apiToken"),
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

      store.dispatch("updateUser");
    },

    setProfilePhoto(e) {
      this.updateProfilePhoto = e.target.files[0];
    },

    async changePhoto() {
      const formData = new FormData();
      formData.append("File", this.updateProfilePhoto);
      let payload = {
        id: this.id,
        profilePhoto: this.updateProfilePhoto,
      };
      console.log(formData);
      const response = await axios
        .post("http://127.0.0.1:8000/api/account/changeProfilePhoto", payload, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("apiToken"),
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
    },
  },
});
</script>

<style scoped>
img {
  max-width: 20%;
}

.img-container {
  position: relative;
}

.pencil-button {
  position: absolute;
  top: 75%;
  right: 41%;
  background: none;
  border: none;
  outline: none;
  padding: 5px;
}
.fa-pencil {
  color: #000;
}

.fa-pencil:hover {
  color: #717171;
}

#img-change-form {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #fff;
}

.close-button {
  background: none;
  border: none;
}

.fa-xmark:hover {
  color: #717171;
}
</style>

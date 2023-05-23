<template>
  <div class="row"><NavComponent /></div>
  <div class="row">
    <div class="col-8 offset-2">
      <div class="row text-center">
        <p class="fs-1 fw-bold">Contact Us</p>
        <p class="fs-4 fw-light">
          <span class="fw-bold">Hello Good Sir,</span> get in touch with us!
        </p>
      </div>
      <div class="row align-items-start my-5">
        <div class="col-4 d-flex flex-column align-items-center">
          <i
            class="fa-solid fa-location-dot fs-3 fw-bold"
            style="color: #000000"
          ></i>
          <p class="text-muted text-center p-3">
            13rd Ward, South Ookalapa Township, Yangon.
          </p>
        </div>
        <div class="col-4 d-flex flex-column align-items-center">
          <i class="fa-solid fa-phone fs-3 fw-bold" style="color: #000000"></i>
          <p class="text-muted text-center p-3">+959799793920</p>
        </div>
        <div class="col-4 d-flex flex-column align-items-center">
          <i
            class="fa-solid fa-envelope fs-3 fw-bold"
            style="color: #000000"
          ></i>
          <p class="text-muted text-center p-3">aznews@gmail.com.org</p>
        </div>
      </div>

      <form action="#" class="border border-dark border-1 rounded-5 p-3">
        <p class="fs-2 text-start fw-bold">Contact Form</p>
        <div class="row">
          <div class="col-6 d-flex flex-column">
            <div class="d-flex flex-column my-3">
              <p class="fs-4 fw-light">Personal Information</p>
              <label for="Name" class="form-label text-muted">Your Name</label>
              <input type="text" id="Name" class="form-control" />
            </div>
            <div class="d-flex flex-column my-3">
              <p class="fs-4 fw-light">Contact Information</p>
              <label for="Email" class="form-label text-muted"
                >Your Phone Number</label
              >
              <input type="email" id="Email" class="form-control" />

              <label for="Phone_Number" class="form-label text-muted mt-2"
                >Your Email</label
              >
              <input type="number" id="Phone_number" class="form-control" />
            </div>
          </div>
          <div class="col-6 my-3">
            <label for="Message" class="form-label text-muted"
              >Your Message</label
            >
            <textarea
              id="Message"
              cols="100"
              rows="10"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="row mt-3">
          <button
            type="submit"
            class="btn btn-dark text-light col-6 offset-3 rounded-4"
          >
            <i class="fa-solid fa-paper-plane me-2" style="color: #ffffff"></i
            >Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="row"><FooterComponent /></div>
</template>

<script>
import { defineComponent } from "vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "ContactView",
  components: {
    NavComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
textarea {
  height: 90%;
}
</style>

<template>
  <div class="container-fluid p-5 mt-5">
    <div class="row">
      <form action="#" class="col-6">
        <p class="text-uppercase fs-1 fw-bold text-light">
          AZ News, Blues of the Night.
        </p>
        <div class="mb-3 input-group border broder-light border-1 rounded-3">
          <input
            type="text"
            class="form-control"
            placeholder="Your Email Address"
            aria-label="Your Email Address"
            aria-describedby="button-addon2"
          />
          <button
            class="btn send-button fw-bold"
            type="button"
            id="button-addon2"
          >
            <i class="fa-solid fa-paper-plane" style="color: #ffffff"></i>
          </button>
        </div>
      </form>
    </div>
    <div class="row mt-5">
      <div class="col d-flex flex-column">
        <img src="../assets/newspaper.png" />
        <p class="text-uppercase fs-4 text-light">
          Get The Truth With AZ News!
        </p>
      </div>
      <div class="col d-flex flex-column align-items-center text-center">
        <RouterLink :to="{ name: 'home' }" class="btn fw-bold text-uppercase"
          >Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'about' }"
          class="btn fw-bold text-uppercase ms-2"
          >About</RouterLink
        >
        <RouterLink
          :to="{ name: 'contact' }"
          class="btn fw-bold text-uppercase ms-2"
          >Contact</RouterLink
        >
      </div>
      <div class="col d-flex flex-column align-items-start">
        <p class="text-light footer-right-text">Let's Chat</p>
        <p class="text-light footer-right-text">copyright@aznews2023</p>
        <div class="d-flex">
          <i class="fa-brands fa-facebook me-3" style="color: #ffffff"></i>
          <i class="fa-brands fa-instagram me-3" style="color: #ffffff"></i>
          <i class="fa-brands fa-linkedin" style="color: #ffffff"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
.container-fluid {
  background-color: #000;
}

img {
  max-width: 10%;
}

a {
  font-size: 0.7rem;
  color: #ffffff;
}

.footer-right-text {
  font-size: 0.7rem;
}
</style>

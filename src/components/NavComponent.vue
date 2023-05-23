<template>
  <div
    class="container-fluid mb-4 d-flex align-items-center justify-content-between shadow-sm py-3"
  >
    <div class="d-flex align-items-center">
      <img src="../assets/newspaper.png" />
      <span class="fs-2 fw-bold text-light ms-3 text-uppercase">AZ News</span>
    </div>
    <div class="d-flex align-items-center">
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
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavComponent",
});
</script>

<style scoped>
.container-fluid {
  background-color: #000;
}

img {
  max-width: 5%;
}

a {
  color: #ffffff;
}

a:hover {
  color: rgb(151, 151, 151);
}
</style>

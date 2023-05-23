<template>
  <div class="row"><NavComponent /></div>
  <div class="row m-5">
    <div class="col-6 align-self-center">
      <p class="fw-bold text-uppercase" id="About-Us">About Us</p>
      <p class="fs-5 text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum
        illum quibusdam amet iste, corporis consectetur voluptas magni adipisci,
        rerum doloribus deleniti nulla architecto odio delectus quaerat nisi
        veritatis atque. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veniam earum illum quibusdam amet iste, corporis consectetur
        voluptas magni adipisci, rerum doloribus deleniti nulla architecto odio
        delectus quaerat nisi veritatis atque. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veniam earum illum quibusdam amet iste,
        corporis consectetur voluptas magni adipisci, rerum doloribus deleniti
        nulla architecto odio delectus quaerat nisi veritatis atque.
      </p>
      <a href="#" class="btn btn-dark text-light rounded-3">Contact Us</a>
    </div>
    <div class="col-6 align-self-center text-center">
      <img src="../assets/3539489.jpg" />
    </div>
  </div>
  <div class="row"><FooterComponent /></div>
</template>

<script>
import { defineComponent } from "vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    NavComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
#About-Us {
  font-size: 300%;
}

img {
  max-width: 75%;
}
</style>

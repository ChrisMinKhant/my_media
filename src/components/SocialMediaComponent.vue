<template>
  <div class="row border-top border-dark">
    <div
      class="d-flex justify-content-around align-items-center fs-3 my-3 text-center"
    >
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-google"></i>
      <i class="fa-brands fa-linkedin"></i>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialMediaComponent",
});
</script>

<style scoped>
i:hover {
  color: rgb(151, 151, 151);
  cursor: pointer;
}
</style>

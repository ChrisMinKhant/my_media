<template>
  <div>
    <div class="row"><NavComponent /></div>
    <div class="row"><EditFormComponent /></div>
    <div class="row"><FooterComponent /></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import EditFormComponent from "@/components/EditFormComponent.vue";

export default defineComponent({
  name: "EditProfileView",
  components: {
    NavComponent,
    FooterComponent,
    EditFormComponent,
  },
});
</script>

<style lang="stylus" scoped></style>

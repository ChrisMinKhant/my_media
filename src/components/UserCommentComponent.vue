<template>
  <div class="row my-3">
    <div class="col-1">
      <img
        :src="'../../../my_media_admin_pannel/public/' + userProfile"
        class="img-thumbnail rounded-5"
      />
    </div>
    <div class="col-8 d-flex flex-column">
      <p class="fs-6 fw-bold text-uppercase">{{ userName }}</p>
      <p class="fs-6 text-muted">
        {{ userComment }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserCommentComponent",
  props: {
    userName: String,
    userComment: String,
    userProfile: String,
  },
});
</script>

<style scoped></style>

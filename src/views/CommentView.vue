<template>
  <div class="row"><NavComponent /></div>
  <div class="row">
    <div class="col-11 d-flex flex-column m-3">
      <p class="fw-bold text-uppercase fs-3">Comments</p>
      <div class="my-5">
        <!-- User Comment Start -->
        <div
          class="row my-3"
          v-for="(commentData, key) in filteredLikeComments"
          :key="key"
        >
          <div class="col-1">
            <img class="img-thumbnails rounded-5 img-width" />
          </div>
          <div class="col-8 d-flex flex-column">
            <p class="fs-6 fw-bold text-uppercase">
              {{ commentData.user_name }}
            </p>
            <p class="fs-6 text-muted">
              {{ commentData.comment }}
            </p>
          </div>
        </div>
        <!-- User Comment End -->
      </div>
      <div>
        <CommentFormComponent :postId="$route.query.postId" />
      </div>
    </div>
  </div>
  <div class="row"><FooterComponent /></div>
</template>

<script>
import { defineComponent } from "vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CommentFormComponent from "@/components/CommentFormComponent.vue";
import store from "@/store";

export default defineComponent({
  name: "CommentView",
  components: {
    NavComponent,
    CommentFormComponent,
    FooterComponent,
  },
  data() {
    return {
      filteredLikeComments: [],
    };
  },
  async beforeMount() {
    await store.dispatch("filterLikeComments", this.$route.query.postId);
    this.filteredLikeComments = store.getters.getFilteredLikeComments;
  },
});
</script>

<style scoped>
.img-width {
  max-width: 100%;
}
</style>

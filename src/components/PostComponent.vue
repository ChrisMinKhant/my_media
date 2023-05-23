<template>
  <div class="card rounded-5 border-dark border-2 mb-3">
    <img
      :src="`http://127.0.0.1:8000/storage/${postImage}`"
      class="card-img-top align-self-center m-2"
      v-if="postImage != null"
    />
    <p
      v-else
      class="fs-4 fw-bold text-muted text-center btn btn-light shadow-sm rounded-5 m-5"
    >
      There is no image for this post
    </p>
    <div class="card-body">
      <div
        class="d-flex justify-content-between text-uppercase align-items-center mb-3"
      >
        <span class="fs-3 fw-bold">{{ title }}</span>
        <span class="btn btn-sm btn-dark text-light rounded-4 text-uppercase"
          >Created At : {{ createdAt }}</span
        >
      </div>
      <div class="d-flex flex-column mb-3">
        <span class="fs-4 fw-bold text-muted">Description</span>
        <span class="fs-6">{{ description }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <button class="btn btn-dark rounded-4" @click="$emit('likePost')">
          <i class="fa-regular fa-heart me-2" style="color: {{ color }}"></i
          >{{ like }} <span v-if="like > 1">Likes</span><span v-else>Like</span>
        </button>
        <RouterLink
          :to="{ name: 'comments', query: { postId: id } }"
          class="btn btn-dark rounded-4"
        >
          <i class="fa-regular fa-comment me-2" style="color: {{ color }}"></i
          >Comment
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { stringifyQuery } from "vue-router";

export default defineComponent({
  name: "PostComponent",
  data() {
    return {
      color: "#ffffff",
    };
  },
  props: {
    id: Number,
    title: String,
    description: String,
    createdAt: String,
    like: Number,
    postImage: String,
  },
});
</script>

<style scoped>
img {
  max-width: 35%;
}
</style>

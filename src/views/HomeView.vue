<template>
  <div class="row"><NavComponent /></div>
  <div class="row">
    <div class="col-lg-3"><ProfileComponent /></div>
    <div class="col-lg-6 px-5">
      <PostComponent
        v-for="(post, key) in posts"
        :key="key"
        :id="post.id"
        :title="post.title"
        :description="post.description"
        :createdAt="simplifiedDate(post.created_at)"
        :like="post.likeCount"
        :postImage="post.image"
        @likePost="likePost(post.id)"
      />
    </div>
    <div class="col-lg-3">
      <CategoryComponent @filterPost="filterPost" @defaultPost="allPosts" />
    </div>
  </div>
  <div class="row"><FooterComponent /></div>
</template>

<script>
import CategoryComponent from "@/components/CategoryComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import PostComponent from "@/components/PostComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import store from "@/store";
import { defineComponent, onBeforeMount } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ProfileComponent,
    NavComponent,
    CategoryComponent,
    PostComponent,
    FooterComponent,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    simplifiedDate(stringDate) {
      let formattedDate = stringDate.split("T");
      return formattedDate[0];
    },
    filterPost(categoryId) {
      store.dispatch("filterByCategory", { categoryId });
      this.posts = store.getters.getFilteredPosts;
    },
    async allPosts() {
      await store.dispatch("apiPosts");
      this.posts = store.getters.getAllPosts;
    },
    async likePost(postId) {
      await store.dispatch("likePost", postId);
      this.posts = store.getters.getFilteredPosts;
    },
  },
  async beforeMount() {
    if (localStorage.getItem("apiToken") == null) {
      this.$router.push({ name: "login" });
    }

    this.allPosts();
  },
});
</script>

<style scoped></style>

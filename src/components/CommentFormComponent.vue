<template>
  <div class="form w-75">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Your Comment"
        aria-label="Your Comment"
        aria-describedby="button-comment"
        v-model="comment"
      />
      <button class="btn btn-outline-dark" @click="submit" id="button-comment">
        Send
      </button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommentFormComponent",
  data() {
    return {
      comment: null,
      storeUser: null,
    };
  },
  props: {
    postId: String,
  },
  methods: {
    async submit() {
      await axios.post(
        "http://127.0.0.1:8000/api/likecomment/likecomment/" +
          this.storeUser.id +
          "/" +
          this.$props.postId,
        { comment: this.comment },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("apiToken"),
          },
        }
      );
    },
  },

  async beforeMount() {
    this.storeUser = await store.getters.getUser;
  },
});
</script>

<style scoped></style>

<template>
  <div
    class="container rounded-5 p-4 border border-dark shadow-sm sticky-top mb-5"
  >
    <div class="row d-flex flex-column">
      <p
        class="text-center fw-bold text-uppercase fs-3 border-bottom border-dark border-3"
      >
        Categories
      </p>
      <div class="scrollable-div d-flex flex-column">
        <button
          class="btn btn-dark text-light text-uppercase mb-3"
          v-for="(category, key) in categories"
          :key="key"
          @click="$emit('filterPost', category.id)"
        >
          {{ category.title }}
        </button>
      </div>
      <button
        class="btn btn-dark text-light text-uppercase mt-3"
        @click="$emit('defaultPost')"
      >
        Default
      </button>
      <a href="#top" class="btn btn-dark text-light text-uppercase my-3"
        ><i class="fa-solid fa-circle-arrow-up me-2" style="color: #ffffff"></i
        >Go To Top</a
      >
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryComponent",
  data() {
    return {
      categories: null,
    };
  },
  methods: {
    // filterPost(categoryId) {
    //   store.dispatch("filterByCategory", { categoryId });
    // },
  },
  async beforeMount() {
    await store.dispatch("apiCategories");
    this.categories = store.getters.getCategories;
  },
});
</script>

<style scoped>
.container {
  background-color: #ffffff;
}

.scrollable-div {
  height: 50vh;
  overflow: scroll;
  overflow-x: hidden;
}

.scrollable-div::-webkit-scrollbar {
  display: none;
}
</style>

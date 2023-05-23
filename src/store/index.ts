import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      id:null,
    },
    apiToken: {},
    posts: [],
    filteredPosts: [],
    likeComment: [],
    filteredLikeComments: [],
    categories: [],
    inputErrors: {},
  },
  getters: {
    //This getters function is to get all posts data.
    getAllPosts(state) {
      return state.posts;
    },

    //This getters function is to get filterd posts data.
    getFilteredPosts(state) {
      return state.filteredPosts;
    },

    //This getters function is to get all cateogries data.
    getCategories(state) {
      return state.categories;
    },

    //This getters function is to get filteredLikeComments data.
    getFilteredLikeComments(state) {
      return state.filteredLikeComments;
    },

    getInputErrors(state) {
      return state.inputErrors;
    },

    getApiToken(state) {
      return state.apiToken;
    },

    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    addLikeCount(state) {
      /* 
        This piece of code is responsible for adding likeCount object to
        each post with releavent data to it.
        You need to use Object.assign() function to add new property to object.
      */
      state.posts.forEach(function (post) {
        let temporaryLikeCount = 0;
        Object.assign(post, {
          likeCount: temporaryLikeCount,
        });
        state.likeComment.forEach(function (like) {
          if (post["id"] == like["post_id"]) {
            if (like["like"] == 1) {
              temporaryLikeCount++;
              Object.assign(post, {
                likeCount: temporaryLikeCount,
              });
            }
          }
        });
      });
    },

    //This is a funtion to filter the posts according to the categories.
    filterByCategory(state, categoryId) {
      state.filteredPosts = [];
      state.posts.forEach(function (post) {
        if (post["category_id"] == categoryId) {
          state.filteredPosts.push(post);
        }
      });
    },

    //This is a function to filter likeComment data according to the post id.
    filterLikeCommentByPostId(state, postId) {
      state.filteredLikeComments = [];
      state.likeComment.forEach(function (comment) {
        if (comment["post_id"] == postId) {
          if (comment["comment"] != null) {
            state.filteredLikeComments.push(comment);
          }
        }
      });
    },

    setInputErrors(state, payload) {
      state.inputErrors = payload;
    },

    emptyInputErrors(state) {
      state.inputErrors = [];
    },

    setUser(state) {
      state.user = JSON.parse(localStorage.getItem("user") || '{}');
    },

    setApiToken(state) {
      state.apiToken = localStorage.getItem("apiToken") as string;
    },
  },
  actions: {
    async apiPosts({ commit }) {
      commit("setApiToken");
      commit("setUser");

      /*
      This piece of code get post data from laravel post database and
      update to the posts.
      */
      const postApiResponse = await axios.get(
        "http://127.0.0.1:8000/api/post/get",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('apiToken'),
          },
        }
      );
      this.state.posts = postApiResponse.data.posts;

      /*
      This piece of code get like and comment data from laravel like and comment database and
      update to the likeComment.
      */
      const likeCommentApiresponse = await axios.get(
        "http://127.0.0.1:8000/api/likecomment/get",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('apiToken'),
          },
        }
      );
      this.state.likeComment = likeCommentApiresponse.data.likeCommentData;

      //This is function call to mutations' addLikeCount.
      commit("addLikeCount");

      this.state.filteredPosts = this.state.posts;
    },

    async apiCategories() {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/category/get",
        {
          headers: {
            Accept: "application/json",
            "Content-Type" : 'application/json',
            Authorization: localStorage.getItem('apiToken'),
          },
        }
      );
      this.state.categories = response.data.categories;
    },

    filterByCategory({ commit }, payload) {
      commit("filterByCategory", payload.categoryId);
    },

    async likePost({ commit }, postId) {

      await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/likecomment/likecomment/'+this.state.user.id+'/'+ postId,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem('apiToken'),
        }
      });

      await this.dispatch("apiPosts");
    },

    async filterLikeComments({ commit }, payload) {
      /*
      This piece of code get like and comment data from laravel like and comment database and
      update to the likeComment.
      */
      const likeCommentApiresponse = await axios.get(
        "http://127.0.0.1:8000/api/likecomment/get",
        {
          headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization: localStorage.getItem('apiToken'),
          },
        }
      );
      this.state.likeComment = likeCommentApiresponse.data.likeCommentData;

      commit("filterLikeCommentByPostId", payload);
    },

    setInputErrors({ commit }, payload) {
      commit("setInputErrors", payload);
    },

    emptyInputErrors({ commit }) {
      commit("emptyInputErrors");
    },

    async loginRequest({ commit }, payload) {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        payload
      );
      localStorage.setItem("apiToken", "Bearer " + response.data.apiToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      commit("setApiToken");
      commit("setUser");
    },

    async updateUser({ commit }) {
      /*
      This piece of code get user data from laravel post database and
      update to the user profile.
      */
      const userApiResponse = await axios.get(
        "http://127.0.0.1:8000/api/account/get/"+this.state.user.id,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('apiToken'),
          },
        }
      );
      localStorage.setItem('user', JSON.stringify(userApiResponse.data.accountData));
    }
  },
  modules: {},
});

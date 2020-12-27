import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: './data.json',
    response: {
      categories: [],
      ingridients: {},
      menu: [],
      markets: {},
      modal: [],
    },
    addedProducts: [],
    loading: true,
    currentCategory: 'pizza',
  },

  mutations: {
    setResponse(state, response) {
      state.response = response;
    },

    toggleLoader(state, loading) {
      state.loading = loading;
    },

    setCurrentCategory(state, category) {
      state.currentCategory = category;
    },
  },

  actions: {
    async fetchData({ commit }) {
      const response = await fetch(this.state.url)
        .then(response => {
          return response.json();
        })
        .then(json => {
          return json;
        })
        .catch(error => console.error(error));

      response.menu.map((product, index) => {
        Vue.set(product, 'id', index + 1);
        Vue.set(product, 'quantity', 1);
      });

      commit('setResponse', response);
      commit('toggleLoader', false);
    },

    changeCurrentCategory({ commit }, category) {
      if (this.state.currentCategory === category) return;
      commit('setCurrentCategory', category);
    },
  },

  getters: {
    categories(state) {
      return state.response.categories;
    },

    products(state) {
      return state.response.menu;
    },

    markets(state) {
      return state.response.markets;
    },

    productsByCategory(state) {
      return state.response.menu.filter(
        item => item.category === state.currentCategory
      );
    },

    addedProducts(state) {
      return state.addedProducts;
    },
  },

  modules: {},
});

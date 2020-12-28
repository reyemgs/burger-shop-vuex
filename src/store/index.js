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

    increaseQuantity(state, product) {
      const foundProduct = state.response.menu.find(
        item => item.id === product.id
      );
      foundProduct.quantity += 1;
    },

    decreaseQuantity(state, product) {
      const foundProduct = state.response.menu.find(
        item => item.id === product.id
      );
      foundProduct.quantity -= 1;
    },

    addInCart(state, product) {
      state.addedProducts.push(product);
    },

    removeFromCart(state, product) {
      const index = state.addedProducts.findIndex(
        item => item.id === product.id
      );
      state.addedProducts[index].quantity = 1;
      state.addedProducts.splice(index, 1);
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

    increaseQuantity({ commit }, product) {
      if (product.quantity === 99) return;
      commit('increaseQuantity', product);
    },

    decreaseQuantity({ commit }, product) {
      if (product.quantity === 1) return;
      commit('decreaseQuantity', product);
    },

    addInCart({ commit }, product) {
      const addedProduct = this.state.addedProducts.find(
        item => item.id === product.id
      );

      if (!addedProduct) {
        commit('addInCart', product);
      }
    },

    removeFromCart({ commit }, product) {
      commit('removeFromCart', product);
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

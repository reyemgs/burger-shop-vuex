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
    currentCategory: 'sandwiches',
    currentModalCategory: 'sizes',
    currentProduct: null,
    showModal: false,
  },

  mutations: {
    SET_RESPONSE(state, response) {
      state.response = response;
    },

    TOGGLE_LOADER(state, loading) {
      state.loading = loading;
    },

    SET_CURRENT_CATEGORY(state, category) {
      state.currentCategory = category;
    },

    SET_MODAL_CATEGORY(state, category) {
      state.currentModalCategory = category;
    },

    INCREASE_QUANTITY(state, product) {
      const foundProduct = state.response.menu.find(
        item => item.id === product.id
      );
      foundProduct.quantity += 1;
    },

    DECREASE_QUANTITY(state, product) {
      const foundProduct = state.response.menu.find(
        item => item.id === product.id
      );
      foundProduct.quantity -= 1;
    },

    ADD_IN_CART(state, product) {
      state.addedProducts.push(product);
    },

    REMOVE_FROM_CART(state, product) {
      const index = state.addedProducts.findIndex(
        item => item.id === product.id
      );
      state.addedProducts[index].quantity = 1;
      state.addedProducts.splice(index, 1);
    },

    OPEN_MODAL(state, product) {
      state.showModal = true;
      state.currentProduct = product;
    },

    CLOSE_MODAL(state) {
      state.showModal = false;
      state.currentProduct = null;
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

      commit('SET_RESPONSE', response);
      commit('TOGGLE_LOADER', false);
    },

    changeCurrentCategory({ commit }, category) {
      if (this.state.currentCategory === category) return;
      commit('SET_CURRENT_CATEGORY', category);
    },

    changeCurrentModalCategory({ commit }, category) {
      if (this.state.currentModalCategory === category) return;
      commit('SET_MODAL_CATEGORY', category);
    },

    increaseQuantity({ commit }, product) {
      if (product.quantity === 99) return;
      commit('INCREASE_QUANTITY', product);
    },

    decreaseQuantity({ commit }, product) {
      if (product.quantity === 1) return;
      commit('DECREASE_QUANTITY', product);
    },

    addInCart({ commit }, product) {
      const addedProduct = this.state.addedProducts.find(
        item => item.id === product.id
      );

      if (!addedProduct) {
        commit('ADD_IN_CART', product);
      }
    },

    removeFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    },

    openModal({ commit }, product) {
      commit('OPEN_MODAL', product);
    },

    closeModal({ commit }) {
      commit('CLOSE_MODAL');
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

    currentProduct(state) {
      return state.currentProduct;
    },

    modal(state) {
      return state.response.modal;
    },

    ingridients(state) {
      return state.response.ingridients;
    },

    ingridientsByCategory(state) {
      return state.response.ingridients[state.currentModalCategory];
    },

    currentModalCategory(state) {
      return state.currentModalCategory;
    },
  },

  modules: {},
});

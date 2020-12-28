<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <span class="modal-title">{{ title }}</span>
            <div class="modal-close-btn">
              <i
                class="fas fa-times fa-lg"
                aria-hidden="true"
                @click="closeModal"
              ></i>
            </div>
          </div>
          <ul class="modal-nav">
            <ModalNavItem v-for="item of modal" :key="item.id" :item="item" />
          </ul>
          <div class="modal-body">
            <div class="modal-content">
              <div
                class="ingridients"
                v-if="$store.state.currentModalCategory !== 'done'"
              >
                <IngridientCard
                  v-for="(value, property) in ingridientsByCategory"
                  :key="ingridientsByCategory[property].id"
                  :ingridient="ingridientsByCategory[property]"
                />
              </div>
              <DonePage v-else :product="currentProduct" />
            </div>
          </div>

          <div class="modal-footer">
            <span
              class="modal-price"
              v-if="$store.state.currentModalCategory != 'done'"
              >{{ currentProduct.price }} &#8381;</span
            >
            <div v-else>
              <span class="modal-total-price">{{ totalPrice }} &#8381;</span>
              <div class="modal-add-in-basket">
                <div class="modal-product-quantity-label">Количество</div>
                <div class="modal-btn-decrease">
                  <i
                    class="fas fa-minus-circle"
                    aria-hidden="true"
                    @click="decreaseQuantity(currentProduct)"
                  ></i>
                </div>
                <span class="modal-product-quantity">
                  {{ currentProduct.quantity }}
                </span>
                <div class="modal-btn-increase">
                  <i
                    class="fas fa-plus-circle"
                    aria-hidden="true"
                    @click="() => increaseQuantity(currentProduct)"
                  ></i>
                </div>
                <button
                  class="modal-btn-in-basket"
                  @click="() => addInCart(currentProduct)"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition></template
>

<script src="./Modal.js" />

<style lang="scss" src="./modal.scss" scoped />

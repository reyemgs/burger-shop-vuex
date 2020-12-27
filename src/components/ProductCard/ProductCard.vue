<template>
  <div class="product-card">
    <div class="product-header">
      <img :src="market.image" class="product-market" />
      <img :src="product.image" class="product-image" />
    </div>
    <div class="product-name">
      {{ product.name }}
    </div>
    <p class="product-description">
      {{ product.description }}
    </p>
    <button class="constructor-btn" v-if="product.type === 'multiple'">
      Конструктор
    </button>
    <span class="product-price">&#8381; {{ product.price }}</span>
    <div class="add-in-basket">
      <div class="product-quantity-label">Количество</div>
      <div class="btn-decrease">
        <i
          class="fas fa-minus-circle"
          aria-hidden="true"
          @click="() => decreaseQuantity(product)"
        ></i>
      </div>
      <span class="product-quantity">{{ product.quantity }}</span>
      <div class="btn-increase">
        <i
          class="fas fa-plus-circle"
          aria-hidden="true"
          @click="() => increaseQuantity(product)"
        ></i>
      </div>
      <button class="btn-in-basket" @click="() => addInCart(product)">
        В корзину
      </button>
    </div>
  </div>
</template>

<script src="./ProductCard.js" />

<style lang="scss" src="./productCard.scss" scoped />

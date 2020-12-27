<template>
  <div class="cart-product">
    <div class="cart-product-name">{{ product.name }}</div>
    <div class="cart-product-quantity">
      {{ product.quantity }}
    </div>
    <div class="remove-button">
      <i
        class="fas fa-trash-alt fa-lg"
        @click="() => removeFromCart(product)"
      ></i>
    </div>
  </div>
</template>

<script src="./CartProduct.js" />

<style lang="scss" src="./cartProduct.scss" scoped />

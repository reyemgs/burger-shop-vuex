<template>
  <div class="cart">
    <div class="cart-header">
      <span><i class="fas fa-shopping-cart"></i> Корзина</span>
    </div>

    <div class="cart-body">
      <div class="cart-label-wrapper">
        <span class="cart-name-label">Название</span>
        <span class="cart-quantity-label">Количество</span>
      </div>
      <div class="cart-content-wrapper">
        <span class="empty">
          Добавьте товары в корзину
        </span>
        <CartProduct />
        <CartProduct />
      </div>
      <span class="cart-total-price">Итого: PRICE &#8381;</span>
      <button class="order-button">Оформить заказ</button>
    </div>
  </div>
</template>

<script src="./Cart.js" />

<style lang="scss" src="./cart.scss" scoped />

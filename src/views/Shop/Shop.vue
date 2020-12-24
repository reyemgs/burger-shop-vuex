<template>
  <div id="shop">
    <!-- <Loader v-if="loading" />
    <Header /> -->
    <div class="container">
      <div class="sidebar">
        <MenuList />
        <Cart />
      </div>
      <div class="content">
        <!-- <ProductCard
          v-for="product of filteredProducts"
          :key="product.id"
          :product="product"
          :ingridients="ingridients"
          :markets="response.markets"
          @addInBasket="addInBasket"
          @updateQuantity="updateQuantity"
          @updatePrice="updatePrice"
          @showModal="openModal"
        /> -->
      </div>
    </div>
    <!-- <Modal
      v-if="showModal"
      :product="currentProduct"
      :ingridients="ingridients"
      :modalItems="response.modal"
      @closeModal="closeModal"
      @addInBasket="addInBasket"
      @updateQuantity="updateQuantity"
    /> -->
  </div>
</template>

<script src="./Shop.js" />

<style lang="scss" src="./shop.scss" />

<template>
  <div id="shop">
    <Loader v-if="$store.state.loading" />
    <div class="container">
      <div class="sidebar">
        <MenuList />
        <Cart />
      </div>
      <div class="content">
        <ProductCard
          v-for="product of productsByCategory"
          :key="product.id"
          :product="product"
          :market="markets[product.market]"
        />
      </div>
    </div>
    <Modal v-if="$store.state.showModal" />
  </div>
</template>

<script src="./Shop.js" />

<style lang="scss" src="./shop.scss" />

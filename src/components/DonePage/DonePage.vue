<template>
  <div class="done-page">
    <img class="product-image" :src="product.image" />
    <div class="done-wrapper">
      <span class="done-header">Ваш сендвич готов!</span>
      <div class="done-info">
        <span class="done-size">SIZES</span>
        <span class="done-bread">BREADS</span>
        <span class="done-vegetables">VEGETABLES</span>
        <span class="done-sauces">SAUCES</span>
        <span class="done-fillings">FILLINGS</span>
      </div>
      <span class="done-name">{{ product.name }}</span>
    </div>
  </div></template
>

<script src="./DonePage.js" />

<style lang="scss" src="./donePage.scss" />

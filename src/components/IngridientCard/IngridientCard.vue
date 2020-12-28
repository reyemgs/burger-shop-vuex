<template>
  <div class="ingridient-card">
    <img class="ingridient-image" :src="ingridient.image" />
    <span class="ingridient-name">{{ ingridient.name }}</span>
    <span class="ingridient-price">{{ ingridient.price }} &#8381;</span>
  </div>
</template>

<script src="./IngridientCard.js" />

<style lang="scss" src="./ingridientCard.scss" />

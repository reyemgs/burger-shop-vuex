<template>
  <li
    class="menu-item"
    :class="{
      active: $store.state.currentCategory === category.type ? true : false,
    }"
    @click="() => changeCurrentCategory(category.type)"
  >
    {{ category.name }}
  </li>
</template>

<script src="./MenuItem.js" />

<style lang="scss" src="./menuItem.scss" />

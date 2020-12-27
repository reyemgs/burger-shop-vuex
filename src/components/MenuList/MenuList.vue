<template>
  <ul class="menu-list">
    <MenuItem
      v-for="category of categories"
      :key="category.type"
      :category="category"
    />
  </ul>
</template>

<script src="./MenuList.js" />

<style lang="scss" src="./menuList.scss" />

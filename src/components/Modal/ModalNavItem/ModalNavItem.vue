<template>
  <li
    class="modal-nav-item"
    :class="{
      active:
        $store.state.currentModalCategory === item.category ? true : false,
    }"
    @click="() => changeCurrentModalCategory(item.category)"
  >
    {{ item.name }}
  </li>
</template>

<script src="./ModalNavItem.js" />

<style lang="scss" src="./modalNavItem.scss" scoped />

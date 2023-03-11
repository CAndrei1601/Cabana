<script lang="ts" setup></script>

<template>
  <nav
    class="flex relative"
    justify="between"
    p="4"
    bg="green100"
    align="center"
    w="full"
  >
    <div class="flex" justify="start" items="center">
      <nuxt-img src="/icons/hamburger-menu.svg" />
    </div>
    <div w="full" class="flex items-center" justify="center">
      <p>LOGO</p>
    </div>
    <div
      display="none sm:flex"
      justify="between"
      items="center"
      w="full"
      text="white md"
    >
      <NuxtLink to="/despre-noi">{{ $t("despreNoi") }}</NuxtLink>
      <NuxtLink to="/cabana">{{ $t("cabana") }}</NuxtLink>
      <NuxtLink to="/atractii"> {{ $t("atractii") }} </NuxtLink>
      <NuxtLink to="/galerie"> {{ $t("galerie") }}</NuxtLink>
      <NuxtLink to="/contact">{{ $t("contact") }}</NuxtLink>
    </div>
  </nav>
  <slot></slot>
</template>

<style scoped></style>

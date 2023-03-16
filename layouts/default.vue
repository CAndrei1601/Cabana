<script lang="ts" setup></script>

<template>
  <nav
    class="flex relative min-h-72px"
    justify="between"
    p="4 sm:y-7 x-10"
    bg="green100"
    align="center"
    w="full"
  >
    <div class="absolute" display="sm:none">
      <nuxt-img src="/icons/hamburger-menu.svg" />
    </div>
    <div w="full" class="flex items-center" justify="center sm:start">
      <p>LOGO</p>
    </div>
    <div
      display="none sm:flex"
      justify="between"
      items="center"
      w="full sm:auto"
      text="cream md"
      gap="sm:40px"
    >
      <NuxtLink class="min-w-90px" to="/despre-noi">{{
        $t("despreNoi")
      }}</NuxtLink>
      <NuxtLink to="/cabana">{{ $t("cabana") }}</NuxtLink>
      <NuxtLink to="/atractii"> {{ $t("atractii") }} </NuxtLink>
      <NuxtLink to="/galerie"> {{ $t("galerie") }}</NuxtLink>
      <NuxtLink to="/contact">{{ $t("contact") }}</NuxtLink>
    </div>
  </nav>
  <slot></slot>
</template>

<style scoped>
a {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
}
</style>

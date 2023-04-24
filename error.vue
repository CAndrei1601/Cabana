<template>
  <div
    w="full"
    h="100vh"
    flex="~ col"
    justify="center"
    align="center"
    bg="#F8FBFC"
  >
    <div>
      <img src="/images/404.webp" alt="" w="400px" />
      <h1 text="green100" m="b-6">{{ $t("paginaNuAfost") }}</h1>
      <button class="btn-primary" @click="handleError">Acasa</button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

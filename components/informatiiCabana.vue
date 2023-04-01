<template>
  <div flex="~ col  lg:row">
    <nuxt-img
      :src="src"
      format="webp"
      width="342"
      height="342"
      sizes="lg:432px"
      class="rounder-image"
      w="full lg:432px"
      h="auto"
    />
    <div
      bg="white"
      p="x-32px t-32px b-40px lg:(x-56pxs t-56px b-65px)"
      flex="~ col"
      gap="6 lg:8"
      justify="start"
      class="rounded-container"
    >
      <h2>{{ $t(title) }}</h2>
      <nuxt-img
        src="/images/underline_2.png"
        format="webp"
        width="80"
        height="12"
      />
      <p>{{ $t(text) }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.rounder-image {
  border-radius: 20px 20px 0 0;

  @screen lg {
    border-radius: 32px 0 0 32px;
  }
}

.rounded-container {
  border-radius: 0 0 20px 20px;

  @screen md {
    border-radius: 0 32px 32px 0;
  }
}
</style>
<script setup lang="ts">
defineProps<{
  src?: string;
  title?: string;
  text?: string;
}>();
</script>

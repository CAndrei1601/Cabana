<template>
  <div
    p="6 md:(t-8 l-40px) 3xl:(y-38px l-48px)"
    bg="cream"
    flex="~ col"
    gap="4 sm:6"
    text="left green100"
    rounded="20px md:32px"
    h="full"
  >
    <h3>{{ $t("traseu") }} {{ traseuIndex }}</h3>

    <picture>
      <source
        media="(min-width: 200px)"
        type="image/webp"
        srcset="/images/underline_2.webp"
      />
      <img src="/images/underline_2.png" width="75" height="12" />
    </picture>
    <div flex="~ wrap" gap="4 md:6">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  traseuIndex?: string;
}>();
</script>

<template>
  <div
    justify="center sm:between"
    flex=" ~ wrap"
    items="center"
    gap="8 sm:0"
    text="cream center"
    font="600"
    class="max-w-960px"
    m="x-auto"
    :class="{ 'justify-center! gap-48px!': contactPage }"
  >
    <NuxtLink to="mailto:contact@cabanalirca.ro">
      <div flex=" ~ col" justify="center" items="center" gap="13px">
        <div :class="{ 'contact-box': contactPage }">
          <nuxt-img
            src="/icons/footer-icon_email.svg"
            w="40px"
            h="40px"
            loading="lazy"
            :class="{ 'image-filter': contactPage }"
          />
        </div>
        <p :class="{ 'text-green100': contactPage }">contact@cabanalirca.ro</p>
      </div>
    </NuxtLink>
    <NuxtLink to="tel:+40 780 123 456">
      <div flex=" ~ col" justify="center" items="center" gap="13px">
        <div :class="{ 'contact-box': contactPage }">
          <nuxt-img
            src="/icons/footer-icon_phone.svg"
            w="40px"
            h="40px"
            loading="lazy"
            :class="{ 'image-filter': contactPage }"
          />
        </div>
        <p :class="{ 'text-green100': contactPage }">+40 780 123 456</p>
      </div>
    </NuxtLink>
    <NuxtLink to="https://goo.gl/maps/h64egWPeaJsnerSd9" target="blank">
      <div flex=" ~ col" justify="center" items="center" gap="13px">
        <div :class="{ 'contact-box': contactPage }">
          <nuxt-img
            src="/icons/footer-icon_location.svg"
            w="40px"
            h="40px"
            loading="lazy"
            :class="{ 'image-filter': contactPage }"
          />
        </div>
        <p :class="{ 'text-green100': contactPage }">
          Rastolita, Mures, Romania
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
.contact-box {
  width: 48px;
  height: 48px;
  background: rgba(48, 62, 48, 0.16);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  &:hover {
    color: #f88758 !important;
    transition: color 200ms ease-in-out;
  }
}

.image-filter {
  filter: invert(15%) sepia(7%) saturate(1701%) hue-rotate(71deg)
    brightness(21%) contrast(85%);
}
</style>
<script setup lang="ts">
defineProps<{
  contactPage?: boolean;
}>();
</script>

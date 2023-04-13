<template>
  <div v-if="isOpen" class="cookie-popup" p="y-6 x-8" bg="white">
    <p class="cookie-popup-text" text="green100">
      {{ $t("acestSiteFoloseste") }}
    </p>
    <div
      flex="~ "
      gap="10px"
      justify="center"
      m="t-4 x-auto"
      class="max-w-290px"
    >
      <NuxtLink to="/cookies" display="contents">
        <button
          class="cookie-popup-button btn-secondary"
          flex="1"
          bg="green16"
          text="green100"
          w="full"
        >
          {{ $t("detalii") }}
        </button>
      </NuxtLink>
      <button
        class="cookie-popup-button btn-primary"
        flex="1"
        @click="acceptCookies"
      >
        {{ $t("amInteles") }}
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.cookie-popup {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 16px 16px 0 0;
  z-index: 20;
  max-width: 640px;

  @screen sm {
    border-radius: 32px;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    height: fit-content;
  }
  &-text {
    font-size: 14px;
    line-height: 21px;

    @screen sm {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &-button {
    padding: 14px 24px;
  }
}
</style>
<script setup>
const isOpen = ref(false);

const acceptCookies = () => {
  isOpen.value = false;
  localStorage.setItem("GDPR:accepted", "true");
};

const getGDPR = () => {
  return localStorage.getItem("GDPR:accepted");
};

onBeforeMount(() => {
  if (getGDPR() === "true") {
    isOpen.value = false;
  } else {
    isOpen.value = true;
  }
});
</script>

<template>
  <div v-if="isOpen" class="cookie-popup">
    <p>
      {{ $t("acestSiteFoloseste")
      }}<NuxtLink to="/cookies"
        ><u>{{ $t("cookies") }}.</u></NuxtLink
      >
    </p>
    <button @click="acceptCookies" class="secondary">Accept</button>
  </div>
</template>
<style lang="scss">
.cookie-popup {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 24px;
  background-color: #f0ede4;
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

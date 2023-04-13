<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <h2 m="b-6" text="green100">{{ $t("contact") }}</h2>
        <p m="b-8" text="green100" w="sm:444px">
          {{ $t("pentruMaiMulte") }}
        </p>
        <div class="max-w-300px mx-auto">
          <informations :contactPage="true" />
        </div>
        <div
          class="absolute"
          cursor="pointer"
          top="8"
          right="8"
          @click="$emit('close-modal')"
        >
          <img class="close-icon" src="/icons/close.svg" loading="lazy" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000da;
  z-index: 999;
}
.modal {
  text-align: center;
  background-color: #f0ede4;
  position: relative;
  padding: 64px 32px;
  border-radius: 20px;

  @screen sm {
    padding: 88px;
    border-radius: 32px;
  }
}
</style>

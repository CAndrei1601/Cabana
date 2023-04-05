<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <h2 m="b-6">{{ $t("contact") }}</h2>
        <p m="b-8" w="sm:444px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="max-w-300px mx-auto">
          <informations :contactPage="true" />
        </div>
      </div>
      <div @click="$emit('close-modal')">
        <p>X</p>
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
  z-index: 10;
}
.modal {
  text-align: center;
  background-color: #f0ede4;

  padding: 64px 32px;
  border-radius: 20px;

  @screen sm {
    padding: 88px;
    border-radius: 32px;
  }
}
</style>

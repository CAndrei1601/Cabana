<template>
  <Swiper
    :modules="[SwiperPagination, SwiperNavigation]"
    :pagination="true"
    :navigation="true"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide" class="swiper-slide-class">
      <strong>{{ slide }}</strong>
    </SwiperSlide>
  </Swiper>
</template>
<style scoped lang="scss">
.swiper-slide-class {
  height: 200px;
}
</style>

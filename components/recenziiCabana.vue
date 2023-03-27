<template>
  <div
    w="full"
    class="flex"
    flex="col"
    justify="center"
    items="center"
    m="t-72px b-4"
    gap="24px"
  >
    <nuxt-img src="/icons/quote-1.svg" width="48" height="48" />
    <h2>{{ $t("recenzii") }}</h2>
  </div>
  <Swiper
    :modules="[SwiperPagination]"
    :pagination="true"
    :slides-per-view="1"
    :loop="true"
    position="relative"
    @swiper="setControlledSwiper"
  >
    <SwiperSlide
      v-for="(review, i) in data"
      :key="`review_${i}`"
      class="swiper-slide-class"
    >
      <p>
        {{ review.text }}
      </p>
    </SwiperSlide>

    <div class="left-arrow">
      <button
        @click="controlledSwiper.slidePrev()"
        w="40px"
        h="40px"
        bg="green16"
        class="flex"
        justify="center"
        items="center"
        p="0"
        rounded="50%"
      >
        <nuxt-img src="/icons/chevron-left.svg" width="24" height="24" />
      </button>
    </div>
    <div class="right-arrow">
      <button
        @click="controlledSwiper.slideNext()"
        class="flex"
        justify="center"
        items="center"
        w="40px"
        h="40px"
        bg="green16"
        p="0"
        rounded="50%"
      >
        <nuxt-img src="/icons/chevron-right.svg" w="24px" h="24px" />
      </button>
    </div>
  </Swiper>
  <div
    w="full"
    class="flex"
    flex="col"
    justify="center"
    items="center"
    m="t-32px b-72px"
    gap="24px"
  >
    <nuxt-img src="/icons/quote-2.svg" width="48" height="48" />
  </div>
</template>
<script setup>
import { reviews } from "../mock/reviewsData.js";
const controlledSwiper = ref(null);

const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper;
};
const data = ref(reviews);
</script>
<style scoped lang="scss">
.swiper-slide-class {
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 220px;
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 50px;
  }
}

.left-arrow {
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.right-arrow {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>

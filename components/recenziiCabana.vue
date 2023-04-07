<template>
  <DelayHydration>
    <div
      w="full"
      class="flex"
      flex="col"
      justify="center"
      items="center"
      m="t-72px b-4"
      gap="24px"
    >
      <img
        src="/icons/quote-1.svg"
        width="48"
        height="48"
        alt="iconite ghilimele"
      />
      <h2>{{ $t("recenzii") }}</h2>
    </div>
    <div
      class="flex max-w-1088px"
      m="x-6 md:x-64px lg:auto"
      justify="center"
      items="center"
      gap="6 md:40px lg:96px"
    >
      <div>
        <button
          aria-label="left arrow for swiper"
          @click="controlledSwiper.slidePrev()"
          w="40px"
          h="40px"
          class="flex"
          justify="center"
          items="center"
          bg="arrow hover:(green16)"
          p="0"
          rounded="50%"
        >
          <img
            src="/icons/chevron-left.svg"
            width="24"
            height="24"
            alt="iconita sageata stanga"
          />
        </button>
      </div>
      <Swiper
        :modules="[SwiperPagination]"
        :pagination="true"
        :slides-per-view="1"
        :loop="true"
        position="relative"
        class="max-w-720px"
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
      </Swiper>

      <div>
        <button
          aria-label="right arrow for swiper"
          @click="controlledSwiper.slideNext()"
          class="flex"
          justify="center"
          items="center"
          w="40px"
          h="40px"
          bg="arrow hover:(green16)"
          p="0"
          rounded="50%"
        >
          <img
            src="/icons/chevron-right.svg"
            w="24px"
            h="24px"
            alt="iconita sageata dreapta "
          />
        </button>
      </div>
    </div>
    <div
      w="full"
      class="flex"
      flex="col"
      justify="center"
      items="center"
      m="t-32px b-72px"
      gap="24px"
    >
      <img
        src="/icons/quote-2.svg"
        width="48"
        height="48"
        alt="iconite ghilimele"
      />
    </div>
  </DelayHydration>
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

  @screen sm {
    left: 60px;
  }
}

.right-arrow {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-50%, -50%);
  z-index: 10;

  @screen sm {
    right: 30px;
  }
}
</style>

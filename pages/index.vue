<template>
  <section>
    <div position="relative">
      <nuxt-img
        src="/images/image_hero-banner_Mobile.jpg"
        width="390"
        height="640"
        h="full"
        w="full"
        format="webp"
        v-if="$device.isMobile"
        placeholder
      />

      <nuxt-img
        src="/images/image_hero-banner_Tablet.jpg"
        width="1024"
        height="600"
        h="auto"
        w="full"
        format="webp"
        v-if="$device.isTablet"
      />

      <nuxt-img
        src="/images/image_hero-banner_Desktop.jpg"
        width="1024"
        height="600"
        h="auto"
        w="full"
        format="webp"
        v-if="$device.isDesktop"
      />

      <div
        position="absolute bottom-64px sm:(top-0 bottom-0 )"
        class="flex max-w-360px left-0 right-0"
        justify="center"
        items="center sm:start"
        flex="col"
        text="center sm:left"
        m="x-auto sm:(l-60px) md:(l-80px)"
      >
        <h1 text="5xl cream" p="b-4" font="normal">
          {{ $t("bunVenitLaCabana") }}
        </h1>
        <p text="base cream" font=" normal" p="b-8">
          {{ $t("vaOferimUnLocPlinDe") }}
        </p>

        <button class="btn-primary">
          {{ $t("contacteazane") }}
        </button>
      </div>
    </div>
  </section>
  <facilitati-cabana />
  <section position="relative">
    <nuxt-img
      src="/images/image_despre-noi_homepage_Mobile.jpg"
      format="webp"
      height="720"
      width="390"
      w="full"
      h="full"
    />
    <div p="y-12 x-8">
      <h2></h2>
    </div>
  </section>
</template>
<script setup>
const { isMobile, isTablet, isDesktop } = useDevice();
</script>

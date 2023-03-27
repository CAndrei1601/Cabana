<template>
  <div class="max-w-1920px" m="x-auto">
    <section>
      <div position="relative">
        <picture>
          <nuxt-source
            media="(min-width:1200px)"
            src="/images/image_hero-banner_Desktop.jpg"
            sizes="lg:1600"
            width="1024"
            height="600"
          />
          <nuxt-source
            src="/images/image_hero-banner_Tablet.jpg"
            sizes="sm:650 md:850px "
            media="(min-width:600px)"
            width="1024"
            height="600"
          />
          <nuxt-img
            src="/images/image_hero-banner_Mobile.jpg"
            width="390"
            height="640"
            h="full"
            w="full"
            format="webp"
            class="xl:max-h-600px 3xl:max-h-720px"
            m="x-auto 3xl:(t-2)"
            object="cover"
            rounded=" 3xl:3xl"
          />
        </picture>

        <div
          position="absolute bottom-64px sm:(top-0 bottom-0 )"
          class="flex max-w-360px left-0 right-0 lg:max-w-420px"
          justify="center"
          items="center sm:start"
          flex="col"
          text="center sm:left"
          m="x-auto sm:(l-60px) md:(l-80px) 2xl:(l-165px)"
        >
          <h1 text="cream " p="b-4" font="normal">
            {{ $t("bunVenitLaCabana") }}
          </h1>
          <p text=" cream" font=" normal" p="b-8">
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
      <picture>
        <nuxt-source
          media="(min-width:1200px)"
          src="/images/image_despre-noi_homepage_Desktop.jpg"
          sizes="lg:1600"
          height="720"
          width="1920"
        />
        <nuxt-source
          src="/images/image_despre-noi_homepage_Tablet.jpg"
          sizes="sm:650 md:850px "
          media="(min-width:600px)"
          format="webp"
          height="600"
          width="1024"
        />
        <nuxt-img
          src="/images/image_despre-noi_homepage_Mobile.jpg"
          format="webp"
          height="720"
          width="390"
          w="full"
          h="full"
          rounded=" 3xl:3xl"
          class="image-radius"
        />
      </picture>

      <div
        p="y-12 x-8 sm:35px lg:56px xl:60px 2xl:72px"
        text="center green100 sm:left"
        bg="cream"
        rounded="lg 2xl:3xl"
        position="absolute"
        class="bottom-24px left-24px right-24px sm:(right-54px left-auto top-0 bottom-0) 2xl:(right-168px)"
        m="y-auto"
        h="sm:400px xl:420px 2xl:444px"
        w="sm:404px xl:560px 2xl:672px"
      >
        <h2 p="b-6">{{ $t("despreNoi") }}</h2>
        <p v-if="$device.isMobile" p="b-8">{{ $t("cabanaLircaEste") }}</p>
        <p p="b-24px" v-else>{{ $t("cabanLircaTabelta") }}</p>
        <button class="btn-secondary">
          {{ $t("citesteMaiMult") }}
        </button>
      </div>
    </section>
    <section class="flex" flex="col sm:row">
      <div position="relative">
        <picture>
          <nuxt-source
            media="(min-width:600px)"
            src="/images/cabana.jpg"
            sizes="sm:600 lg:960"
            height="720"
            width="600"
          />
          <nuxt-img
            src="/images/cabana-mobile.jpg"
            format="webp"
            width="400"
            height="300"
            w="full"
            h="full"
          />
        </picture>
        <div
          class="centered"
          text="cream"
          flex="  ~ col"
          justify="center"
          items="center"
        >
          <p m="b-10px" class="centered-text">{{ $t("cabana") }}</p>

          <nuxt-img
            src="/images/underline_1.png"
            format="webp"
            width="80"
            height="12"
          />
        </div>
      </div>
      <div position="relative">
        <picture>
          <nuxt-source
            media="(min-width:600px)"
            src="/images/atractii.jpg"
            sizes="sm:600 lg:960"
            height="720"
            width="600"
          />
          <nuxt-img
            src="/images/atractii-mobile.jpg"
            format="webp"
            width="400"
            height="300"
            w="full"
            h="full"
          />
        </picture>
        <div
          class="centered"
          text="cream"
          flex="  ~ col"
          justify="center"
          items="center"
        >
          <p m="b-10px" class="centered-text">{{ $t("atractii") }}</p>
          <nuxt-img
            src="/images/underline_1.png"
            format="webp"
            width="80"
            height="12"
          />
        </div>
      </div>
    </section>
    <recenzii-cabana />
    <section position="relative">
      <picture>
        <nuxt-source
          media="(min-width:1200px)"
          src="/images/image_deer_Desktop.jpg"
          sizes="lg:1600"
          height="720"
          width="1920"
        />
        <nuxt-source
          src="/images/image_deer_Tablet.jpg"
          sizes="sm:650
        md:850px "
          media="(min-width:600px)"
          format="webp"
          height="600"
          width="1024"
        />
        <nuxt-img
          src="/images/image_deer_Mobile.jpg"
          format="webp"
          height="720"
          width="390"
          w="full"
          h="full"
          rounded=" 3xl:3xl"
          class="image-radius"
        />
      </picture>

      <div
        p="y-12 x-8 sm:35px lg:56px xl:60px 2xl:72px"
        text="center green100 sm:left"
        bg="cream"
        rounded="lg 2xl:3xl"
        position="absolute"
        class="bottom-24px left-24px right-24px sm:(right-54px left-auto top-0 bottom-0) 2xl:(right-168px)"
        m="y-auto"
        h="sm:400px xl:420px 2xl:444px"
        w="sm:404px xl:560px 2xl:672px"
      >
        <h2 p="b-6">{{ $t("galerie") }}</h2>

        <p m="b-8" class="truncate-text">
          {{ $t("vaInvitamSaUrmaritiGaleria") }}
        </p>
        <button class="btn-secondary">
          {{ $t("veziPoze") }}
        </button>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.image-radius {
  @screen 2xl {
    border-radius: 32px 32px 0 0;
  }
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &-text {
    font-family: "Averia Serif Libre", cursive;
    font-size: 44px;
    line-height: 48px;

    @screen sm {
      font-size: 52px;
      line-height: 63px;
    }

    @screen xl {
      font-size: 68px;
      line-height: 74px;
    }
  }
}

.truncate-text {
  overflow: hidden;
  height: 100px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
}
</style>
<script setup>
const { isMobile, isTablet, isDesktop } = useDevice();
</script>

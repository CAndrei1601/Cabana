<template>
  <section class="flex" flex="col sm:row">
    <NuxtLink to="/cabana">
      <div position="relative">
        <picture>
          <nuxt-source
            media="(min-width:600px)"
            src="/images/cabana.jpg"
            sizes="sm:600 lg:960"
            height="720"
            width="600"
          />
          <img
            src="/images/cabana-mobile.jpg"
            width="400"
            height="300"
            w="full"
            h="full"
            alt="poza in mod portret cu cabana Lirca"
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

          <img
            src="/images/underline_1.png"
            width="80"
            height="12"
            alt="iconita de delimitare a titlului "
          />
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/atractii">
      <div position="relative">
        <picture>
          <nuxt-source
            media="(min-width:600px)"
            src="/images/atractii.jpg"
            sizes="sm:600 lg:960"
            height="720"
            width="600"
          />
          <img
            src="/images/atractii-mobile.jpg"
            width="400"
            height="300"
            w="full"
            h="full"
            alt="peisaj din zona Rastolita judetul Mures"
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
          <img
            src="/images/underline_1.png"
            width="80"
            height="12"
            alt="iconita de delimitare a titlului "
          />
        </div>
      </div>
    </NuxtLink>
  </section>
</template>
<style scoped lang="scss">
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
</style>

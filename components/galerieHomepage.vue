<template>
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
        class="image-radius-2 sm:min-h-480px"
        alt="imagine cu o caprioara in zona Rastolita"
      />
    </picture>

    <div
      p="y-12 x-8 sm:35px lg:56px xl:60px 2xl:72px"
      text="center green100 sm:left"
      bg="cream"
      position="absolute"
      class="border-radius bottom-24px left-24px right-24px sm:(left-54px right-auto top-0 bottom-0) 2xl:(left-168px)"
      m="y-auto"
      h="sm:400px xl:416px"
      w="sm:404px xl:672px"
    >
      <h2 p="b-6">{{ $t("galerie") }}</h2>

      <p m="b-8" class="truncate-text">
        {{ $t("vaInvitamSaUrmaritiGaleria") }}
      </p>
      <NuxtLink to="/galerie">
        <button class="btn-secondary">
          {{ $t("veziPoze") }}
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
<style scoped lang="scss">
.border-radius {
  border-radius: 20px;
  @screen sm {
    border-radius: 32px;
  }
}

.truncate-text {
  overflow: hidden;
  height: 100px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */

  @screen sm {
    height: auto;
    display: block;
  }
}

.image-radius-2 {
  @screen 3xl {
    border-radius: 32px 32px 0 0;
  }

  @screen 3xl {
    border-radius: 32px;
    margin-bottom: 8px;
  }
}
</style>

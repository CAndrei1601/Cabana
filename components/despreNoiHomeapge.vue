<template>
  <section position="relative">
    <picture>
      <source
        media="(min-width:1200px)"
        srcset="
          /images/image_despre-noi_homepage_Desktop.webp,
          /images/image_despre-noi_homepage_Desktop.jpg
        "
        type="image/webp"
        height="720"
        width="1920"
      />
      <source
        srcset="
          /images/image_despre-noi_homepage_Tablet.webp,
          /images/image_despre-noi_homepage_Tablet.jpg
        "
        type="image/webp"
        media="(min-width:600px)"
        height="600"
        width="1024"
      />
      <source
        srcset="/images/image_despre-noi_homepage_Mobile.webp"
        type="image/webp"
        media="(min-width:200px)"
        height="600"
        width="1024"
      />
      <img
        src="/images/image_despre-noi_homepage_Mobile.jpg"
        height="720"
        width="390"
        w="full"
        h="full"
        rounded=" 3xl:3xl"
        alt="landscape in apropierea de cabana Lirca"
        class="image-radius sm:min-h-480px"
        loading="lazy"
      />
    </picture>

    <div
      p="y-12 x-8 sm:35px lg:56px xl:60px 2xl:72px"
      text="center green100 sm:left"
      bg="cream"
      position="absolute"
      class="border-radius bottom-24px left-24px right-24px sm:(right-54px left-auto top-0 bottom-0) 2xl:(right-168px)"
      m="y-auto"
      h="sm:400px lg:420px 2xl:444px"
      w="sm:404px lg:560px 2xl:672px"
    >
      <h2 p="b-6">{{ $t("despreNoi") }}</h2>
      <p display="sm:none" p="b-8">{{ $t("cabanaLircaEste") }}</p>
      <p p="b-24px" display="none sm:block">{{ $t("cabanLircaTabelta") }}</p>
      <NuxtLink to="/despre-noi">
        <button class="btn-secondary">
          {{ $t("citesteMaiMult") }}
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
<script setup>
useSchemaOrg([
  defineWebPage({
    image: "/images/image_despre-noi_homepage_Mobile.svg",
  }),
]);
</script>
<style scoped lang="scss">
.image-radius {
  @screen 3xl {
    border-radius: 32px 32px 0 0;
  }
}

.border-radius {
  border-radius: 20px;
  @screen sm {
    border-radius: 32px;
  }
}
</style>

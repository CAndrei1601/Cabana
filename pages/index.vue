<template>
  <div class="max-w-1920px" m="x-auto">
    <section>
      <div position="relative">
        <picture>
          <source
            media="(min-width:1200px)"
            srcset="
              /images/image_hero-banner_Desktop.webp,
              /images/image_hero-banner_Desktop.jpg
            "
            width="1024"
            height="600"
            type="image/webp"
          />
          <source
            media="(min-width: 600px)"
            type="image/webp"
            srcset="
              /images/image_hero-banner_Tablet.webp,
              /images/image_hero-banner_Tablet.jpg
            "
          />
          <source
            media="(min-width: 200px)"
            type="image/webp"
            srcset="/images/image_hero-banner_Mobile.webp"
          />
          <img
            src="/images/image_hero-banner_Mobile.jpg"
            width="390"
            height="640"
            h="full"
            w="full"
            class="xl:max-h-600px 3xl:max-h-720px"
            m="x-auto 3xl:(t-2)"
            object="cover"
            rounded=" 3xl:3xl"
            alt="poza din fata cabanei lirca"
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

          <button class="btn-primary" @click="showModal = true">
            {{ $t("contacteazane") }}
          </button>
        </div>
      </div>
    </section>
    <div p="y-12">
      <facilitati-cabana :isHomepage="true" />
    </div>
    <DespreNoiHomeapge />
    <CabanaAtractiiComponents />
    <recenzii-cabana />
    <GalerieHomepage />
    <section>
      <Transition name="fade">
        <ContactPopup v-if="showModal" @close-modal="showModal = false" />
      </Transition>
    </section>
  </div>
</template>
<script setup lang="ts">
const showModal = ref(false);

const body = process.client ? document.body : null;
useHead({
  title: "Cabana Lirca",
  meta: [
    {
      name: "description",
      content:
        "Cabana Lirca este situata in Localitatea Rastolita, satul de reședință al comunei cu același nume din județul Mureș, Transilvania, România.",
    },
  ],
});

watchEffect(() => {
  if (body && showModal.value) {
    body.style.overflow = "hidden";
  } else if (body) {
    body.style.overflow = "";
  }
});
</script>

<template>
  <div p="t-56px x-4 sm:x-40px">
    <h2 text="center">{{ $t("cabana") }}</h2>
    <div p="y-4 b-56px sm:y-8 3xl:y-64px">
      <FacilitatiCabana class="max-w-1200px" m="x-auto" />
    </div>
    <div
      flex="~ col 3xl:row"
      gap="4"
      p="b-56px"
      class="max-w-1300px 3xl:max-w-1580px"
      m="x-auto"
    >
      <InformatiiCabana
        src="/images/gallery-image-2.jpg"
        title="interiorCabana"
        text="cabanaSeIntinde"
        class="flex-1"
        route="galerie"
      />

      <InformatiiCabana
        src="/images/gallery-image-3.jpg"
        title="exteriorCabana"
        text="proprietateaAreOgradina"
        class="flex-1"
        route="galerie"
      />
      <InformatiiCabana
        src="/images/gallery-image-4.jpg"
        title="alteFacilitati"
        text="alteFacilitatiAleProprietatii"
        class="flex-1"
        route="galerie"
      />
    </div>
  </div>
</template>

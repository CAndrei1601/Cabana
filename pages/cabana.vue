<template>
  <div p="t-56px x-4 sm:x-40px">
    <h2 text="center green100">{{ $t("cabana") }}</h2>
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
        src="/images/image_interior-cabana.jpg"
        srcWebp="/images/image_interior-cabana.webp"
        title="interiorCabana"
        text="cabanaSeIntinde"
        class="flex-1"
        route="galerie"
      />

      <InformatiiCabana
        src="/images/image_exterior-cabana.jpg"
        srcWebp="/images/image_exterior-cabana.webp"
        title="exteriorCabana"
        text="proprietateaAreOgradina"
        class="flex-1"
        route="galerie"
      />
      <InformatiiCabana
        src="/images/image_alte-facilitati.jpg"
        srcWebp="/images/image_alte-facilitati.webp"
        title="alteFacilitati"
        text="alteFacilitatiAleProprietatii"
        class="flex-1"
        route="galerie"
      />
    </div>
  </div>
</template>

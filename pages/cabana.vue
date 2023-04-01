<template>
  <div p="t-56px x-4 sm:x-40px">
    <h2 text="center">{{ $t("cabana") }}</h2>
    <div p="y-4 b-56px ">
      <FacilitatiCabana />
    </div>
    <div flex="~ col 2xl:row" gap="4" p="b-56px">
      <InformatiiCabana
        src="/images/gallery-image-2.jpg"
        title="interiorCabana"
        text="cabanaSeIntinde"
      />

      <InformatiiCabana
        src="/images/gallery-image-3.jpg"
        title="exteriorCabana"
        text="proprietateaAreOgradina"
      />
      <InformatiiCabana
        src="/images/gallery-image-4.jpg"
        title="alteFacilitati"
        text="alteFacilitatiAleProprietatii"
      />
    </div>
  </div>
</template>

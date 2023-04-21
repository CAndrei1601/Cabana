<template>
  <div p="y-56px x-6 sm:y-88px  x-40px" class="atractii-container">
    <div text="white center">
      <h2 p="b-6">{{ $t("atractii") }}</h2>
      <p p="b-8">{{ $t("vaPunemLaDispozitie") }}</p>
    </div>
    <div class="max-w-1580px" m="x-auto">
      <div class="atractii-cards-1">
        <div class="card-1">
          <atractii-component traseuIndex="1">
            <p>Piatra Fantanele</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Vf. Straniorul</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Piatra Fantanele</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Vf. Pietrosul</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Vf. Ratitis-Secu</p>
          </atractii-component>
        </div>
        <div class="card-2">
          <atractii-component traseuIndex="2">
            <p>Traseu Tip Rastolitei</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Saua Tihului</p>
          </atractii-component>
        </div>
        <div class="card-3">
          <atractii-component traseuIndex="3">
            <p>Rastolita (DN15)</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Poiana Cofu</p>
          </atractii-component>
        </div>
        <div class="card-4">
          <atractii-component traseuIndex="4">
            <p>Rastolita</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Curmatura Tihului</p>
          </atractii-component>
        </div>
      </div>
      <div class="atractii-cards-2">
        <div class="card-5">
          <atractii-component traseuIndex="5">
            <p>Gura Scurtu</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Poiana Lunga</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Taul Zanelor</p>
          </atractii-component>
        </div>
        <div class="card-6">
          <atractii-component traseuIndex="6">
            <p>Gura Tihului</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Valea Tihului</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Vf. Tihu</p>
          </atractii-component>
        </div>
        <div class="card-7">
          <atractii-component traseuIndex="7">
            <p>Rastolita</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Vila Visa</p>
            <img src="/icons/arrow.svg" width="24" height="24" />
            <p>Poiana Stagii</p>
          </atractii-component>
        </div>
      </div>
    </div>
    <div m="t-56px x-auto" class="max-w-1580px">
      <InformatiiCabana
        srcWebp="/images/image_partia-toplita.webp"
        src="/images/image_partia-toplita.jpg"
        title="partiaToplita"
        text="laOdistantaDeAprox"
        class="flex-1"
        route="galerie"
        :atractiiPage="true"
      />
    </div>
  </div>
</template>
<script setup>
useSchemaOrg([
  defineWebPage({
    image: "/icons/arrow.svg",
    image: "/images/image_partia-toplita.jpg",
  }),
]);
</script>
<style scoped lang="scss">
.atractii-container {
  background-image: url("/images/atractii-bg-image_Mobile.webp");
  background-size: cover;

  @screen sm {
    background-image: url("/images/atractii-bg-image.webp");
  }
}

.atractii-cards-1 {
  display: grid;
  gap: 12px;
  grid-auto-rows: 1fr;
  grid-auto-columns: minmax(0, 1fr);
  grid-template-areas:
    "a"
    "b"
    "c"
    "d";

  @screen sm {
    grid-template-areas:
      "a b"
      "c d";
  }

  @screen lg {
    gap: 24px;
  }
}

.atractii-cards-2 {
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-auto-rows: 1fr;
  grid-template-areas:
    "e"
    "f"
    "g";

  @screen sm {
    grid-template-areas: "e f g";
  }

  @screen lg {
    gap: 24px;
    margin-top: 24px;
  }
}
.card-1 {
  grid-area: a;
}
.card-2 {
  grid-area: b;
}

.card-3 {
  grid-area: c;
}

.card-4 {
  grid-area: d;
}

.card-5 {
  grid-area: e;
}

.card-6 {
  grid-area: f;
}

.card-7 {
  grid-area: g;
}

p {
  font-size: 14px;
  line-height: 22px;

  @screen sm {
    font-size: 16px;
    line-height: 24px;
  }

  @screen lg {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>

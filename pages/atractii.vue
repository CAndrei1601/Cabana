<template>
  <div text="white center" p="y-56px x-6" class="atractii-container">
    <h2 p="b-6">{{ $t("atractii") }}</h2>
    <p p="b-8">{{ $t("vaPunemLaDispozitie") }}</p>

    <div class="atractii-cards">
      <div class="card-1">
        <atractii-component traseuIndex="1">
          <p>Piatra Fantanele</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Vf. Straniorul</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Piatra Fantanele</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Vf. Pietrosul</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Vf. Ratitis-Secu</p>
        </atractii-component>
      </div>
      <div class="card-2">
        <atractii-component traseuIndex="2">
          <p>Traseu Tip Rastolitei</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Saua Tihului</p>
        </atractii-component>
      </div>
      <div class="card-3">
        <atractii-component traseuIndex="3">
          <p>Rastolita (DN15)</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Poiana Cofu</p>
        </atractii-component>
      </div>
      <div class="card-4">
        <atractii-component traseuIndex="4">
          <p>Rastolita</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Curmatura Tihului</p>
        </atractii-component>
      </div>
      <div class="card-5">
        <atractii-component traseuIndex="5">
          <p>Gura Scurtu</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Poiana Lunga</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Taul Zanelor</p>
        </atractii-component>
      </div>
      <div class="card-6">
        <atractii-component traseuIndex="6">
          <p>Gura Tihului</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Valea Tihului</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Vf. Tihu</p>
        </atractii-component>
      </div>
      <div class="card-7">
        <atractii-component traseuIndex="7">
          <p>Rastolita</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Vila Visa</p>
          <nuxt-img src="/icons/arrow.svg" width="24" height="24" />
          <p>Poiana Stagii</p>
        </atractii-component>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.atractii-container {
  background-image: url("/images/atractii-bg-image_Mobile.webp");
  background-size: cover;
}

.atractii-cards {
  display: grid;
  gap: 12px;
  grid-auto-rows: 1fr;
  grid-template-areas:
    "a"
    "b"
    "c"
    "d"
    "e"
    "f"
    "g";

  //   @screen sm {
  //     grid-template-areas:
  //       "a a"
  //       "b c "
  //       "d e "
  //       "f g";
  //   }
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
}
</style>

<template>
  <section bg="cream">
    <div
      p="y-12"
      flex="~ wrap"
      justify="center 2xl:between"
      gap="16px lg:32px"
      w="full"
      text="center"
      class="max-w-1600px"
      m="x-auto"
    >
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=nature.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("peisajNatural") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=quiet.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("locatieRetrasa") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=kitchen.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("bucatarieUtilata") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=wifi.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("wifi") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=parking.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("parcarePrivata") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=atv.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("atvDeInchiri") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=rooms.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("camereSpatioas") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center">
        <nuxt-img src="/icons/icon=ciubar.svg" width="75" height="56" />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("ciubarSiSauna") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

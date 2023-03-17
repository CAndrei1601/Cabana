<template>
  <section
    bg="cream"
    p="y-12"
    flex="~ wrap"
    justify="center"
    gap="16px"
    w="full"
    text="center"
  >
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=nature.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("peisajNatural") }}
      </p>
    </div>
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=quiet.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("locatieRetrasa") }}
      </p>
    </div>
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=kitchen.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("bucatarieUtilata") }}
      </p>
    </div>
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=wifi.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("wifi") }}
      </p>
    </div>
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=parking.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("parcarePrivata") }}
      </p>
    </div>
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=atv.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("atvDeInchiri") }}
      </p>
    </div>
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=rooms.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("camereSpatioas") }}
      </p>
    </div>
    <div flex="~ col" w="104px" items="center">
      <nuxt-img src="/icons/icon=ciubar.svg" width="75" height="56" />
      <p font=" normal" text="sm green100" p="t-3">
        {{ $t("ciubarSiSauna") }}
      </p>
    </div>
  </section>
</template>

<style scoped></style>

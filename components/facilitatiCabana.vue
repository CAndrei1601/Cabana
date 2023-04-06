<template>
  <section bg="cream">
    <div
      flex="~ wrap"
      justify="center 2xl:between"
      gap="16px lg:32px"
      w="full"
      text="center"
      class="max-w-1600px"
      m="x-auto"
    >
      <div flex="~ col" w="104px sm:172px" items="center" v-if="isHomepage">
        <nuxt-img
          src="/icons/icon=nature.svg"
          width="75"
          height="56"
          alt="iconita copaci"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("peisajNatural") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center" v-if="isHomepage">
        <nuxt-img
          src="/icons/icon=quiet.svg"
          width="75"
          height="56"
          alt="iconita locatie retrasa"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("locatieRetrasa") }}
        </p>
      </div>
      <div
        flex="~ col"
        w="104px sm:172px"
        items="center"
        :class="{ 'order-2': !isHomepage }"
      >
        <nuxt-img
          src="/icons/icon=kitchen.svg"
          width="75"
          height="56"
          alt="cana de cafea"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("bucatarieUtilata") }}
        </p>
      </div>
      <div
        flex="~ col"
        w="104px sm:172px"
        items="center"
        :class="{ 'order-3': !isHomepage }"
      >
        <nuxt-img
          src="/icons/icon=wifi.svg"
          width="75"
          height="56"
          alt="semn wifi"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("wifi") }}
        </p>
      </div>
      <div
        flex="~ col"
        w="104px sm:172px"
        items="center"
        :class="{ 'order-4': !isHomepage }"
      >
        <nuxt-img
          src="/icons/icon=parking.svg"
          width="75"
          height="56"
          alt=" iconita masina "
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("parcarePrivata") }}
        </p>
      </div>
      <div
        flex="~ col"
        w="104px sm:172px"
        items="center"
        :class="{ 'order-5': !isHomepage }"
      >
        <nuxt-img
          src="/icons/icon=atv.svg"
          width="75"
          height="56"
          alt="iconita ATV"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("atvDeInchiri") }}
        </p>
      </div>
      <div
        flex="~ col"
        w="104px sm:172px"
        items="center"
        :class="{ 'order-1': !isHomepage }"
      >
        <nuxt-img
          src="/icons/icon=rooms.svg"
          width="75"
          height="56"
          alt="iconita pat matrimonial"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("camereSpatioas") }}
        </p>
      </div>
      <div
        flex="~ col"
        w="104px sm:172px"
        items="center"
        :class="{ 'order-6': !isHomepage }"
      >
        <nuxt-img
          src="/icons/icon=ciubar.svg"
          width="75"
          height="56"
          alt="iconita ciubar"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("ciubarSiSauna") }}
        </p>
      </div>
    </div>
  </section>
</template>
<style>
.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}
.order-6 {
  order: 6;
}
</style>
<script setup lang="ts">
defineProps<{
  isHomepage?: boolean;
}>();
</script>

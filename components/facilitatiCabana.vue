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
        <img
          src="/icons/icon=nature.svg"
          width="75"
          height="56"
          alt="iconita copaci"
          loading="lazy"
        />
        <p font=" normal" text=" green100" p="t-3">
          {{ $t("peisajNatural") }}
        </p>
      </div>
      <div flex="~ col" w="104px sm:172px" items="center" v-if="isHomepage">
        <img
          src="/icons/icon=quiet.svg"
          width="75"
          height="56"
          alt="iconita locatie retrasa"
          loading="lazy"
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
        <img
          src="/icons/icon=kitchen.svg"
          width="75"
          height="56"
          alt="cana de cafea"
          loading="lazy"
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
        <img
          src="/icons/icon=wifi.svg"
          width="75"
          height="56"
          alt="semn wifi"
          loading="lazy"
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
        <img
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
        <img
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
        <img
          src="/icons/icon=rooms.svg"
          width="75"
          height="56"
          alt="iconita pat matrimonial"
          loading="lazy"
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
        <img
          src="/icons/icon=ciubar.svg"
          width="75"
          height="56"
          alt="iconita ciubar"
          loading="lazy"
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

useSchemaOrg([
  defineWebPage({
    image: "/icons/icon=atv.svg",
    image: "/icons/icon=ciubar.svg",
    image: "/icons/icon=kitchen.svg",
    image: "/icons/icon=parking.svg",
    image: "/icons/icon=rooms.svg",
    image: "/icons/icon=wifi.svg",
  }),
]);
</script>

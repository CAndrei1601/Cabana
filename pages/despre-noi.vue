<template>
  <div
    p="x-6 t-6 b-56px md:x-40px t-40px b-80px"
    flex="~ col lg:row"
    justify="lg:between"
    gap="lg:20px 3xl:168px"
    class="max-w-1500px"
    m="lg:x-auto"
  >
    <picture class="lg:order-2">
      <source
        srcset="
          /images/image_despre-noi_Tablet.webp,
          /images/image_despre-noi_Tablet.jpg
        "
        media="(min-width:600px)"
        height="944"
        width="944"
        type="image/webp"
      />
      <source
        media="(min-width: 200px)"
        type="image/webp"
        srcset="/images/image_despre-noi.webp"
      />
      <img
        src="/images/image_despre-noi.jpg"
        height="426"
        width="342"
        w="full ssm:650 md:850px lg:896px"
        h="full"
        class="image-radius-2 sm:min-h-480px lg:order-2"
        object="lg:cover"
      />
    </picture>
    <div class="lg:order-1">
      <h2 p="t-56px b-6 sm:t-80px" text="center green100">
        {{ $t("despreNoi") }}
      </h2>
      <div flex="~ col" gap="4" text="green100" class="max-w-700px" m="x-auto">
        <p>{{ $t("cabanaEsteSituatain") }}</p>
        <p>{{ $t("cabanaSeAflaLa") }}</p>
        <p>{{ $t("muntiiCalimani") }}</p>
      </div>
      <div m="t-4 sm: t-40px" flex="~" justify="center" items="center">
        <NuxtLink to="/galerie">
          <button class="btn-secondary" w="140px">
            {{ $t("veziPoze") }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.image-radius-2 {
  border-radius: 16px;
  @screen sm {
    border-radius: 32px;
  }
}
</style>

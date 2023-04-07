<template>
  <div
    flex="~ col  lg:row 3xl:col"
    :class="{ 'flex-row-atractii': atractiiPage }"
  >
    <nuxt-link
      :to="route"
      display="block"
      w="full lg:432px xl:auto"
      h="auto lg:432px xl:auto"
      class="flex-shrink-0"
      :class="{ 'flex-equal-size h-auto!': atractiiPage }"
    >
      <img
        :src="src"
        width="342"
        height="342"
        sizes="lg:432px"
        class="rounder-image max-h-516px"
        object="cover"
        w="full"
        h="auto lg:100%"
      />
    </nuxt-link>
    <div
      bg="white"
      p="x-32px t-32px b-40px lg:(x-56pxs t-56px b-65px)"
      flex="~ col "
      gap="6 lg:8"
      justify="start"
      class="rounded-container"
      h="3xl:full"
      :class="{
        'flex-equal-size bg-cream! h-auto! just-center ': atractiiPage,
      }"
    >
      <h3 font="normal">{{ $t(title) }}</h3>
      <img src="/images/underline_2.png" width="80" height="12" />
      <p>{{ $t(text) }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.rounder-image {
  border-radius: 20px 20px 0 0;

  @screen lg {
    border-radius: 32px 0 0 32px;
  }

  @screen 3xl {
    border-radius: 32px 32px 0 0;
  }
}

.rounded-container {
  border-radius: 0 0 20px 20px;

  @screen lg {
    border-radius: 0 32px 32px 0;
  }

  @screen 3xl {
    border-radius: 0 0 32px 32px;
  }
}
.just-center {
  @screen lg {
    justify-content: center;
  }
}
.flex-row-atractii {
  @screen 3xl {
    flex-direction: row;
  }

  .rounder-image {
    @screen 3xl {
      border-radius: 32px 0 0 32px;
    }
  }

  .rounded-container {
    @screen 3xl {
      border-radius: 0 32px 32px 0;
    }
  }
}

.flex-equal-size {
  @screen xl {
    flex: 1 1 0px;
  }
}
</style>
<script setup lang="ts">
defineProps<{
  src?: string;
  title?: string;
  text?: string;
  route?: string;
  atractiiPage?: boolean;
}>();
</script>

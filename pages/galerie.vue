<template>
  <div p="y-56px x-6 sm:y-80px x-40px">
    <div class="test-ff">
      <div text="center green100" m="b-56px sm:b-80px 3xl:b-88px">
        <h2 m="b-6">{{ $t("galerie") }}</h2>
        <p class="mx-auto max-w-840px">
          {{ $t("vaInvitamSaUrmaritiGaleria") }}
        </p>
      </div>
      <div flex="~ wrap" justify="center" gap="3 sm:20px" m="b-4 sm:b-8">
        <button
          v-for="category in categories"
          :key="category"
          bg="transparent"
          class="gallery-button flex-1 max-w-140px"
          text="green100"
          :class="{ 'gallery-button-active ': category === selectedCategory }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>
    <div class="image-gallery" :class="{ 'fade-gallery-out': disabled }">
      <div
        v-for="image in filteredImages"
        :key="image.id"
        @click="() => showImg(image.id - 1)"
        w="full"
        h="auto"
        cursor="pointer"
      >
        <picture>
          <source
            media="(min-width: 200px)"
            type="image/webp"
            :srcset="image.srcWebp"
          />
          <img
            width="165"
            height="165"
            :src="image.src"
            :alt="image.title"
            w="full"
            h="auto"
            loading="lazy"
            class="image-radius"
          />
        </picture>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="images"
      :index="indexRef"
      :rotateDisabled="true"
      :moveDisabled="true"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
const visibleRef = ref(false);
const indexRef = ref(0);

const images = ref([
  {
    id: 1,
    title: "Image 1",
    category: "exterior",
    src: "/images/gallery-image-1.jpg",
    srcWebp: "/images/gallery-image-1.webp",
  },
  {
    id: 2,
    title: "Image 2",
    category: "camere",
    src: "/images/gallery-image-2.jpg",
    srcWebp: "/images/gallery-image-2.webp",
  },
  {
    id: 3,
    title: "Image 3",
    category: "camere",
    src: "/images/gallery-image-3.jpg",
    srcWebp: "/images/gallery-image-3.webp",
  },
  {
    id: 4,
    title: "Image 4",
    category: "hol",
    src: "/images/gallery-image-4.jpg",
    srcWebp: "/images/gallery-image-4.webp",
  },
  {
    id: 5,
    title: "Image 5",
    category: "hol",
    src: "/images/gallery-image-5.jpg",
    srcWebp: "/images/gallery-image-5.webp",
  },
  {
    id: 6,
    title: "Image 6",
    category: "living",
    src: "/images/gallery-image-6.jpg",
    srcWebp: "/images/gallery-image-6.webp",
  },
  {
    id: 7,
    title: "Image 7",
    category: "living",
    src: "/images/gallery-image-7.jpg",
    srcWebp: "/images/gallery-image-7.webp",
  },
  {
    id: 8,
    title: "Image 8",
    category: "bucatarie",
    src: "/images/gallery-image-8.jpg",
    srcWebp: "/images/gallery-image-8.webp",
  },
  {
    id: 9,
    title: "Image 9",
    category: "camere",
    src: "/images/gallery-image-9.jpg",
    srcWebp: "/images/gallery-image-9.webp",
  },
  {
    id: 10,
    title: "Image 10",
    category: "exterior",
    src: "/images/gallery-image-10.jpg",
    srcWebp: "/images/gallery-image-10.webp",
  },
  {
    id: 11,
    title: "Image 11",
    category: "exterior",
    src: "/images/gallery-image-11.jpg",
    srcWebp: "/images/gallery-image-11.webp",
  },
  {
    id: 12,
    title: "Image 12",
    category: "exterior",
    src: "/images/gallery-image-12.jpg",
    srcWebp: "/images/gallery-image-12.webp",
  },
]);

const selectedCategory = ref("Toate");
const disabled = ref(false);

function animateGalery() {
  console.log("test");
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 1500);
}
const categories = computed(() => {
  const categories = new Set();
  categories.add("Toate");
  images.value.forEach((image) => categories.add(image.category));
  return Array.from(categories);
});

const filteredImages = computed(() => {
  if (selectedCategory.value === "Toate") {
    return images.value;
  } else {
    return images.value.filter(
      (image) => image.category === selectedCategory.value
    );
  }
});

watch(selectedCategory, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    animateGalery();
  }
});
const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);
</script>

<style scoped lang="scss">
.gallery-button {
  border: 1px solid rgba(48, 62, 48, 0.4);
  text-transform: capitalize !important;
}

.gallery-button-active {
  background-color: #303e30;
  color: #f0ede4;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  max-width: 1580px;
  margin-inline: auto;

  @screen sm {
    grid-template-columns: repeat(3, 1fr);
  }
}

.image-radius {
  border-radius: 24px;

  @screen sm {
    border-radius: 32px;
  }
}

.fade-gallery-out {
  animation: fade-in 500ms ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

<script lang="ts" setup></script>

<template>
  <nav bg="green100">
    <div
      items="center"
      w="full"
      m="x-auto"
      class="flex relative min-h-72px max-w-1920px"
      justify="between"
      p="x-4 y-10px sm:(y-14px  x-10) 3xl:x-168px"
    >
      <div
        class="absolute"
        display="flex sm:none"
        justify="center"
        items="center"
      >
        <button
          class="menu"
          z="20"
          :class="{ opened: isOpened }"
          :aria-expanded="isOpened"
          aria-label="Main Menu"
          @click="toggleMenu"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            class="hamburger-svg"
          >
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <div class="menu-mobile" :class="{ 'menu-mobile-open': isOpened }">
        <div
          flex="~ col"
          justify="start"
          w="full"
          bg="green100"
          text="cream"
          gap="32px"
          p="y-96px x-48px"
        >
          <NuxtLink
            @click="toggleMenu"
            class="min-w-90px sm:min-w-100px"
            to="/"
            >{{ $t("acasa") }}</NuxtLink
          >
          <NuxtLink
            @click="toggleMenu"
            class="min-w-90px sm:min-w-100px"
            to="/despre-noi"
            >{{ $t("despreNoi") }}</NuxtLink
          >
          <NuxtLink @click="toggleMenu" to="/cabana">{{
            $t("cabana")
          }}</NuxtLink>
          <NuxtLink @click="toggleMenu" to="/atractii">
            {{ $t("atractii") }}
          </NuxtLink>
          <NuxtLink @click="toggleMenu" to="/galerie">
            {{ $t("galerie") }}</NuxtLink
          >
          <button @click="toggleContact">
            <p text="left">{{ $t("contact") }}</p>
          </button>
        </div>
      </div>

      <div w="full" class="flex items-center" justify="center sm:start">
        <NuxtLink to="/">
          <img src="/icons/logo-mobile.svg" width="52" height="52" alt="logo cabana lirca" display="md:none">
          <img src="/icons/logo.svg" width="126" height="52" alt="logo cabana lirca" display="none md:block" > 
        </NuxtLink>
      </div>

      <div
        display="none sm:flex"
        justify="between"
        items="center"
        w="full sm:auto"
        text="cream "
        gap="sm:40px lg:48px"
      >
        <NuxtLink class="min-w-90px sm:min-w-92px" to="/despre-noi">{{
          $t("despreNoi")
        }}</NuxtLink>
        <NuxtLink to="/cabana">{{ $t("cabana") }}</NuxtLink>
        <NuxtLink to="/atractii"> {{ $t("atractii") }} </NuxtLink>
        <NuxtLink to="/galerie"> {{ $t("galerie") }}</NuxtLink>
        <button @click="showModal = true">
          <p>{{ $t("contact") }}</p>
        </button>
      </div>
    </div>
  </nav>
  <div h="72px sm:80px"></div>
  <slot></slot>
  <section>
    <Transition name="fade">
      <ContactPopup v-if="showModal" @close-modal="showModal = false" />
    </Transition>
  </section>
  <footer>
    <div bg="green100">
      <div p="x-40px y-48px sm:8">
        <Informations />
      </div>
    </div>
    <div justify="center" flex=" ~ col" items="center" class="footer-bg">
      <div p="x-40px y-48px sm:(t-8 b-26px) " flex="~">
        <div flex="" gap="18px">
          <NuxtLink
            to="https://m.facebook.com/profile.php?id=100063504583726&_rdr"
            target="_blank"
            aria-label="facebook link"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="socials"
            >
              <path
                d="M19.9992 1.53613C9.80156 1.53613 1.53516 9.80253 1.53516 20.0001C1.53516 30.1977 9.80156 38.4641 19.9992 38.4641C30.1968 38.4641 38.4632 30.1977 38.4632 20.0001C38.4632 9.80253 30.1968 1.53613 19.9992 1.53613ZM26.054 21.0289C25.3124 21.0165 24.6344 21.0381 23.7724 21.0009C23.6324 20.9945 21.3872 21.0281 21.394 21.0689C21.5572 22.0673 21.3228 23.1281 21.3368 24.1377C21.3452 24.7261 21.518 30.0493 21.4384 32.0129L16.9892 32.0537C16.9708 30.3817 17.0524 28.6621 16.98 26.4569C16.9652 26.0037 16.9504 21.2325 16.8976 20.9813C16.8976 20.9813 14.9312 20.9953 14.012 21.0009C14.012 21.0009 13.9996 19.2401 13.9996 18.6445C13.9996 18.0593 13.9996 17.4749 13.9996 16.8897C13.9996 16.8897 16.2948 16.7625 16.9536 16.7053C16.9536 16.7053 17.0208 14.4717 17.112 13.7481C17.2172 12.9217 17.2276 12.0865 17.7128 11.3553C18.602 10.0169 19.4796 8.83733 21.1144 8.48173C21.7328 8.34653 25.8108 7.54493 25.962 8.20453L25.8692 12.1757C24.7604 12.1757 23.4316 12.0633 22.3 12.9037C21.67 13.3725 21.496 13.7629 21.4324 14.5341C21.3944 14.9825 21.3856 16.7973 21.3856 16.7973C21.9832 16.8825 22.8676 16.8449 23.51 16.7973C24.2356 16.7433 26.0984 16.9357 26.0984 16.9357C26.0976 18.1369 26.0496 20.9101 26.054 21.0289Z"
                fill="#F0EDE4"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/cabanadeinchiriat/"
            target="_blank"
            aria-label="instagram link"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="socials"
            >
              <path
                d="M21.2553 16.8459C19.6065 16.1195 17.5745 16.9815 16.8717 18.6083C16.4129 19.6703 16.4081 20.7371 16.7829 21.6163C17.2533 22.7199 18.3213 23.5275 19.8393 23.6607C21.5825 23.8131 23.0769 22.5779 23.4785 20.9091C23.8533 19.3491 22.6917 17.4791 21.2553 16.8459Z"
                fill="#F0EDE4"
              />
              <path
                d="M23.6719 11.1845C20.8815 11.0865 18.0935 11.2141 15.3019 11.2893C11.7159 11.3853 11.0055 15.4489 11.0811 18.5985C11.0935 19.1169 11.0827 19.6473 11.0647 20.1833C10.9827 22.6753 11.0507 27.0593 13.4183 28.3445C14.3915 28.8733 15.5611 28.8905 16.6383 28.8505C17.9331 28.8017 19.2175 28.7973 20.5123 28.8633C22.3207 28.9553 24.1095 29.0265 25.8923 28.6025C28.3647 28.0137 28.7899 26.7869 28.9651 24.5869C29.0411 23.6261 28.9639 22.4681 28.9719 21.2785C28.9883 18.6865 29.5611 14.1073 27.3122 12.1717C26.3266 11.3245 24.9111 11.2289 23.6719 11.1845ZM22.9523 24.8281C20.0011 26.9417 15.6511 25.2073 14.6487 21.8313C14.5807 21.6029 14.5279 21.3673 14.4923 21.1241C14.2371 19.3897 14.9567 16.5865 16.6767 15.5185C20.1079 13.3877 22.9575 14.9505 24.1787 16.4061C24.8359 17.1901 25.3227 18.2985 25.4915 19.3189C25.8387 21.4209 24.6347 23.6225 22.9523 24.8281ZM26.1083 15.7201C25.3419 15.9549 24.1935 15.1413 24.7407 13.7789C25.0283 13.0637 25.7503 12.8705 26.6103 13.3337C27.2863 13.6981 27.3907 15.3281 26.1083 15.7201Z"
                fill="#F0EDE4"
              />
              <path
                d="M19.9992 1.53613C9.80156 1.53613 1.53516 9.80253 1.53516 20.0001C1.53516 30.1977 9.80156 38.4641 19.9992 38.4641C30.1968 38.4641 38.4632 30.1977 38.4632 20.0001C38.4632 9.80253 30.1968 1.53613 19.9992 1.53613ZM30.83 20.0689C30.8588 21.4665 30.772 22.8629 30.8108 24.2621C30.8812 26.7957 29.9672 29.2381 27.4092 30.2389C24.3068 31.4525 20.5244 30.7849 17.272 30.7849C15.8636 30.7849 14.416 30.8973 13.0644 30.4965C12.0304 30.1893 11.3636 29.6045 10.6472 28.8021C10.3248 28.4413 10.1144 28.0797 9.94196 27.6381C9.10956 25.5025 9.26956 23.5421 9.17716 21.2949C9.12396 20.0109 9.14756 18.7241 9.15956 17.4385C9.17636 15.6817 9.16396 14.1101 9.81036 12.4469C10.4632 10.7661 12.702 9.44093 14.438 9.32693C17.9984 9.09413 21.748 8.78493 25.2872 9.35373C26.6828 9.57813 28.1532 10.0373 29.1564 11.0805C30.4636 12.4389 30.7824 14.3797 30.842 16.3305C30.882 17.6285 30.8068 18.9305 30.83 20.0689Z"
                fill="#F0EDE4"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
      <div
        flex="~ col sm:row"
        gap="24px sm:32px"
        text="cream"
        class="text-opacity"
        justify="center"
        items="center"
        m=" b-48px sm:b-26px"
      >
        <NuxtLink target="_blank" to="https://www.booking.com/hotel/ro/cabana-ghita-rastolita1.ro.html?aid=318615&label=New_Romanian_RO_RO_27026376865-jVsIlP4zXhNaIzBkAG9XkAS634117836903%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-140566008985%3Alp9040264%3Ali%3Adec%3Adm%3Aag27026376865%3Acmp400536985&sid=1fff32e51692587ed42f485cdcdd3427&dest_id=-1168352;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1681324784;srpvid=4ee08337d7f1006d;type=total;ucfs=1&#hotelTmpl"
          ><p>{{ $t("booking") }}</p></NuxtLink
        >
        <NuxtLink to="/cookies"
          ><p>{{ $t("politicaDeUtilizare") }}</p></NuxtLink
        >
        <NuxtLink to="/confidentialitate"
          ><p>{{ $t("politicaDeConf") }}</p></NuxtLink
        >
      </div>

      <p m="b-48px sm:b-26px" text="cream">
        © Cabana Lirca, 2023. All rights reserved.
      </p>
    </div>
  </footer>
  <CookiesPopup />

</template>


<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 90;
}
button {
  background: none;
  @apply text-cream;
  text-transform: none;
  font-weight: 400;
  padding: 0;
}
a {
  &:hover {
    color: #f88758 !important;
    transition: color 200ms ease-in-out;
  }
}

.menu-mobile {
  position: absolute;
  top: 0px;
  width: 100%;
  left: 0;
  right: 0;
  height: 0;
  z-index: 2;
  overflow: hidden;
  transition: height 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &-open {
    height: 496px;
  }
}

.socials:hover path {
  fill: #f88758;
  transition: fill 100ms ease-in-out;
}

.router-link-active {
  color: #f88758;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-opacity {
  opacity: 0.5;
}

.footer-bg {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)),
    #303e30;
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: white;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 5;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 5;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 5;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 3;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 3;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 3;
}
</style>
<script setup lang="ts">
const showModal = ref(false);

const body = process.client ? document.body : null;
const menuMobile = ref(false);

const isOpened = ref(false);

const toggleMenu = () => {
  isOpened.value = !isOpened.value;
};

const toggleContact = () => {
  isOpened.value = !isOpened.value;
  showModal.value = true;
};

useSchemaOrg([
  // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
  defineOrganization({
    name: 'Cabana Lirca',
    logo: '/logo.png',
    sameAs: [
      'https://twitter.com/company'
    ]
  }),
  defineWebPage(),
]);

watchEffect(() => {
  if (body && showModal.value) {
    body.style.overflow = "hidden";
  } else if (body) {
    body.style.overflow = "";
  }
});
</script>

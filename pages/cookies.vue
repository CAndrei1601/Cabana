<template>
  <div p="x-6 t-6 b-56px md:x-40px t-40px b-80px" flex="~ col " gap=" lg:16px ">
    <h2 m="b-6" text="green100">{{ $t("politicaDeUtilizareCookies") }}</h2>

    <div flex="~ col " gap="4">
      <h3 text="green100">1.{{ $t("politicaCookies") }}</h3>
      <p>{{ $t("prezentaPolitica") }}</p>
      <h3 text="green100">2.{{ $t("ceSuntCookies") }}</h3>
      <p>{{ $t("utilizamTermenulDe") }}</p>
      <h3 text="green100">3.{{ $t("avantajeCook") }}</h3>
      <p>{{ $t("avantajeleCookie") }}</p>
      <h3 text="green100">4.{{ $t("scopurileInCare") }}</h3>

      <p flex="~ col" gap="8px">
        {{ $t("cookieSuntUtilizate") }}
        <span>• {{ $t("imbunatatireaUtilizat") }}</span>
        <span>• {{ $t("furnizareaDeStatistici") }}</span>
        <span>• {{ $t("anticipareaUnorEventuale") }}</span>
        <span>• {{ $t("oferireaDeServicii") }}</span>
      </p>
      <p flex="~ col" gap="8px">
        {{ $t("peBazaFeedbackului") }}
        <span> •{{ $t("limbaInCare") }}</span>
      </p>

      <h3 text="green100">5.{{ $t("durataDeViata") }}</h3>
      <div flex="~ col" gap="8px">
        <p>{{ $t("durataDeViataAcookie") }}</p>
        <p>{{ $t("cookiesDeSes") }}</p>
        <p>{{ $t("cookiesDePersistenta") }}</p>
        <p>{{ $t("aflatiMaiMulte") }}</p>
      </div>

      <h3 text="green100">6.{{ $t("cookiePlasateDe") }}</h3>
      <p>
        {{ $t("anumiteSectiuni") }}
        <span>
          <NuxtLink to="/confidentialitate" cursor="pointer"
            ><u>{{ $t("politcaDeConfidenti") }}</u></NuxtLink
          >
          <span>{{ $t("disponibilaPeAceasta") }}</span>
        </span>
      </p>

      <h3 text="green100">7.{{ $t("cookiesFolositrPrin") }}</h3>
      <p flex="~ col" gap="8px">
        {{ $t("prinUtilizarea") }}
        <span> •{{ $t("cookiDePerf") }} </span>
        <span> •{{ $t("cookiePentruAnali") }} </span>
      </p>
      <p>
        {{ $t("cookiDePerformanta") }} - <span>{{ $t("cookieDePerf") }}</span>
      </p>
      <p>
        {{ $t("cookieAnaliza") }} - {{ $t("acesteCookies") }}
        <NuxtLink to="/confidentialitate"
          ><u>{{ $t("politcaDeConfidenti") }}</u></NuxtLink
        >
      </p>
      <h3 text="green100">8.{{ $t("infoStocate") }}</h3>
      <p>{{ $t("cookiePastreaza") }}</p>
      <h3 text="green100">9.{{ $t("particularizarea") }}</h3>
      <p>{{ $t("inCazulInCare") }}</p>
      <h3 text="green100">10.{{ $t("securitateaSiProblem") }}</h3>
      <p>{{ $t("cookieNuSunt") }}</p>
      <p>{{ $t("multeProduse") }}</p>
      <h3 text="green100">11.{{ $t("sfaturiPentruNavigare") }}</h3>
      <p flex="~ col" gap="8px">
        {{ $t("iataCatevaSfaturi") }}
        <span>•{{ $t("particularizativa") }}</span>
        <span>•{{ $t("dacaNuVaDeranjeaza") }}</span>
        <span>•{{ $t("dacaImpartitiAcelasi") }}</span>
      </p>
      <p>{{ $t("cookieurileSuntPretutindeni") }}</p>
      <p>{{ $t("toateBrowserele") }}</p>
      <div text="black" flex="~ col" gap="12px">
        <NuxtLink
          to="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
          >•Cookie settings in Internet Explorer</NuxtLink
        >
        <NuxtLink
          to="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies"
          >•Cookie settings in Firefox</NuxtLink
        >
        <NuxtLink to="https://support.google.com/chrome/answer/95647?hl=en"
          >•Cookie settings in Chrome</NuxtLink
        >
        <NuxtLink
          to="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac"
          >•Cookie settings in Safari</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

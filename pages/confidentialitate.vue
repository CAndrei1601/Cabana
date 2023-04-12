<template>
  <div p="x-6 t-6 b-56px md:x-40px t-40px b-80px" flex="~ col " gap=" lg:16px ">
    <h2 text="green100" m="b-6">{{ $t("prelucrareaDatelor") }}</h2>

    <h3 text="green100">1.{{ $t("informatiiGenerale") }}</h3>
    <p>{{ $t("confident") }}</p>
    <h3 text="green100">2.{{ $t("categoriileDeDate") }}</h3>
    <p>{{ $t("dacaSunteti") }}</p>
    <h3 text="green100">3.{{ $t("scopurileSiTemeiurile") }}</h3>
    <p>-{{ $t("optimizareActivitate") }}</p>
    <p>-{{ $t("scopuriStatistice") }}</p>
    <p>{{ $t("caPrincipiu") }}</p>
    <h3 text="green100">4.{{ $t("durataPentruCare") }}</h3>
    <p>{{ $t("caPrincipiu") }}</p>

    <h3 text="green100">5.{{ $t("dezvDateCu") }}</h3>
    <div flex="~ col" gap="8px">
      <p>{{ $t("pentruIndeplinirea") }}</p>
      <span> • {{ $t("administrareSite") }}</span>
      <span> • {{ $t("efectuareAnalize") }}</span>
      <span> • {{ $t("atunciCand") }}</span>
    </div>
    <h3 text="green100">6.{{ $t("drepturileBeneficiarului") }}</h3>
    <div flex="~ col" gap="8px">
      <p>• {{ $t("dereptulLaInformare") }}</p>
      <p>• {{ $t("dreptulLaAcces") }}</p>
      <p>• {{ $t("dreptulLaRectificare") }}</p>
      <p>• {{ $t("dreptulLaStergere") }}</p>
      <p>• {{ $t("dreptulLaRest") }}</p>
      <p>• {{ $t("dpretLaPolitica") }}</p>
      <p>• {{ $t("dreptulLaOpozitie") }}</p>
      <p>• {{ $t("dreptulDeAnuFi") }}</p>
    </div>
    <p>{{ $t("esteBineSaStiti") }}</p>
    <p>{{ $t("vaAsiguram") }}</p>
    <p>{{ $t("deAsemeneaVa") }}</p>
  </div>
</template>

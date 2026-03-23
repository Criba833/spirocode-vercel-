<script setup lang="ts">
// Home page - assembles all sections
</script>

<template>
  <div class="home">
    <NavNavbar />
    <SectionsHeroSection />
    <SectionsProblemSection />
    <SectionsBrandsSection />
    <SectionsAboutSection />
    <SectionsBigTextSection
      :text="'Diseñamos sistemas para crecer.'"
      text-color="dark"
      background-image="@/public/image/world.svg"
    />
    <SectionsServicesSection />
    <SectionsHowWeDoSection />
    <SectionsTechSection />
    <SectionsCloseSection />
    <SectionsFooterSection />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>

<script setup lang="ts">
// Home page - assembles all sections
</script>

<template>
  <div class="home">
    <NavNavbar />
    <SectionsHero />
    <SectionsBigText
      :text="'Diseñamos sistemas para crecer.'"
      text-color="dark"
      background-image=""
    />

    <SectionsProblem />
    <SectionsBrands />
    <SectionsAbout />

    <SectionsServices />

    <SectionsBigText
      text="Como lo hacemos"
      text-color="dark"
      background-image="/svg/world.svg"
    />
    <SectionsHowWeDo />
    <UiDivider />
    <SectionsTech />
    <UiDivider
      text="Si la tecnología es un factor clave para la evolución de tu empresa, probablemente podamos ayudarte."
      size="lg"
    />
    <SectionsClose />
    <SectionsFooter />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>

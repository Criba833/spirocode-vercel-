<script lang="ts" setup></script>

<template>
  <div>
    <nav class="flex gap-4 p-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<style lang="css" scoped></style>

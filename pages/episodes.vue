<template>
  <header class="header"></header>
  <main class="main">
    <section class="items_main" id="items">
      <itemsMain :items="episodes" :isCharacters="false" />
    </section>
  </main>
  <footer class="footer"></footer>
</template>

<script setup>
import { useMainStore } from "~/src/stores/MainStore";
import { computed } from "vue";

const mainStore = useMainStore();
const episodes = computed(() => mainStore.episodes);
</script>

<style lang="scss" scoped>
.items_main {
  background-color: var(--c-black);
}
</style>

<template>
  <header class="header"></header>
  <main class="main">
    <section class="items_main" id="items">
      <itemsMain :items="characters" :isCharacters="true" />
    </section>
  </main>
  <footer class="footer"></footer>
</template>

<script setup>
import { useMainStore } from "~/src/stores/MainStore";
import { computed } from "vue";

const mainStore = useMainStore();
const characters = computed(() => mainStore.characters);
</script>

<style lang="scss" scoped>
.items_main {
  background-color: var(--c-black);
}
</style>

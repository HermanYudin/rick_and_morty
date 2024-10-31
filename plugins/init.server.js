import { defineNuxtPlugin } from "#app";
import { useMainStore } from "../src/stores/MainStore";

export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useMainStore(nuxtApp.$pinia);
  await store.fetchCharacters();
  await store.fetchEpisodes();
});

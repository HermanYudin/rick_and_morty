import { defineStore } from "pinia";
import axios from "axios";
import { useRuntimeConfig } from "nuxt/app";
import { useRoute } from "vue-router";

export const useMainStore = defineStore("MainStore", {
  state: () => {
    return {
      navLinks: [
        { title: "Персонажи", link: "/" },
        { title: "Эпизоды", link: "/episodes" },
      ],

      selectors: [
        {
          id: 1,
          title: "Дата",
        },
        {
          id: 2,
          title: "Алфавит",
        },
      ],

      url: useRuntimeConfig().public.url,
      id: useRoute().params.id,
      characters: [],
      episodes: [],
      currentArticle: ref({}),
    };
  },

  actions: {
    async fetchCharacters() {
      this.characters = (
        await axios.get(`${this.url}api/character`)
      ).data.results;
    },

    async fetchEpisodes() {
      this.episodes = (await axios.get(`${this.url}api/episode`)).data.results;
    },

    async fetchOneCharacter(id) {
      this.currentArticle = (
        await axios.get(`${this.url}api/character/${id}`)
      ).data;
    },

    async fetchOneEpisode(id) {
      this.currentArticle = (
        await axios.get(`${this.url}api/episode/${id}`)
      ).data;
    },

    filterCharactersBySearch(name) {
      return this.characters.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      );
    },

    sortCharactersByStatus(items) {
      return items.sort((a, b) => a.status.localeCompare(b.status));
    },

    sortCharactersBySpecies(items) {
      return items.sort((a, b) => a.species.localeCompare(b.species));
    },

    sortCharactersByDate(items) {
      return items.sort((a, b) => {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      });
    },

    sortCharactersByAlph(items) {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
});

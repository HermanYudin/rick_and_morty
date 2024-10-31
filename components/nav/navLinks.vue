<template>
  <div class="nav-links_container">
    <ul class="nav-links">
      <li class="nav-link" v-for="(link, index) in navLinks" :key="index">
        <nuxt-link
          class="nav-link_link"
          :to="link.link"
          :class="{ 'active-link': link.isActive }"
          @click="setActive(index)"
          >{{ link.title }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useMainStore } from "~/src/stores/MainStore";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useMainStore();
const navLinks = store.navLinks;

onMounted(() => {
  navLinks.forEach((link) => {
    link.isActive = false;
  });

  if (route.path === "/characters") {
    navLinks[0].isActive = true;
  } else if (route.path === "/episodes") {
    navLinks[1].isActive = true;
  }
});

function setActive(index) {
  navLinks.forEach((link, i) => {
    link.isActive = i === index;
  });
}
</script>

<style lang="scss" scoped>
.nav-links {
  margin: 0px;
  display: flex;
  gap: 40px;
  list-style: none;
  color: var(--c-white);

  &_container {
    display: flex;
    justify-content: flex-end;
  }
}

.nav-link {
  font-size: 18px;
  font-weight: bold;

  &_link {
    text-decoration: none;
    color: var(--c-black);
    transition: color 0.3s ease;

    &:hover {
      color: var(--c-blue);
      -webkit-text-stroke: 1px var(--c-toxic);
    }
  }
}

.active-link {
  color: var(--c-blue);
  -webkit-text-stroke: 1px var(--c-toxic);
}
</style>

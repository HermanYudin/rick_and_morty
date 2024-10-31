<template>
  <div class="items_wrapper">
    <div class="items">
      <navMain />
      <img class="items_img" src="/public/assets/png/logo.png" alt="logo" />
      <div class="items_container">
        <itemsCharactersAllList
          v-if="isCharacters"
          :items="props.items"
          class="items_list_container"
        />
        <itemsEpisodesAllList
          v-else
          :items="props.items"
          class="items_list_container"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  isCharacters: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.items {
  background-color: var(--c-background);
  position: relative;
  z-index: 1;
  width: 92%;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/png/background.png");
    background-position: 48% 25px;
    background-size: 31%;
    background-repeat: no-repeat;
    z-index: -1;
  }

  &_wrapper {
    background-color: var(--c-background);
    border-radius: 40px;
  }

  &_img {
    display: flex;
    margin: 0 auto;
    margin-top: -20px;
  }

  &_container {
    display: flex;
    flex-direction: column;
    width: 69.2%;
    margin: 0 auto;
    margin-top: 49px;
  }

  &_btn {
    &_link {
      align-self: flex-end;
    }
  }
}

@media (max-width: 1200px) {
  .items {
    &_container {
      width: 90%;
    }
  }
}

@media (max-width: 768px) {
  .items {
    padding-top: 40px;
    padding-bottom: 39px;

    &_list {
      margin-top: 16px;
    }

    &_btn {
      &_link {
        width: 84%;
        align-self: center;
      }
    }

    &_img {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>

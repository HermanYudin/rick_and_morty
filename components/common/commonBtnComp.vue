<template>
  <button :class="class">{{ btnTitle }}</button>
</template>

<script setup>
defineProps({
  btnTitle: {
    type: String,
  },
  class: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
* {
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.filter-container_btn {
  background-color: var(--c-toxic);
  color: var(--c-green);
  border-radius: 10px;
  border: 2px solid var(--c-sky);
  background-image: url("/public/assets/png/icons/sort.png");
  background-repeat: no-repeat;
  padding: 13px 18px;
  text-align: start;
  font-size: 12px;
  min-width: 196px;
  background-position: center right 8px;

  &:hover {
    background-color: var(--c-blue);
    color: var(--c-white);
    border: 2px solid var(--c-toxic);
  }
}

.select_btn {
  min-width: 44px;
  padding: 20px;
  background-image: url("/public/assets/png/icons/nav.png");
  background-position: center center;
  background-color: var(--c-toxic);
  color: var(--c-green);
  border-radius: 10px;
  border: 2px solid var(--c-sky);
  background-repeat: no-repeat;
  text-align: start;
  font-size: 12px;

  &:hover {
    background-color: var(--c-blue);
    color: var(--c-white);
    border: 2px solid var(--c-toxic);
  }
}

.item_pagination_btn {
  background-color: var(--c-toxic);
  color: var(--c-black);
  border: none;
  font-size: 22px;
  border-radius: 15px;
  min-width: 55px;
  min-height: 55px;

  &:hover {
    background-color: var(--c-blue);
    color: var(--c-white);
  }
}

.item_btn {
  display: flex;
  background-color: var(--c-green);
  color: var(--c-white);
  font-size: 25px;
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  margin: 0 auto;
  margin-top: 30px;

  &:hover {
    background-color: var(--c-white);
    color: var(--c-green);
  }
}

@media (max-width: 768px) {
  .items_btn {
    font-size: 16px;
    padding: 11px 0px;
    width: 100%;
  }

  .item_btn {
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  .item_pagination_btn {
    &:hover {
      background-color: var(--c-toxic);
      color: var(--c-black);
    }
  }

  .filter-container_btn {
    &:hover {
      background-color: var(--c-toxic);
      color: var(--c-green);
      border: 2px solid var(--c-blue);
    }
  }

  .item_btn {
    &:hover {
      background-color: var(--c-green);
      color: var(--c-white);
    }
  }
}
</style>

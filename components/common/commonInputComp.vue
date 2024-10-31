<template>
  <input
    :class="class"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    required
  />
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
  },
  class: {
    type: String,
  },
  type: {
    type: String,
  },
  modelValue: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
::placeholder {
  color: var(--c-green);
}

.filter-container_search {
  background-color: var(--c-toxic);
  background-image: url("/public/assets/png/icons/search.png");
  background-repeat: no-repeat;
  padding: 13px;
  font-size: 12px;
  max-width: 230px;
  background-position: center right 8px;
  color: var(--c-green);
  max-width: 230px;
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: 2px solid var(--c-blue);

  &:focus {
    background-color: var(--c-sky);
    color: var(--c-white);
    border: 2px solid var(--c-toxic);

    &::placeholder {
      color: var(--c-white);
    }
  }
}
</style>

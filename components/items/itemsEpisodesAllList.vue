<template>
  <div class="items_list_container">
    <h2 class="episodes_title">Эпизоды</h2>
    <div class="items_all">
      <div class="items_all_articles">
        <div
          class="item"
          v-for="(article, index) in paginatedItems"
          :key="article.id"
        >
          <div class="item_img_container">
            <img
              class="item_img"
              src="~/public/assets/img/episode.jpg"
              :alt="article.name"
            />
          </div>
          <div class="item-text-content_container">
            <h3 class="item_title">Название эпизода: {{ article.name }}</h3>
            <div class="item-text-content">
              <span class="item_episode"
                >Сезон и номер эпизода: {{ article.episode }}</span
              >
              <span class="item_date"
                >Дата создания:
                {{ article.created.slice(0, 10).split("-").join(".") }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="item_pagination" v-if="props.items.length > pageSize">
        <commonBtnComp
          class="item_pagination_btn"
          btnTitle="Назад"
          @click="prevPage"
          :disabled="currentPage === 1"
        />
        <div v-for="page in pages" :key="page">
          <commonBtnComp
            class="item_pagination_btn number"
            :btnTitle="String(page)"
            v-if="page !== '...' && page !== null"
            @click="goToPage(page)"
            :class="{ active: currentPage === page }"
          />
          <span class="item_pagination_dots number" v-else>{{ page }}</span>
        </div>
        <commonBtnComp
          class="item_pagination_btn"
          btnTitle="Вперед"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  isCharacters: {
    type: Boolean,
  },
});

const currentPage = ref(1);
const pageSize = 6;

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return props.items.slice(start, end);
});

const totalPages = computed(() => Math.ceil(props.items.length / pageSize));

const pages = computed(() => {
  const pages = [];
  if (totalPages.value <= 4) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= 3) {
      pages.push(1, 2, 3, "...", totalPages.value);
    } else if (currentPage.value >= totalPages.value - 2) {
      pages.push(
        1,
        "...",
        totalPages.value - 2,
        totalPages.value - 1,
        totalPages.value
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage.value - 1,
        currentPage.value,
        currentPage.value + 1,
        "...",
        totalPages.value
      );
    }
  }
  return pages;
});

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo(0, 0);
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    window.scrollTo(0, 0);
  }
}

function goToPage(page) {
  currentPage.value = page;
  window.scrollTo(0, 0);
}
</script>

<style lang="scss" scoped>
.items {
  &_filter_container {
    display: flex;
    gap: 20px 94px;
    align-items: center;
    flex-wrap: wrap;
  }

  &_list {
    display: flex;
    margin: 0 auto;
    width: 100%;
    margin-top: 49px;
    padding: 24px;
    background-color: var(--c-white);
    border-radius: 20px;
  }

  &_all {
    &_articles {
      display: flex;
      flex-wrap: wrap;
      gap: 31px;
      margin: 0 auto;
      border-radius: 20px;
      margin-top: 27px;
      padding-bottom: 40px;
    }
  }
}

.item {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: var(--c-green);
  margin-right: 0px !important;
  width: 29.5% !important;
  padding-bottom: 21px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &-text-content {
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-top: 15px;
    font-weight: normal;

    &_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      margin: 0 auto;
      width: 90%;
      font-size: 12px;
      color: var(--c-white);
    }
  }

  &_planet_title {
    margin: 0px;
  }

  &_img {
    width: 100%;
    border-radius: 20px;
    max-height: 185px;
    border: 2px solid var(--c-deepblue);
    border-bottom: none;
  }

  &_title {
    font-size: 19px;
    font-weight: normal;
    margin-top: 16px;
    margin-bottom: auto;
    color: var(--c-white);
  }

  &_pagination {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 14px;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 55px;

    &_dots {
      color: var(--c-deepblue);
      font-size: 40px;
    }
  }

  &_species {
    &_and_status {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }

  &_status {
    &_container {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  &_planet {
    &_title {
      font-weight: 100;
      letter-spacing: 0.5px;
      color: var(--c-sky);
    }
  }
}

.filter-container_btns {
  display: flex;
  align-items: center;
  gap: 20px 12px;
  flex-wrap: wrap;
}

.active {
  background-color: var(--c-blue);
  color: var(--c-white);
}

.page_nav {
  &_container {
    width: 90%;
    max-width: 1160px;
    margin: 0 auto;
    margin-top: 40px;
  }
}

.episodes_title {
  text-align: center;
  margin: 0px;
  margin-bottom: 20px;
  font-size: 30px;
  -webkit-text-stroke: 1px var(--c-toxic);
  color: var(--c-blue);
}

@media (max-width: 768px) {
  .page_nav_container {
    display: none;
  }

  .item {
    width: 100% !important;

    &_pagination {
      gap: 7px;

      &_btn {
        min-width: 45px;
        min-height: 45px;
        font-size: 20px;
      }
    }
  }

  .items {
    &_all {
      width: 87.5%;
      margin: 0 auto;
      margin-top: 0px;
      padding: 2px 16px;
      padding-bottom: 16px;
      margin-bottom: 40px;

      &_articles {
        width: 95%;
        gap: 15px;
      }

      &_title {
        font-size: 32px;
        margin-top: 0px;
      }
    }
  }
}

@media (min-width: 400px) and (max-width: 1000px) {
  .item {
    max-width: 300px;
  }

  .items {
    &_filter {
      &_container {
        justify-content: center;
      }
    }

    &_all {
      &_articles {
        justify-content: center;
      }
    }
  }

  .filter {
    &-container {
      &_btns {
        justify-content: center;
      }
    }
  }
}

@media (max-width: 600px) {
  .item {
    &:hover {
      background-color: var(--c-blue);
      box-shadow: none;
      transform: scale(1);
    }
  }

  .number {
    display: none;
  }
}

@media (max-width: 400px) {
  .item {
    max-width: 300px;
    &_img {
      max-height: 179px;
    }
  }
  .filter {
    &-container {
      &_btns {
        justify-content: center;
      }
    }
  }
}
</style>

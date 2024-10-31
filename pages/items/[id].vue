<template>
  <div class="item_container">
    <h2 class="item_main_title">Чётенький перс :D</h2>
    <article class="item">
      <h1 class="item_title">{{ article.name }}</h1>
      <div class="item_disc_container">
        <img class="item_img" :src="article.image" :alt="article.title" />
        <p class="item_disc">
          Здесь должен быть какой-то крутейший текст с описанием, но я не знаю
          какой, потому-что в ручке его нет :P Здесь должен быть какой-то
          крутейший текст с описанием, но я не знаю какой, потому-что в ручке
          его нет :P Здесь должен быть какой-то крутейший текст с описанием, но
          я не знаю какой, потому-что в ручке его нет :P Здесь должен быть
          какой-то крутейший текст с описанием, но я не знаю какой, потому-что в
          ручке его нет :P Здесь должен быть какой-то крутейший текст с
          описанием, но я не знаю какой, потому-что в ручке его нет :P Здесь
          должен быть какой-то крутейший текст с описанием, но я не знаю какой,
          потому-что в ручке его нет :P
        </p>
      </div>
      <nuxt-link to="/" class="item_btn_link">
        <commonBtnComp btnTitle="Вернуться" class="item_btn" />
      </nuxt-link>
    </article>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useMainStore } from "~/src/stores/MainStore";
import { ref, onMounted } from "vue";

const route = useRoute().params.id;
const mainStore = useMainStore();
const article = ref({});

onMounted(async () => {
  await mainStore.fetchOneCharacter(route);
  article.value = mainStore.currentArticle;
});
</script>

<style lang="scss" scoped>
.item {
  background: var(--c-blue);
  background: linear-gradient(90deg, var(--c-blue) 0%, var(--c-toxic) 100%);
  border-radius: 20px;
  position: relative;
  padding: 60px;
  margin-top: 24px;
  margin-bottom: 90px;

  &_main {
    &_title {
      text-align: center;
      margin: 0px;
      margin-top: 30px;
      font-size: 30px;
      -webkit-text-stroke: 1px var(--c-toxic);
      color: var(--c-blue);
    }
  }

  &_title {
    font-size: 46px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: var(--c-white);
  }

  &_container {
    width: 90%;
    border-radius: 20px;
    max-width: 1160px;
    margin: 0 auto;
    padding-bottom: 90px;
  }

  &_img {
    width: 38.5%;
    max-height: 500px;
    float: right;
    border-radius: 35px;
    margin-right: 38px;
    margin-bottom: 10px;
    margin-top: 11px;
  }

  &_disc {
    font-size: 24px !important;
    margin: 0px;
    margin-top: 13px;
    width: 57%;
    color: var(--c-white);
    word-break: break-word;
    font-family: var(--f-play);

    &_container {
      display: flex;
      margin: 0 auto;
      margin-top: 21px;
      border-radius: 20px;
      border: 1px solid var(--c-lightgray);
      box-shadow: 10px 10px 10px var(--c-lightgray);
    }
  }

  &_btn {
    &_link {
      text-decoration: none;
    }
  }
}

@media (max-width: 768px) {
  .item {
    padding: 22px;
    padding-top: 24px;
    padding-left: 24px;
    padding-bottom: 14px;
    margin-bottom: 0px;

    &_container {
      width: 96%;
      margin: 0 auto;
      margin-top: 90px;
      padding: 2px 16px;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }

    &_disc {
      font-size: 18px !important;
      width: 100%;
      margin-top: 0px;
      line-height: 22px;

      &_container {
        flex-direction: column;
        margin-top: 16px;
        margin-bottom: 0px;
      }
    }

    &_img {
      order: 2;
      width: 100%;
      max-height: 291px;
      max-width: 315px;
      float: none;
      border-radius: 20px;
      margin: 0 auto;
      margin-top: 16px;
    }

    &_title {
      font-size: 26px;
    }
  }
}
</style>

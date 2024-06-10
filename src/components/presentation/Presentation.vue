<script setup lang="ts">
import ButtonPrimary from "../button-primary/ButtonPrimary.vue";

defineProps<{ scrollDown: () => void }>();
</script>

<template>
  <div class="logo--box">
    <div class="container">
      <div class="section--container">
        <div class="mobile--container">
          <h1 class="title--main">
            personalize<span class="title--emphasis">.me</span>
          </h1>

          <div class="slogan">
            <div class="separator--horizontal" />
            <h2 class="slogan--title">seu currículo personalizado</h2>
          </div>
        </div>

        <div class="button--box">
          <ButtonPrimary label="começar" @click="scrollDown" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$black: #000;
$white: #fff;
$gold: #ffbb00;
$font-weight-bold: 600;
$font-size-large: 4rem;
$grey: #717171;
$font-weight-medium: 500;
$font-size-medium: 1.25rem;

.section--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo--box,
.slogan {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo--box {
  background-color: $black;
  height: 80vh;
  position: relative;
}

.title--main,
.title--emphasis,
.slogan--title {
  font-weight: $font-weight-bold;
}

.title--main,
.title--emphasis {
  font-size: $font-size-large;
}

.title--main {
  color: $white;
}

.title--emphasis {
  color: $gold;
}

.slogan {
  gap: 1.25rem;
  margin-top: 12px;
}

.slogan--title {
  font-size: $font-size-medium;
  font-weight: $font-weight-medium;
  color: $grey;
  line-height: calc($font-size-medium * 1.5);
}

.button--box {
  width: 320px;
  position: absolute;
  bottom: 13rem;
}

.title--main,
.slogan {
  animation: slideDown 0.5s ease-in-out;
  animation-fill-mode: backwards;
}

.button--box {
  animation: slideUp 0.5s ease-in-out;
  animation-fill-mode: backwards;
}

@media (max-width: 768px) {
  .mobile--container {
    position: absolute;
    top: 20vh;
  }

  .logo--box {
    height: 65vh;
  }

  .title--main,
  .title--emphasis {
    font-size: calc($font-size-large / 2);
  }

  .slogan--title {
    font-size: calc($font-size-medium / 1.5);
  }

  .button--box {
    width: 80%;
    bottom: 7rem;
  }
}
</style>

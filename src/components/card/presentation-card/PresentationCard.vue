<script setup lang="ts">
defineProps<{ title: string; text: string; yellow?: boolean }>();
</script>

<template>
  <div
    :class="
      yellow
        ? 'card--container--type2 card-container-mobile'
        : 'card--container--type1 card-container-mobile'
    "
  >
    <div class="flex--row gap--20">
      <div
        :class="
          yellow ? 'separator--vertical--type2' : 'separator--vertical--type1'
        "
      />
      <h1 :class="yellow ? 'card--title--type2' : 'card--title--type1'">
        {{ title }}
      </h1>
    </div>
    <p :class="yellow ? 'card--text--type2' : 'card--text--type1'">
      {{ text }}
    </p>
  </div>
</template>

<style lang="scss">
.card-list--container {
  position: relative;
  top: -80px;
  justify-content: center;
  animation: slideUp 0.5s ease-in-out 0.5s;
  animation-fill-mode: backwards;
}

@media (max-width: 768px) {
  .card-container-mobile {
    margin-left: 12px;
    margin-right: 12px;
  }

  .card-list--container {
    top: -60px;
    left: 0px;
    position: inherit;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 0px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    justify-content: inherit;
  }

  .card-list--container::-webkit-scrollbar {
    display: none;
  }
}
</style>

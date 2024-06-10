<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="title--section-container">
    <div class="separator--vertical--type1" />
    <h1 class="title--section--form">{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.title--section-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}
.title--section--form {
  color: #111;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 4px;
  line-height: 1.5 * 1.5;
}
</style>

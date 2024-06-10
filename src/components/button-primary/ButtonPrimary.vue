<script setup lang="ts">
defineProps<{ label: string; onClick: () => void; gray?: boolean }>();
</script>

<template>
  <div
    :class="{
      'button--primary ': !gray,
      'button--gray': gray,
    }"
    @click="onClick"
  >
    <h1
      class="button--primary--label"
      :class="{
        'button--primary--label ': !gray,
        'label--gray': gray,
      }"
    >
      {{ label }}
    </h1>
  </div>
</template>

<style lang="scss">
.button--primary {
  box-sizing: border-box;
  background: #ffbb00;
  color: #f5f7fa;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  font: 500 1rem/1.5rem "poppins", sans-serif;
  border: none;
  padding: 12px 24px;
  width: 280px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  max-width: 400px;
}

.button--gray {
  box-sizing: border-box;
  background: #404040;
  color: #f5f7fa;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  font: 500 1rem/1.5rem "poppins", sans-serif;
  padding: 12px 24px;
  width: 280px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  max-width: 400px;
}

.button--primary:hover {
  background: #ededed;
}

.button--gray:hover {
  background: #111;
}

.button--gray:hover {
  background: #ededed;
}

.button--gray:hover .label--gray {
  color: #221700;
}

.button--primary--label {
  font-size: 1.25rem;
  font-weight: 500;
  color: #221700;
  line-height: calc(1.25rem * 1.5);
}

.label--gray {
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  line-height: calc(1.25rem * 1.5);
}

@media (max-width: 768px) {
  .button--primary--label,
  .button--primary--label {
    font-size: 1rem;
  }
}
</style>

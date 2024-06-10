<script setup lang="ts">
import { defineProps, ref, watchEffect } from "vue";

const props = defineProps<{
  label: string;
  type: string;
  reference: string;
  modelValue?: string;
  error?: boolean;
}>();

const options = ref<string[]>([]);

watchEffect(() => {
  if (props.type === "gender") {
    options.value = ["Masculino", "Feminino"];
  } else if (props.type === "maritalStatus") {
    options.value = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"];
  } else {
    console.error("Tipo de opção não suportado");
  }
});

const emit = defineEmits(["update:modelValue"]);
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="container--input">
    <label :for="reference">{{ label }}</label>
    <div class="select-container">
      <select
        :name="reference"
        :value="modelValue"
        :id="reference"
        @input="onInput"
        :class="{ 'error-border': error, 'error-text': error }"
        :style="{ color: error ? 'red' : '' }"
      >
        <option value="" disabled selected>Escolha uma opção</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container--input {
  margin-bottom: 32px;
}

label {
  display: block;
  font: 1rem;
  color: #404040;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.select-container {
  position: relative;
}

select {
  position: relative;
  border: 1px solid #ededed;
  border-radius: 5px;
  background: #f7f7f7;
  width: 100%;
  font-size: 1rem;
  color: #717171;
  transition: border-color 0.3s;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  appearance: none; /* Remove o estilo padrão do navegador */
}

.select-container::after {
  content: "▼";
  color: #2e2e2e;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

select:focus {
  outline: 0;
  border: 1px solid #ffbb00;
}

.error-border {
  border-color: #ff0000;
}

select.error-text::placeholder {
  color: #ff0000;
}
</style>

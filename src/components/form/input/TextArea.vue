<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";

const props = defineProps<{
  label: string;
  placeholder?: string;
  type: string;
  reference: string;
  modelValue: string;
  error?: boolean;
}>();

const textAreaValue = ref(props.modelValue || "");
const maxLength = 600;
const remainingChars = computed(() => maxLength - textAreaValue.value.length);

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  textAreaValue.value = target.value;
  emit("update:modelValue", target.value);
};

watchEffect(() => {
  textAreaValue.value = props.modelValue || "";
});
</script>

<template>
  <div class="container--input">
    <div class="container--label">
      <label :for="reference">{{ label }}</label>
      <p
        v-if="
          error &&
          type !== 'date' &&
          type !== 'gender' &&
          type !== 'maritalStatus'
        "
        class="error-text"
      >
        preencha o campo corretamente
      </p>
    </div>
    <textarea
      :value="modelValue"
      :name="reference"
      :id="reference"
      :maxlength="maxLength"
      @input="onInput"
      :placeholder="placeholder"
      :class="{ 'error-border': error, 'error-text': error }"
    ></textarea>
    <div class="char-count">{{ remainingChars }} caracteres restantes</div>
  </div>
</template>

<style lang="scss" scoped>
.container--input {
  margin-bottom: 32px;
}

.container--label {
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 0.75rem;
}

label {
  display: block;
  font: 1rem;
  color: #404040;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

textarea {
  resize: none;
  border: 1px solid #ededed;
  border-radius: 5px;
  background: #f7f7f7;
  width: 100%;
  font-size: 1rem;
  color: #717171;
  transition: border-color 0.3s;
  padding: 20px;
  box-sizing: border-box;
  min-height: 200px;
}

textarea:focus {
  outline: 0;
  border: 1px solid #ffbb00;
}

textarea::placeholder {
  color: #b2b2b2;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}

.char-count {
  font-size: 0.8rem;
  color: #999;
  text-align: right;
  margin-top: 4px;
}

.error-border {
  border-color: #ff0000;
}

.error-text {
  color: #ff0000;
  font-size: 14px;
}

@media (max-width: 500px) {
  textarea::placeholder {
    color: #b2b2b2;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }
}
</style>

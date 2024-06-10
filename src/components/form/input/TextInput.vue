<script setup lang="ts">
import { Ref, ref } from "vue";

const props = defineProps<{
  label: string;
  placeholder?: string;
  reference: string;
  type: string;
  modelValue?: string;
  error?: boolean;
}>();

const type: Ref<string> = ref(props.type);
const isMobile: Ref<boolean> = ref(
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  )
);

const onClickInput = () => {
  const isDateInput = props.type === "date";

  if (isDateInput && isMobile) {
    type.value = "date";
  }
};

const emit = defineEmits(["update:modelValue"]);
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
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
    <input
      @click="onClickInput"
      :type="type"
      :name="reference"
      :id="reference"
      :maxlength="60"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      :class="{ 'error-border': error, 'error-text': error }"
    />

    <font-awesome-icon
      icon="fa-calendar"
      class="calendar--icon"
      v-if="isMobile && type === 'date'"
    />
  </div>
</template>

<style lang="scss" scoped>
.container--input {
  margin-bottom: 32px;
  position: relative;
}

.container--label {
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 0.75rem;
}

label {
  display: block;
  font-size: 1rem;
  color: #404040;
  font-weight: 500;
  align-items: center;
}

input {
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
}

.error-border {
  border-color: #ff0000;
}

.error-text {
  color: #ff0000;
  font-size: 14px;
}

.calendar--icon {
  position: absolute;
  top: 56px;
  right: 20px;
  color: #b2b2b2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

input:focus {
  outline: 0;
  border: 1px solid #ffbb00;
}

input::placeholder {
  color: #b2b2b2;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}

@media (max-width: 500px) {
  .container--input {
    margin-bottom: 20px;
  }

  input {
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
    appearance: none;
  }

  input::placeholder {
    color: #b2b2b2;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }
}
</style>

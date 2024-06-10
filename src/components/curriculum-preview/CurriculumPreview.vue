<script setup lang="ts">
import { api } from "../../api";
import SectionTitle from "../../components/form/section-title/SectionTitle.vue";
import { iFormValues } from "../../interfaces/iFormValues";
import router from "../../router";

const props = defineProps<{
  formValues: iFormValues;
}>();

const emit = defineEmits(["formDeleted"]);

const deleteForm = async () => {
  try {
    await api.delete(`/curriculum/${props.formValues._id}`);
    emit("formDeleted");
  } catch (error) {
    console.error(error);
  }
};

const onClickFormItem = (form: iFormValues) => {
  router.push({
    path: `/editar/${form._id}`,
  });
};
</script>

<template>
  <div class="container--form-preview" :id="formValues._id">
    <font-awesome-icon icon="trash" class="trash--icon" @click="deleteForm" />

    <div @click="onClickFormItem(props.formValues)">
      <section aria-label="Dados pessoais">
        <SectionTitle title="DADOS PESSOAIS" />

        <div class="form--body">
          <div class="form--line">
            <h1 aria-label="Nome" class="">nome completo</h1>
            <p>
              {{ formValues.personalData.firstName }}
              {{ formValues.personalData.lastName }}
            </p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">e-mail</h1>
            <p>
              {{ formValues.personalData.email }}
            </p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">telefone</h1>
            <p>
              {{ formValues.personalData.phone }}
            </p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">data de nascimento</h1>
            <p>
              {{ formValues.personalData.birthDate }}
            </p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">sexo</h1>
            <p>
              {{ formValues.personalData.gender }}
            </p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">estado civil</h1>
            <p>
              {{ formValues.personalData.maritalStatus }}
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Endereço">
        <SectionTitle title="ENDEREÇO" />

        <div class="form--body">
          <div class="form--line">
            <h1 aria-label="Nome" class="">endereço completo</h1>
            <p>
              {{ formValues.address.streetName }},
              {{ formValues.address.number }} |
              {{ formValues.address.neighborhood }} -
              {{ formValues.address.city }}, {{ formValues.address.state }} |
              CEP
              {{ formValues.address.cep }}
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Profissional">
        <SectionTitle title="PROFISSIONAL" />

        <div class="form--body">
          <div class="form--line">
            <h1 aria-label="Nome" class="">cargo atual ou desejado</h1>
            <p>
              {{ formValues.career.office }}
            </p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">Tempo de experiência em anos</h1>
            <p>{{ formValues.career.experience }} anos</p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">habilidades</h1>
            <p>
              {{ formValues.career.habilities }}
            </p>
          </div>

          <div class="form--line">
            <h1 aria-label="Nome" class="">idiomas</h1>
            <p>
              {{ formValues.career.languages }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container--form-preview {
  border-radius: 6px;
  box-sizing: border-box;
  padding: 20px;
  max-width: 320px;
  height: 320px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
  position: relative;
}

h1 {
  display: block;
  font-size: 14px;
  color: #717171;
  font-weight: 500;
  align-items: center;
  margin-bottom: 4px;
}

p {
  position: relative;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: #404040;
  font-size: 16px;
}

.form--body {
  margin-top: -24px;
}

.form--line {
  margin-bottom: 20px;
}

.trash--icon {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ff0000;
  z-index: 10;
}
</style>

<script setup lang="ts">
import SectionTitle from "../../components/form/section-title/SectionTitle.vue";
import { iFormValues } from "../../interfaces/iFormValues";

defineProps<{
  formValues: iFormValues;
  id: string;
}>();
</script>

<template>
  <div class="container--form" :id="id">
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
            {{ formValues.address.city }}, {{ formValues.address.state }} | CEP
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
</template>

<style lang="scss" scoped>
.container--form {
  background: #ffbb00;
  margin: -20px;
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
</style>

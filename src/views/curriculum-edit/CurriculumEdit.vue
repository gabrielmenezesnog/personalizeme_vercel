<script setup lang="ts">
import SectionTitle from "../../components/form/section-title/SectionTitle.vue";
import TextInput from "../../components/form/input/TextInput.vue";
import SelectInput from "../../components/form/select/SelectInput.vue";
import TextArea from "../../components/form/input/TextArea.vue";
import ButtonPrimary from "../../components/button-primary/ButtonPrimary.vue";
import CurriculumOutput from "../../components/curriculum-output/CurriculumOutput.vue";

import { api } from "../../api";
import router from "../../router";

import { onMounted, ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import html2pdf from "html2pdf.js";
import { iFormValues } from "../../interfaces/iFormValues";
import { useRoute } from "vue-router";

defineProps<{
  id?: string;
  label?: string;
  type?: string;
  reference?: string;
  modelValue?: string;
  error?: boolean;
}>();

const formValues = ref<iFormValues>({
  personalData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
  },
  address: {
    cep: "",
    streetName: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  },
  career: {
    office: "",
    experience: "",
    habilities: "",
    languages: "",
  },
});

const rules = {
  personalData: {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    phone: { required },
    birthDate: { required },
    gender: { required },
    maritalStatus: { required },
  },
  address: {
    cep: { required },
    streetName: { required },
    number: { required },
    neighborhood: { required },
    city: { required },
    state: { required },
  },
  career: {
    office: { required },
    experience: { required },
    habilities: { required },
    languages: { required },
  },
};

let validator = useVuelidate(rules, formValues);

const route = useRoute();

const formId = ref<string | string[]>("");

onMounted(() => {
  if (route.params.id) {
    formId.value = route.params.id;
  }
});

watch(
  formId,
  async (id, _oldVal) => {
    if (id) {
      await api
        .get(`/curriculum/${id}`)
        .then((res) => (formValues.value = res.data));
    }
  },
  { immediate: true }
);

const validate = async () => {
  validator.value.$validate();
  if (validator.value.$errors.length === 0) {
    await postData();
  }
};

const postData = async () => {
  try {
    if (route.params.id) {
      delete formValues.value._id;
      await api.put(`/curriculum/${formId.value}`, formValues.value);
    } else {
      await api.post(`/curriculum/`, formValues.value);
    }

    router.push("/");
  } catch (error) {
    console.error(error);
  }
};

const generatePDF = async () => {
  validator.value.$validate();

  if (validator.value.$errors.length === 0) {
    let element = document.getElementById("curriculum");

    let opt = {
      margin: 0,
      filename: `currículo de ${formValues.value.personalData.firstName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  }
};
</script>

<template>
  <section aria-label="editar currículo" class="container--background">
    <div class="container container--form">
      <section aria-label="Dados pessoais" class="section">
        <SectionTitle title="DADOS PESSOAIS" />

        <div class="container--form-grid">
          <TextInput
            label="Nome"
            type="text"
            reference="firstName"
            placeholder="seu nome"
            v-model="formValues.personalData.firstName"
            :error="validator.personalData.firstName.$error"
          />

          <TextInput
            label="Sobrenome"
            type="text"
            reference="lastName"
            placeholder="seu sobrenome"
            v-model="formValues.personalData.lastName"
            :error="validator.personalData.lastName.$error"
          />
        </div>

        <div class="container--form-grid">
          <TextInput
            label="Email"
            type="email"
            reference="email"
            placeholder="email@contato.com"
            v-model="formValues.personalData.email"
            :error="validator.personalData.email.$error"
          />

          <TextInput
            label="Telefone"
            type="number"
            reference="tel"
            placeholder="00 00000-0000"
            v-model="formValues.personalData.phone"
            :error="validator.personalData.phone.$error"
          />
        </div>

        <div class="container--form-grid--triple">
          <TextInput
            label="Data de nascimento"
            type="date"
            reference="date"
            placeholder="dd/mm/aaaa"
            v-model="formValues.personalData.birthDate"
            :error="validator.personalData.birthDate.$error"
          />

          <SelectInput
            label="Sexo"
            type="gender"
            reference="gender"
            v-model="formValues.personalData.gender"
            :error="validator.personalData.gender.$error"
          />
          <SelectInput
            label="Estado Civil"
            type="maritalStatus"
            reference="maritalStatus"
            v-model="formValues.personalData.maritalStatus"
            :error="validator.personalData.maritalStatus.$error"
          />
        </div>
      </section>

      <section aria-label="Endereço" class="section">
        <SectionTitle title="ENDEREÇO" />

        <div class="container--form-grid">
          <TextInput
            label="CEP"
            type="text"
            reference="cep"
            placeholder="00000-000"
            v-model="formValues.address.cep"
            :error="validator.address.cep.$error"
          />
          <TextInput
            label="Logradouro"
            type="text"
            reference="street"
            placeholder="nome da rua"
            v-model="formValues.address.streetName"
            :error="validator.address.streetName.$error"
          />
        </div>

        <div class="container--form-grid">
          <TextInput
            label="Número"
            type="number"
            reference="number"
            placeholder="0000"
            v-model="formValues.address.number"
            :error="validator.address.number.$error"
          />
          <TextInput
            label="Bairro"
            type="text"
            reference="neighborhood"
            placeholder="nome do bairro"
            v-model="formValues.address.neighborhood"
            :error="validator.address.neighborhood.$error"
          />
        </div>

        <div class="container--form-grid">
          <TextInput
            label="Cidade"
            type="text"
            reference="city"
            placeholder="nome da cidade"
            v-model="formValues.address.city"
            :error="validator.address.city.$error"
          />
          <TextInput
            label="Estado"
            type="text"
            reference="state"
            placeholder="nome do estado"
            v-model="formValues.address.state"
            :error="validator.address.state.$error"
          />
        </div>
      </section>

      <section aria-label="Profissional" class="section">
        <SectionTitle title="PROFISSIONAL" />

        <div class="container--form-grid">
          <TextInput
            label="Cargo desejado ou atual"
            type="text"
            reference="office"
            placeholder="exemplo: Desenvolvedor front-end"
            v-model="formValues.career.office"
            :error="validator.career.office.$error"
          />
          <TextInput
            label="Tempo de experiêcia"
            type="number"
            reference="xp"
            placeholder="experiência em anos"
            v-model="formValues.career.experience"
            :error="validator.career.experience.$error"
          />
        </div>

        <TextArea
          label="Habilidades"
          type="text"
          reference="habilities"
          placeholder="Separe as habilidades com vírgula, exemplo: Excel, Word, UI Design, Javascript, etc.."
          v-model="formValues.career.habilities"
          :error="validator.career.habilities.$error"
        />
        <TextArea
          label="Idiomas"
          type="text"
          reference="languages"
          placeholder="Separe os idiomas com vírgula, exemplo: inglês avançado, espanhol intermediário, etc..."
          v-model="formValues.career.languages"
          :error="validator.career.languages.$error"
        />
      </section>

      <div class="button--container">
        <ButtonPrimary :gray="true" label="baixar PDF" :onClick="generatePDF" />
        <ButtonPrimary label="salvar e voltar" :onClick="validate" />
      </div>
    </div>
  </section>

  <div class="invisible">
    <CurriculumOutput :formValues="formValues" id="curriculum" />
  </div>
</template>

<style lang="scss" scoped>
.container--background {
  background: #111;
  padding: 1.25rem;
}

.container--form {
  background-color: #fff;
  border-radius: 5px;
  padding: 3.75rem;
}

.title--section--form {
  color: #111;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 4px;
  line-height: 1.5 * 1.5;
}

.container--form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  align-items: center;
  gap: 40px;
}

.container--form-grid--triple {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  align-items: center;
  gap: 40px;
}

.section {
  margin-bottom: 60px;
}

.button--container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: end;
  flex-wrap: wrap;
}

.invisible {
  position: absolute;
  z-index: -1;
  top: 0;
}

@media (max-width: 500px) {
  .container--form {
    padding: 1rem;
  }

  .container--form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;
    gap: 0px;
  }

  .container--form-grid--triple {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;
    gap: 0px;
  }

  .button--container {
    width: 100%;
  }
}
</style>

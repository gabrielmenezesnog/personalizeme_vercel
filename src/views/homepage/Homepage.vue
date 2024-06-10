<script setup lang="ts">
import Presentation from "../../components/presentation/Presentation.vue";
import PresentationCard from "../../components/card/presentation-card/PresentationCard.vue";
import CurriculumGallery from "../../components/curriculum-gallery/CurriculumGallery.vue";
import Footer from "../../components/footer/Footer.vue";
import "../../style.scss";

import { ref, nextTick } from "vue";
import router from "../../router";

const welcomeSectionEndRef = ref(
  document.querySelector(".card-list--container")
);

const scrollDown = () => {
  nextTick(() => {
    welcomeSectionEndRef.value?.scrollIntoView({ behavior: "smooth" });
  });
};

const navigateToEdit = () => {
  router.push("/editar");
};
</script>

<template>
  <Presentation :scrollDown="scrollDown" />

  <div class="relative">
    <section
      aria-label="Personalise-me, seu currículo personalizado"
      class="card-list--container flex--row gap--60"
      ref="welcomeSectionEndRef"
    >
      <PresentationCard
        aria-label="Currículos"
        title="currículos"
        text="Você é livre para escolher dentre os modelos de currículos e personalizá-los para serem seus!"
      />
      <PresentationCard
        aria-label="Facilidade"
        title="facilidade"
        text="Nenhuma ferramenta adicional será necessária. Você preenche suas informações e entregamos seu currículo!"
      />
      <PresentationCard
        aria-label="Gratuito"
        title="gratuito"
        text="A plataforma é 100% gratuita, e após receber seu currículo, você poderá baixá-lo para ser seu!"
        :yellow="true"
      />
    </section>

    <section aria-label="Galeria de currículos" class="container relative">
      <div class="title-line--container">
        <div>
          <span class="title--span">edite ou crie um currículo novo</span>
          <h1 class="title--section">Galeria de currículos</h1>
        </div>

        <div class="button--primary" @click="navigateToEdit">
          <div class="flex--row gap--20 button--label button--centered">
            <h1>novo currículo</h1>
            <font-awesome-icon icon="circle-plus" class="icon" />
          </div>
        </div>
      </div>
      <CurriculumGallery />
    </section>

    <section class="rodapé">
      <Footer />
    </section>
  </div>
</template>

<style lang="scss">
.card--container--type1 {
  background: #222;
  padding: 20px;
}

.card--container--type2 {
  background: #ffbb00;
  padding: 20px;
}

.card--container--type1,
.card--container--type2 {
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.2);
  width: 360px;
  height: 180px;
}

.card--title--type1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  line-height: calc(1.5rem * 1.5);
}

.card--text--type1 {
  font-size: 1rem;
  font-weight: 500;
  color: #9c9c9c;
  line-height: calc(1rem * 1.5);
  margin-top: 20px;
}

.card--title--type2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #221700;
  line-height: calc(1.5rem * 1.5);
}

.card--text--type2 {
  font-size: 1rem;
  font-weight: 500;
  color: #976f00;
  line-height: calc(1rem * 1.5);
  margin-top: 20px;
}

.title--span {
  color: #9c9c9c;
  font-size: 1.25rem;
  font-weight: 500;
}

.title--section {
  color: #111;
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 4px;
}

.button--label {
  font-size: 1.25rem;
  font-weight: 600;
  color: #221700;
  line-height: calc(1.5rem * 1.5);
}

.button--centered {
  justify-content: center;
}

.title-line--container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 120px;
}

.icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .card--container--type1,
  .card--container--type2 {
    min-width: 240px;
    min-height: 180px;
  }

  .card-container-mobile {
    margin-left: 12px;
    margin-right: 12px;
  }

  .title--span {
    color: #9c9c9c;
    font-size: calc(1.25rem / 1.5);
    font-weight: 500;
  }

  .title--section {
    color: #111;
    font-size: calc(2.5rem / 1.5);
    font-weight: 500;
    margin-top: 4px;
  }

  .button--label {
    font-size: calc(1.25rem / 1.2);
  }

  .title-line--container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
  }
}
</style>

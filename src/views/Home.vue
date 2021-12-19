<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3">
        <aside>
          <h3 class="text-4xl">Поиск по категориям:</h3>
        </aside>
      </div>
      <div class="col-span-9">
        <h3 class="text-4xl mb-4">Найдено: 92 вакансии</h3>
        <div class="grid grid-cols-3 gap-x-8 gap-y-6">
          <VacancyCard v-for="card in vacancies" :key="card.id" :item="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import VacancyCard from "@/components/VacancyCard";

export default {
  components: {
    VacancyCard,
  },

  data() {
    return {
      vacancies: [],
    };
  },

  async created() {
    const [vacancies] = await Promise.all([api.vacancies.getAllVacancies()]);
    this.vacancies = vacancies.data;

    console.log(this.vacancies[0]);
  },
};
</script>

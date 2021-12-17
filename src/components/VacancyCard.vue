<template>
  <div class="bg-green-500 text-white py-6 px-5 rounded-lg shadow-md">
    <div class="mb-6">
      <div class="border-b border-white pb-6 mb-6">
        <span class="text-sm">Пушкино</span>
        <h4 class="text-3xl mt-4">Водитель погрузчика</h4>
      </div>
      <ul class="space-y-4">
        <li>45000 р./мес.</li>
        <li>Производство</li>
        <li>Анкер Индастри</li>
      </ul>
    </div>

    <div class="flex flex-col mt-auto space-y-4">
      <BaseButton label="Подробнее" to="/vacancy" />
      <BaseButton label="Откликнуться!" type="secondary" />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton";

export default {
  components: {
    BaseButton,
  },
};
</script>

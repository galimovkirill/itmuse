<template>
  <div
    :class="[{ 'bg-green-500 text-white': item.flghot }]"
    class="flex flex-col py-6 px-5 rounded-lg shadow-lg"
  >
    <div class="mb-6">
      <div
        :class="item.flghot ? 'border-white' : 'border-gray-500'"
        class="border-b pb-6 mb-6"
      >
        <span class="text-sm">{{ item.placetitle }}</span>
        <h4 class="text-3xl mt-4">{{ item.proftitle }}</h4>
      </div>
      <ul class="space-y-4">
        <li>{{ item.salary_volume_ex }}</li>
        <li>{{ item.directiontitle }}</li>
        <li>{{ item.clientname }}</li>
      </ul>
    </div>

    <div class="flex flex-col mt-auto space-y-4">
      <BaseButton
        to="/vacancy"
        label="Подробнее"
        type="secondary"
        :is-white="item.flghot"
      />
      <BaseButton label="Откликнуться!" />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton";

export default {
  components: {
    BaseButton,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

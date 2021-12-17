<template>
  <router-link
    :to="to"
    tag="button"
    :disabled="!to"
    :class="[buttonClasses]"
    class="text-white p-4 rounded-lg"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary, secondary"].includes(value),
    },
  },

  computed: {
    buttonClasses() {
      switch (this.type) {
        case "primary":
          return "border border-white";
        case "secondary":
          return "text-white bg-orange-500 hover:bg-orange-550";
        default:
          return "";
      }
    },
  },
};
</script>

<template>
  <router-link
    :to="to"
    tag="button"
    :disabled="!to"
    :class="[buttonClasses]"
    class="p-4 rounded-lg"
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
      validator: (value) => ["primary", "secondary"].includes(value),
    },

    isWhite: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    buttonClasses() {
      switch (this.type) {
        case "primary":
          return "text-white bg-orange-500 hover:bg-orange-550";
        case "secondary":
          if (this.isWhite) return "border border-white text-white";
          return "border border-orange-500 text-orange-500";
        default:
          return "";
      }
    },
  },
};
</script>

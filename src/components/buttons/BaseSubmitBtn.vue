<template>
  <button class="btn flex justify-center items-center">
    <div  class="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full" v-if="isLoading"></div>
    <span class="space-x-3" v-else>
      <span>{{ label }}</span>
      <span
        class="mdi mdi-chevron-down text-base font-bold"
        v-if="label === 'load more'"
      ></span>
    </span>
  </button>
</template>

<script setup>
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
const { isLoading } = storeToRefs(useMainStore());
defineProps({
  label: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>

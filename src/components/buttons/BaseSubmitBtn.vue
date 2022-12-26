<template>
  <button class="btn flex justify-center items-center">
    <LvProgressSpinner
      size="20px"
      color="#ffffff"
      strokeWidth="4"
      v-if="isLoading"
    />
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
import LvProgressSpinner from "lightvue/progress-spinner";
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

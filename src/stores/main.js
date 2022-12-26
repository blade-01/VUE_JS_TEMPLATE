import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    isLoading: false,
    isError: false,
  }),
  getters: {},
  actions: {
    toggleLoader(value) {
      this.isLoading = value;
    },
    toggleError(value) {
      this.isError = value;
    },
  },
});

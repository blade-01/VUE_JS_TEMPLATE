<template>
  <div>
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <!-- Using Default HTML select -->
    <!-- <select
      class="input-style"
      :id="label"
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onInput: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
      :class="{ err: error }"
    >
      <option
        :value="option"
        v-for="option in options"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select> -->
    <!-- Using vSelect -->
    <v-select
      class="v-style"
      :class="{ err: error }"
      label="option"
      :value="modelValue"
      :options="options"
      v-bind="{
        ...$attrs,
        onInput: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
    ></v-select>
    <small :class="{ 'err-message': error }" v-if="error"
      >{{ label }} is required</small
    >
  </div>
</template>

<script setup>
import vSelect from "vue-select";
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  error: {
    type: [String, Boolean],
  },
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>

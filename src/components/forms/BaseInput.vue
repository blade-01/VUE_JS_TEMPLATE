<template>
  <div v-if="type === 'textarea'">
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <textarea
      name="textarea"
      :id="label"
      cols="30"
      rows="10"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-primary dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      :class="{ err: error }"
      :aria-describedby="error ? `${label}-error` : null"
      :aria-invalid="error ? true : null"
    ></textarea>
    <small
      :class="{ 'err-message': error }"
      v-if="error && errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ errorMessage }}</small
    >
    <small
      :class="{ 'err-message': error }"
      v-else-if="error && !errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ label }} is required</small
    >
  </div>
  <div v-else-if="type === 'file'">
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <input
      :id="label"
      :type="type"
      :placeholder="placeholder"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.files[0]);
        },
      }"
      class="input-style"
      :class="{ err: error }"
      :aria-describedby="error ? `${label}-error` : null"
      :aria-invalid="error ? true : null"
    />
    <small
      :class="{ 'err-message': error }"
      v-if="error && errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ errorMessage }}</small
    >
    <small
      :class="{ 'err-message': error }"
      v-else-if="error && !errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ label }} is required</small
    >
  </div>
  <div v-else>
    <label class="label-style" :for="label" v-if="label">{{ label }}</label>
    <div class="relative">
      <input
        :id="label"
        :type="type"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input-style"
        :class="{ err: error }"
        :aria-describedby="error ? `${label}-error` : null"
        :aria-invalid="error ? true : null"
      />
      <span
        v-if="password"
        class="mdi absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
        :class="[
          type === 'password' ? 'mdi-eye' : 'mdi-eye-off',
          { 'err-message': error },
        ]"
        @click="$emit('changeType')"
      ></span>
    </div>
    <small
      :class="{ 'err-message': error }"
      v-if="error && errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ errorMessage }}</small
    >
    <small
      :class="{ 'err-message': error }"
      v-else-if="error && !errorMessage"
      aria-live="assertive"
      :id="`${label}-error`"
      >{{ label }} is required</small
    >
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  placeholder: {
    type: [String, Boolean],
    default: "",
  },
  password: {
    type: Boolean,
    required: false,
  },
  errorMessage: {
    type: [String, Boolean],
    default: false,
  },
  error: {
    type: [String, Boolean],
  },
});
defineEmits(['changeType', 'update:modelValue'])
</script>

<style lang="scss" scoped></style>

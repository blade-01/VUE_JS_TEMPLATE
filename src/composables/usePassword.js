import { ref } from 'vue';
export function usePassword() {
  const type = ref('password');
  const showPassword = () => {
    type.value === 'password'
      ? (type.value = 'text')
      : (type.value = 'password');
  };

  return {
    type,
    showPassword
  };
}

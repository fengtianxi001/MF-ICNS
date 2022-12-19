import { ref } from "vue";
function useLoading(defaultValue = false, delay = 500) {
  const loading = ref(defaultValue);
  let timer = 0;
  const openLoading = () => {
    loading.value = true;
    timer = new Date().getTime();
  };
  const closeLoading = () => {
    const now = new Date().getTime();
    const diff = now - timer;
    if (diff < delay) {
      setTimeout(() => {
        loading.value = false;
      }, delay - diff);
    } else {
      loading.value = false;
    }
  };
  return {
    loading,
    openLoading,
    closeLoading,
  };
}
export default useLoading;

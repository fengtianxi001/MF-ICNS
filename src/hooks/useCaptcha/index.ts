import { ref } from "vue";
import { shuffle } from "lodash";
import { characters } from "./characters";
function useCaptch(size = [100, 30]) {
  const captchaLoading = ref(false);
  const captchaText = ref("");
  const caprchaSrc = ref("");
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  canvas.width = size[0];
  canvas.height = size[1];
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  const refreshCaptcha = () => {
    captchaLoading.value = true;
    const cache = shuffle(characters).slice(0, 4);
    captchaText.value = cache.join("");
    context.clearRect(0, 0, size[0], size[1]);
    context.fillStyle = "#fff";
    context.fillRect(0, 0, size[0], size[1]);
    context.fillStyle = "#000";
    context.font = "20px Arial";
    context.textBaseline = "middle";
    context.textAlign = "center";
    cache.forEach((item, index) => {
      context.fillText(item + "", (index + 1) * 20, size[1] / 2);
    });
    caprchaSrc.value = canvas.toDataURL();
  };
  const validateCaptcha = (value: string) => {
    return value.toLowerCase() === captchaText.value.toLowerCase();
  };
  refreshCaptcha();
  return {
    captchaText,
    caprchaSrc,
    captchaLoading,
    refreshCaptcha,
    validateCaptcha,
  };
}
export default useCaptch;

import { type Ref, computed, onMounted, reactive } from "vue";
import useBoolean from "@/hooks/useBoolean";
import { IconCaretUp, IconCaretDown } from "@arco-design/web-vue/es/icon";

function useCollapse(
  container: Ref<HTMLElement | undefined>,
  defaultCollapsed: boolean = false
) {
  const { boolean: collapsed } = useBoolean(defaultCollapsed);
  const style = reactive({
    paddingTop: "0px",
    paddingBottom: "0px",
    marginTop: "0px",
    marginBottom: "0px",
    border: "unset",
    height: "auto",
  });
  const icon = computed(() => {
    if (collapsed.value) return IconCaretDown;
    return IconCaretUp;
  });
  const toggle = () => {
    collapsed.value = !collapsed.value;
    collapsed.value ? onHide() : onShow();
  };

  const onShow = () => {
    const element = container.value as HTMLElement;
    element.style.height = style.height;
    element.style.paddingTop = style.paddingTop;
    element.style.paddingBottom = style.paddingBottom;
    element.style.marginTop = style.marginTop;
    element.style.marginBottom = style.marginBottom;
    element.style.border = style.border;
    element.style.opacity = "1";
  };

  const onHide = () => {
    const element = container.value as HTMLElement;
    element.style.height = "0";
    element.style.paddingTop = "0";
    element.style.paddingBottom = "0";
    element.style.marginTop = "0";
    element.style.marginBottom = "0";
    element.style.border = "unset";
    element.style.opacity = "0";
  };
  onMounted(() => {
    const element = container.value as HTMLElement;
    const computedStyle = window.getComputedStyle(element);
    style.border = computedStyle.border;

    style.marginTop = computedStyle.marginTop;
    style.marginBottom = computedStyle.marginBottom;

    style.paddingTop = computedStyle.paddingTop;
    style.paddingBottom = computedStyle.paddingBottom;
    style.height = computedStyle.height;
    element.style.height = style.height;
    element.style.overflow = "hidden";
  });

  return {
    collapsed,
    icon,
    toggle,
  };
}
export default useCollapse;

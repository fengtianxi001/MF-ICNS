import { useLoading } from '@/hooks';
import { isFunction, size } from 'lodash';
import { ref, watch, onUnmounted } from 'vue';

function useRequest(service: ServiceType, options?: OptionsType) {
  const { loading, openLoading, closeLoading } = useLoading(false, options?.loadingDelay ?? 0);
  const data = ref(options?.defaultData ?? null);
  let timer: any;
  const run = async () => {
    openLoading();
    if (isFunction(options?.onBefore)) {
      await options?.onBefore();
    }
    const response = await service.apply(null, options?.defaultParams);
    console.log('response', response);
    closeLoading();
    if (isFunction(options?.onFinally)) {
      await options?.onFinally();
    }
    if (isFunction(options?.formatResult)) {
      data.value = await options?.formatResult(response);
    } else {
      data.value = response;
    }
  };
  if (options?.manual !== true) {
    run();
  }
  if (options?.pollingInterval !== undefined) {
    timer = setInterval(run, options?.pollingInterval);
  }
  if (options?.refreshDeps && size(options?.refreshDeps) > 0) {
    watch(() => options?.refreshDeps, run, {
      deep: true,
    });
  }
  onUnmounted(() => {
    if (timer !== undefined) {
      clearInterval(timer);
    }
  });
  return {
    loading,
    data,
    run,
  };
}

type ServiceType = (params?: any) => Promise<any>;

type OptionsType = {
  manual?: boolean;
  loadingDelay?: number;
  refreshDeps?: any[];
  defaultData?: any;
  defaultParams?: any;
  pollingInterval?: number;
  formatResult?: (res: any) => any;
  onBefore?: () => void;
  onFinally?: () => void;
};

export default useRequest;

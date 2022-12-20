import { unref } from "vue";
import * as _ from "lodash";

export const first = (arr: any) => _.first(unref(arr));
export const size = (arr: any) => _.size(unref(arr));
export const last = (arr: any) => _.last(unref(arr));
export const find = (arr: any, ...args: any) => _.find(unref(arr), ...args);

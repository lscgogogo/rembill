declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module 'echarts';
declare module 'lodash';
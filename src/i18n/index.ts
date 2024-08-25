import { IntlConfig } from 'react-intl';
import enUS from './en-US';
import zhCN from './zh-CN';

export type TLocales = Record<string, IntlConfig['messages']>;

export default {
  'zh-CN': zhCN,
  'en-US': enUS,
} as TLocales;

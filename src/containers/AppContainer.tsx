import { App, ConfigProvider } from 'antd';
import type { Locale } from 'antd/lib/locale';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import { IntlProvider } from 'react-intl';
import { HistoryRouter } from 'redux-first-history/rr6';

import { useAppSelector } from '@/app/hooks';
import { selectLocale } from '@/app/localeSlice';
import { history } from '@/app/store';
import messages from '@/i18n';
import RouteIndex from '@/pages';

const antdLocales: Record<string, Locale> = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const AppContainer = () => {
  const locale = useAppSelector(selectLocale);
  return (
    <IntlProvider
      defaultLocale="zh-CN"
      locale={locale}
      messages={messages[locale]}
    >
      <App>
        <ConfigProvider locale={antdLocales[locale]}>
          <HistoryRouter history={history}>
            <RouteIndex />
          </HistoryRouter>
        </ConfigProvider>
      </App>
    </IntlProvider>
  );
};

export default AppContainer;

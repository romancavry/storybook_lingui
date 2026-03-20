import * as React from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import type { Decorator } from '@storybook/react-vite';

type WithLinguiOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any;
};

export const withLingui = ({ messages }: WithLinguiOptions): Decorator => {
  return (Story) => {
    React.useEffect(() => {
      i18n.load('en', messages.en);
      i18n.load('ru', messages.ru);

      i18n.activate('ru');
    }, []);

    return (
      <I18nProvider i18n={i18n}>
        <Story />
      </I18nProvider>
    );
  };
};

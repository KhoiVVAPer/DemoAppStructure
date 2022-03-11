import { NativeModules, Platform } from 'react-native';
import { initReactI18next } from 'react-i18next';
import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import resources from './resources';

const getDeviceLocale = (): string => {
  let locale: string;
  if (Platform.OS === 'ios') {
    const {
      SettingsManager: { settings },
    } = NativeModules;
    locale = settings.AppleLocale || settings.AppleLanguages[0] || 'en';
  } else if (Platform.OS === 'android') {
    locale = NativeModules.I18nManager.localeIdentifier;
  } else {
    locale = 'en';
  }

  const [language] = locale.replace('_', '-').split('-');
  return language;
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector' as const,
  async: true,
  detect: (cb: any): string => {
    const locale = getDeviceLocale();
    return cb(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

if (!i18n.isInitialized) {
  i18n
    // detect user language
    .use(languageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      resources,
    });
}

export const t = i18n.t;

export default i18n;

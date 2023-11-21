import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en/translation.json';
import fr from '../../public/locales/fr/translation.json';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

export const defaultNS = 'en';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
        fr : {
            fr,
        },
        en : {
            en,
        }
    },
    defaultNS
  });


export default i18n;
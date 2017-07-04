import { addLocaleData } from 'react-intl'

import ar from 'react-intl/locale-data/ar'
import de from 'react-intl/locale-data/de'
import el from 'react-intl/locale-data/el'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'
import fa from 'react-intl/locale-data/fa'
import hi from 'react-intl/locale-data/hi'
import it from 'react-intl/locale-data/it'
import ja from 'react-intl/locale-data/ja'
import ru from 'react-intl/locale-data/ru'
import zh from 'react-intl/locale-data/zh'

export const defaultLocale = 'en'

/* IMPORTANT!
  When adding a new supported language remember to also add it to main.mobile.js and main.js!
 */

export const messages = {
  'ar': require('../languages/ar.json'),
  'de': require('../languages/de.json'),
  'el': require('../languages/el.json'),
  'en': require('../languages/en.json'),
  'es': require('../languages/es.json'),
  'fa': require('../languages/fa.json'),
  'fr': require('../languages/fr.json'),
  'hi': require('../languages/hi.json'),
  'it': require('../languages/it.json'),
  'ja': require('../languages/ja.json'),
  'ru': require('../languages/ru.json'),
  'zh': require('../languages/zh_CN.json')
}

export const supportedLanguages = [
  { 'code': 'ar', 'name': 'العَرَبِيَّة‎‎' },
  { 'code': 'de', 'name': 'Deutsch' },
  { 'code': 'el', 'name': 'Ελληνικά' },
  { 'code': 'en', 'name': 'English' },
  { 'code': 'es', 'name': 'Español' },
  { 'code': 'fa', 'name': 'فارسی' },
  { 'code': 'fr', 'name': 'Français' },
  { 'code': 'hi', 'name': 'हिन्दी' },
  { 'code': 'it', 'name': 'Italiano' },
  { 'code': 'ja', 'name': '日本語' },
  { 'code': 'ru', 'name': 'Русский' },
  { 'code': 'zh', 'name': '中文' }
]

export const loadLocaleData = () => {
  addLocaleData([
    ...ar,
    ...de,
    ...el,
    ...en,
    ...es,
    ...fa,
    ...fr,
    ...it,
    ...hi,
    ...ja,
    ...ru,
    ...zh
  ])
}

export const getUserLocale = () => {
  let language = defaultLocale

  if (window.userLocale) {
    if (typeof window.userLocale.get === 'function') {
      language = window.userLocale.get()
    } else {
      language = window.userLocale
    }
  } else if (navigator.language) {
    language = navigator.language
  }

  if (language in messages) {
    return language
  }
  return defaultLocale
}

const RTLLocales = [
  'ar',
  'fa',
  'he'
]

export const getDirection = (locale) => {
  if (RTLLocales.indexOf(locale) !== -1) {
    return 'rtl'
  }
  return 'ltr'
}

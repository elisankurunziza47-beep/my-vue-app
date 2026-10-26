
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import fr from './locales/fr.json'
import rw from './locales/rw.json'

const supportedLocales = ['en', 'fr', 'rw']
const storageKey = 'language'

function getSavedLocale() {
  try {
    const savedLocale = localStorage.getItem(storageKey)

    if (supportedLocales.includes(savedLocale)) {
      return savedLocale
    }
  } catch (error) {
    console.warn('Could not read the saved language:', error)
  }

  return 'en'
}

const initialLocale = getSavedLocale()

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en',

  messages: {
    en,
    fr,
    rw
  }
})

// Set the initial language of the HTML document.
if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLocale
}

export default i18n

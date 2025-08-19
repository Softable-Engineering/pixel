// Types
import type { Locale, MaskType } from './enums'
import type { BaseMask } from './base/BaseMask'
import type { BaseValidator } from './base/BaseValidator'

type MaskRegistry = {
  masks: Record<MaskType, BaseMask>
  validators: Record<MaskType, BaseValidator>
}

type LocaleRegistry = Record<Locale, MaskRegistry>

const locales: LocaleRegistry = {} as LocaleRegistry

function ensureLocale(locale: Locale): void {
  if (!locales[locale]) {
    locales[locale] = { masks: {}, validators: {} } as LocaleRegistry[Locale]
  }
}

export const MaskModule = {
  registerMask(locale: Locale, type: MaskType, mask: BaseMask): void {
    ensureLocale(locale)
    locales[locale].masks[type] = mask
  },

  registerValidator(
    locale: Locale,
    type: MaskType,
    validator: BaseValidator
  ): void {
    ensureLocale(locale)
    locales[locale].validators[type] = validator
  },

  getMask(locale: Locale, type: MaskType): BaseMask | undefined {
    return locales[locale]?.masks[type]
  },

  getValidator(locale: Locale, type: MaskType): BaseValidator | undefined {
    return locales[locale]?.validators[type]
  },

  reset(): void {
    Object.keys(locales).forEach((locale) => {
      delete locales[locale as Locale]
    })
  }
}

import { MaskModule } from '../../MaskModule'
import { MaskType, Locale } from '../../enums'

import { CpfMask } from './masks/CpfMask'
import { CnpjMask } from './masks/CnpjMask'
import { DateMask } from './masks/DateMask'
import { PhoneMask } from './masks/PhoneMask'
import { FloatMask } from './masks/FloatMask'
import { MoneyMask } from './masks/MoneyMask'
import { IntegerMask } from './masks/IntegerMask'
import { ZipCodeMask } from './masks/ZipCodeMask'
import { DocumentMask } from './masks/DocumentMask'
import { NumericSymbolMask } from './masks/NumericSymbolMask'

import { CpfValidator } from './validators/CpfValidator'
import { CnpjValidator } from './validators/CnpjValidator'
import { DateValidator } from './validators/DateValidator'
import { PhoneValidator } from './validators/PhoneValidator'
import { FloatValidator } from './validators/FloatValidator'
import { MoneyValidator } from './validators/MoneyValidator'
import { IntegerValidator } from './validators/IntegerValidator'
import { ZipCodeValidator } from './validators/ZipCodeValidator'
import { DocumentValidator } from './validators/DocumentValidator'
import { NumericSymbolValidator } from './validators/NumericSymbolValidator'

export function registerBrMasks() {
  MaskModule.registerMask(Locale.BR, MaskType.CPF, new CpfMask())
  MaskModule.registerValidator(Locale.BR, MaskType.CPF, new CpfValidator())

  MaskModule.registerMask(Locale.BR, MaskType.CNPJ, new CnpjMask())
  MaskModule.registerValidator(Locale.BR, MaskType.CNPJ, new CnpjValidator())

  MaskModule.registerMask(Locale.BR, MaskType.DOCUMENT, new DocumentMask())
  MaskModule.registerValidator(
    Locale.BR,
    MaskType.DOCUMENT,
    new DocumentValidator()
  )

  MaskModule.registerMask(Locale.BR, MaskType.PHONE, new PhoneMask())
  MaskModule.registerValidator(Locale.BR, MaskType.PHONE, new PhoneValidator())

  MaskModule.registerMask(Locale.BR, MaskType.DATE, new DateMask())
  MaskModule.registerValidator(Locale.BR, MaskType.DATE, new DateValidator())

  MaskModule.registerMask(Locale.BR, MaskType.FLOAT, new FloatMask())
  MaskModule.registerValidator(Locale.BR, MaskType.FLOAT, new FloatValidator())

  MaskModule.registerMask(Locale.BR, MaskType.INTEGER, new IntegerMask())
  MaskModule.registerValidator(
    Locale.BR,
    MaskType.INTEGER,
    new IntegerValidator()
  )

  MaskModule.registerMask(Locale.BR, MaskType.MONEY, new MoneyMask())
  MaskModule.registerValidator(Locale.BR, MaskType.MONEY, new MoneyValidator())

  MaskModule.registerMask(
    Locale.BR,
    MaskType.NUMERIC_SYMBOL,
    new NumericSymbolMask()
  )
  MaskModule.registerValidator(
    Locale.BR,
    MaskType.NUMERIC_SYMBOL,
    new NumericSymbolValidator()
  )

  MaskModule.registerMask(Locale.BR, MaskType.ZIP_CODE, new ZipCodeMask())
  MaskModule.registerValidator(
    Locale.BR,
    MaskType.ZIP_CODE,
    new ZipCodeValidator()
  )
}

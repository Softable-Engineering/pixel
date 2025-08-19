import { CpfValidator } from './CpfValidator'
import { CnpjValidator } from './CnpjValidator'
import { BaseValidator } from '../../../base/BaseValidator'
import { onlyDigits } from '../../../base/maskUtils'
import { DocumentMode } from '../../../types'

export class DocumentValidator extends BaseValidator {
  private cpfValidator = new CpfValidator()
  private cnpjValidator = new CnpjValidator()
  private mode: DocumentMode

  constructor(mode: DocumentMode = DocumentMode.AUTO) {
    super()
    this.mode = mode
  }

  validate(value: string): boolean {
    const digits = onlyDigits(value)
    const type = this.resolveType(digits)

    if (type === DocumentMode.CPF) {
      return this.cpfValidator.validate(value)
    }

    if (type === DocumentMode.CNPJ) {
      return this.cnpjValidator.validate(value)
    }

    return false
  }

  private resolveType(digits: string): DocumentMode.CPF | DocumentMode.CNPJ {
    if (this.mode === DocumentMode.CPF) return DocumentMode.CPF
    if (this.mode === DocumentMode.CNPJ) return DocumentMode.CNPJ

    return digits.length <= 11 ? DocumentMode.CPF : DocumentMode.CNPJ
  }
}

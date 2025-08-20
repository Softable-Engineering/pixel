import { CpfMask } from './CpfMask'
import { CnpjMask } from './CnpjMask'
import { BaseMask } from '../../../base/BaseMask'
import { onlyDigits } from '../../../base/maskUtils'
import { DocumentMode } from '../../../types'

export class DocumentMask extends BaseMask {
  private cpfMask = new CpfMask()
  private cnpjMask = new CnpjMask()
  private mode: DocumentMode

  constructor(mode: DocumentMode = DocumentMode.AUTO) {
    super()
    this.mode = mode
  }

  format(value: string): string {
    const digits = onlyDigits(value)
    const mode = this.resolveMode(digits)

    if (mode === DocumentMode.CPF) {
      return this.cpfMask.format(digits)
    }

    if (mode === DocumentMode.CNPJ) {
      return this.cnpjMask.format(digits)
    }

    return digits
  }

  private resolveMode(digits: string): DocumentMode.CPF | DocumentMode.CNPJ {
    if (this.mode === DocumentMode.CPF) return DocumentMode.CPF
    if (this.mode === DocumentMode.CNPJ) return DocumentMode.CNPJ

    return digits.length <= 11 ? DocumentMode.CPF : DocumentMode.CNPJ
  }
}

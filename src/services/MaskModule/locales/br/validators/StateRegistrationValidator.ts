import { StateIeRegex } from '../../../data/ieRegex'
import { BaseValidator } from '../../../base/BaseValidator'

export class StateRegistrationValidator extends BaseValidator {
  constructor(uf: string) {
    const pattern = StateIeRegex[uf]
    super({ pattern })
  }

  // Optional: override validate for checksum logic per state if needed
}

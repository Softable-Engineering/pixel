import { BaseValidator } from '../../../base/BaseValidator'

export class EmailValidator extends BaseValidator {
  constructor() {
    super({
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    })
  }
}

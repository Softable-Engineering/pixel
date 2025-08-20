// Types
import type { RelativeData, TypeRelative } from '../types'

export const TYPE_RELATIVE_MAPPER: Record<TypeRelative, RelativeData> = {
  month: {
    label: 'Mês',
    monthRepresent: 1
  },
  bimester: {
    label: 'Bimestre',
    monthRepresent: 2
  },
  trimester: {
    label: 'Trimestre',
    monthRepresent: 3
  },
  quarter: {
    label: 'Quadrimestre',
    monthRepresent: 4
  },
  semester: {
    label: 'Semestre',
    monthRepresent: 6
  },
  year: {
    label: 'Ano',
    monthRepresent: 12
  }
}

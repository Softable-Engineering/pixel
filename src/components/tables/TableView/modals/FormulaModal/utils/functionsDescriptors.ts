// Types

import type { FunctionDescriptor } from '../components/FormulaInput/types'

export const SUM: FunctionDescriptor = {
  value: 'sum',
  displayName: 'SUM()',
  params: ['number', '...number'],
  description: 'Soma todos os argumentos',
  evaluateForPreview: (...args: any[]) => {
    return args.flat().reduce((acc: number, v: any) => acc + Number(v || 0), 0)
  }
}

export const AVG: FunctionDescriptor = {
  value: 'avg',
  displayName: 'AVG()',
  params: ['...number'],
  description: 'Média dos argumentos',
  evaluateForPreview: (...args: any[]) => {
    const flat = args.flat().map((x: any) => Number(x || 0))
    const sum = flat.reduce((a: number, b: number) => a + b, 0)
    return flat.length ? sum / flat.length : 0
  }
}

export const COUNT: FunctionDescriptor = {
  value: 'count',
  displayName: 'COUNT()',
  params: ['...number'],
  description: 'Contagem dos argumentos',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const MAX: FunctionDescriptor = {
  value: 'max',
  displayName: 'MAX()',
  params: ['...number'],
  description: 'Máximo dos argumentos',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const MIN: FunctionDescriptor = {
  value: 'min',
  displayName: 'MIN()',
  params: ['...number'],
  description: 'Mínimo dos argumentos',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const YEAR_FROM: FunctionDescriptor = {
  value: 'year_from',
  displayName: 'YEAR_FROM()',
  params: ['date'],
  description: 'Ano da data',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const MONTH_FROM: FunctionDescriptor = {
  value: 'month_from',
  displayName: 'MONTH_FROM()',
  params: ['date'],
  description: 'Mês da data',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const DAY_FROM: FunctionDescriptor = {
  value: 'day_from',
  displayName: 'DAY_FROM()',
  params: ['date'],
  description: 'Dia da data',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const DAY_OF_WEEK: FunctionDescriptor = {
  value: 'day_of_week',
  displayName: 'DAY_OF_WEEK()',
  params: ['date'],
  description: 'Dia da semana da data',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const HOUR_FROM: FunctionDescriptor = {
  value: 'hour_from',
  displayName: 'HOUR_FROM()',
  params: ['date'],
  description: 'Hora da data',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const YEAR_MONTH_FROM: FunctionDescriptor = {
  value: 'year_month_from',
  displayName: 'YEAR_MONTH_FROM()',
  params: ['date'],
  description: 'Ano e mês da data',
  evaluateForPreview: (...args: any[]) => {
    return '-'
  }
}

export const FUNCTIONS: FunctionDescriptor[] = [
  SUM,
  AVG,
  COUNT,
  MAX,
  MIN,
  YEAR_FROM,
  MONTH_FROM,
  DAY_FROM,
  DAY_OF_WEEK,
  HOUR_FROM,
  YEAR_MONTH_FROM
]

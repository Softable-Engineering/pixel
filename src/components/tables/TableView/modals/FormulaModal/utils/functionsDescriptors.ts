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

export const FUNCTIONS: FunctionDescriptor[] = [SUM, AVG]

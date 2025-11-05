// Assets
import { TextIcon } from '@assets/icons/tables/Text'
import { ListIcon } from '@assets/icons/tables/List'
import { EmailIcon } from '@assets/icons/tables/Email'
import { SigmaIcon } from '@assets/icons/tables/Sigma'
import { PhoneIcon } from '@assets/icons/tables/Phone'
import { NumberIcon } from '@assets/icons/tables/Number'
import { SelectIcon } from '@assets/icons/tables/Select'
import { CalendarIcon } from '@assets/icons/tables/Calendar'
import { CheckboxIcon } from '@assets/icons/tables/Checkbox'

// Types
import type { ReactNode } from 'react'
import type { ColumnType } from '@components/tables/TableView/types'

type ColumntTypeInfos = {
  label: string
  icon: ReactNode
}

export const COLUMN_TYPE_MAP: Record<ColumnType, ColumntTypeInfos> = {
  date: {
    label: 'Data',
    icon: <CalendarIcon />
  },
  number: {
    label: 'Número',
    icon: <NumberIcon />
  },
  email: {
    label: 'Email',
    icon: <EmailIcon />
  },
  phone: {
    label: 'Telefone',
    icon: <PhoneIcon />
  },
  multi_select: {
    label: 'Multi Categórico',
    icon: <ListIcon />
  },
  select: {
    label: 'Categórico',
    icon: <SelectIcon />
  },
  rich_text: {
    label: 'Texto',
    icon: <TextIcon />
  },
  page: {
    label: 'Página',
    icon: <TextIcon />
  },
  checkbox: {
    label: 'Checkbox',
    icon: <CheckboxIcon />
  },
  formula: {
    label: 'Fórmula',
    icon: <SigmaIcon />
  }
}

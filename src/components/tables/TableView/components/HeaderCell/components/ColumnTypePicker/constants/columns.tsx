// Assets
import { TextIcon } from '@assets/icons/tables/Text'
import { ListIcon } from '@assets/icons/tables/List'
import { EmailIcon } from '@assets/icons/tables/Email'
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
    icon: <CalendarIcon color="var(--text-color)" />
  },
  number: {
    label: 'Número',
    icon: <NumberIcon color="var(--text-color)" />
  },
  email: {
    label: 'Email',
    icon: <EmailIcon color="var(--text-color)" />
  },
  phone: {
    label: 'Telefone',
    icon: <PhoneIcon color="var(--text-color)" />
  },
  multi_select: {
    label: 'Multi Categórico',
    icon: <ListIcon color="var(--text-color)" />
  },
  select: {
    label: 'Categórico',
    icon: <SelectIcon color="var(--text-color)" />
  },
  rich_text: {
    label: 'Texto',
    icon: <TextIcon color="var(--text-color)" />
  },
  page: {
    label: 'Página',
    icon: <TextIcon color="var(--text-color)" />
  },
  checkbox: {
    label: 'Checkbox',
    icon: <CheckboxIcon color="var(--text-color)" />
  }
}

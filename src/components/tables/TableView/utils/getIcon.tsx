// Assets
import { TextIcon } from '@assets/icons/tables/Text'
import { ListIcon } from '@assets/icons/tables/List'
import { SigmaIcon } from '@assets/icons/tables/Sigma'
import { EmailIcon } from '@assets/icons/tables/Email'
import { PhoneIcon } from '@assets/icons/tables/Phone'
import { SelectIcon } from '@assets/icons/tables/Select'
import { NumberIcon } from '@assets/icons/tables/Number'
import { CalendarIcon } from '@assets/icons/tables/Calendar'
import { CheckboxIcon } from '@assets/icons/tables/Checkbox'

// Types
import { ColumnType } from '../types'

export function getIcon(type: ColumnType) {
  if (type === ColumnType.PAGE) return <TextIcon color="var(--text-color)" />
  if (type === ColumnType.EMAIL) return <EmailIcon color="var(--text-color)" />
  if (type === ColumnType.PHONE) return <PhoneIcon color="var(--text-color)" />
  if (type === ColumnType.DATE)
    return <CalendarIcon color="var(--text-color)" />
  if (type === ColumnType.SELECT)
    return <SelectIcon color="var(--text-color)" />
  if (type === ColumnType.NUMBER)
    return <NumberIcon color="var(--text-color)" />
  if (type === ColumnType.RICH_TEXT)
    return <TextIcon color="var(--text-color)" />
  if (type === ColumnType.MULTI_SELECT)
    return <ListIcon color="var(--text-color)" />
  if (type === ColumnType.CHECKBOX)
    return <CheckboxIcon color="var(--text-color)" />
  if (type === ColumnType.FORMULA)
    return <SigmaIcon color="var(--text-color)" />

  return null
}

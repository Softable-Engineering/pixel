// Utils
import { TYPE_RELATIVE_MAPPER } from './mapper/relativeTypeMapper'

// Types
import type {
  Shortcut,
  BuildContext,
  ShortcutGroup,
  DateFilterValue
} from '@components/toolkit/Calendar/types'
import type { TypeRelative } from './types'

function getRelativePreset(
  label: string,
  monthRepresent: number,
  index: number
): Shortcut {
  return {
    id: 'last-semester',
    label: label,
    build: (ctx: BuildContext): DateFilterValue => {
      const current = Math.floor(ctx.now.getMonth() / monthRepresent)

      return {
        op: 'range',
        start: {
          type: 'token',
          token: 'startOfMonth',
          offset: {
            months:
              -ctx.now.getMonth() +
              current * monthRepresent +
              index * monthRepresent
          }
        },
        end: {
          type: 'token',
          token: 'endOfMonth',
          offset: {
            months:
              -ctx.now.getMonth() +
              current * monthRepresent +
              index * monthRepresent +
              monthRepresent -
              1
          }
        }
      }
    }
  }
}

export function getRelative(type: TypeRelative): ShortcutGroup {
  const relativeDate = TYPE_RELATIVE_MAPPER[type]

  return {
    id: `relative-${relativeDate.label}`,
    label: relativeDate.label,
    items: [
      [
        getRelativePreset('Anterior', relativeDate.monthRepresent, -1),
        getRelativePreset('Este', relativeDate.monthRepresent, 0),
        getRelativePreset('Proximo', relativeDate.monthRepresent, 1)
      ]
    ]
  }
}

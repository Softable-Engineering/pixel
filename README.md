# softable-pixel

Reusable React component library providing date and data utilities.

## Installation

```bash
yarn add softable-pixel
# or
npm install softable-pixel
```

## Components

### DataTable

`DataTable` is a table component built on top of [`@tanstack/react-table`](https://tanstack.com/table).
It supports column resizing, drag-and-drop ordering and selection

```tsx
import {
  DataTable,
  type CustomColumnDef,
  type CustomData,
} from 'softable-pixel';

interface Person {
  id: number;
  name: string;
  age: number;
}

const columns: CustomColumnDef<CustomData<Person>>[] = [
  {
    columnId: 'name',
    accessorFn: row => row.data.name,
    header: 'Name',
  },
  {
    columnId: 'age',
    accessorFn: row => row.data.age,
    header: 'Age',
  },
];

const rows: CustomData<Person>[] = [
  { data: { id: 1, name: 'Alice', age: 30 } },
  { data: { id: 2, name: 'Bob', age: 28 } },
];

<DataTable<Person>
  data={rows}
  columns={columns}
  enableColumnOrdering
  enableResizeColumns
  hasHorizontalDivider
/>
```

Key props:

- `data`: array of `CustomData` rows.
- `columns`: array of `CustomColumnDef` definitions.
- `enableColumnOrdering`: allows drag-and-drop column reordering.
- `enableResizeColumns`: enables column resizing.
- `hasHorizontalDivider` / `hasVerticalDivider`: toggles cell borders.

### Calendar

`Calendar` displays a popover calendar for selecting date ranges.
It exposes `open` and `close` methods via `ref`.

```tsx
import {
  Calendar,
  CalendarTypes,
  DEFAULT_PRESETS,
} from 'softable-pixel';
import { useRef, useState } from 'react';

const ref = useRef<CalendarTypes.CalendarMethods>(null);
const [range, setRange] = useState<CalendarTypes.DateRangeValue>({
  start: '',
  end: '',
});

<Calendar
  ref={ref}
  locale="en-US"
  value={range}
  presets={DEFAULT_PRESETS}
  onChange={(next) => setRange(next)}
>
  <button onClick={() => ref.current?.open()}>Open calendar</button>
</Calendar>
```

Important props:

- `locale`: locale string used for month and day names.
- `value`: controlled range object `{ start, end }`.
- `variant`: visual variant (`"single"` or `"group"`).
- `visibleMonths`: number of months displayed side by side.
- `presets`: predefined date shortcuts (use `DEFAULT_PRESETS` or provide your own).
- `onChange`: callback fired when the range changes.

## Build

After cloning the repository, run:

```bash
yarn build
```

This compiles the components to the `dist` directory


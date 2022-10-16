export const fields = [
  { key: 'date', label: 'Дата' },
  { key: 'name', label: 'Название', sortable: true },
  { key: 'amount', label: 'Количество', sortable: true },
  { key: 'distance', label: 'Расстояние', sortable: true },
]

export const nameOptions = [
  { id: 1, value: 'name', name: 'Название' },
  { id: 2, value: 'amount', name: 'Количество' },
  { id: 3, value: 'distance', name: 'Расстояние' }
]

export const filterParameters = [
  { id: 1, value: 'equal', name: 'Равно' },
  { id: 2, value: 'contains', name: 'Содержит' },
  { id: 3, value: 'greater', name: 'Больше' },
  { id: 4, value: 'less', name: 'Меньше' }
]

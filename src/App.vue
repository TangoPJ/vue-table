<template>
  <div class="container">
    <div class="wrapper">
      <div class="filters">
        <button
          class="filters__clear"
          :disabled="false"
          @click="clearFilters()"
        >
        Clear Filters
        </button>
        <select class="filters__first-option" name="" id="">
          <option value="name">Название</option>
          <option value="amount">Количество</option>
          <option value="distance">Расстояние</option>
        </select>
        <select class="filters__second-option" name="" id="">
          <option value="equal">Равно</option>
          <option value="contains">Содержит</option>
          <option value="greater">Больше</option>
          <option value="less">Меньше</option>
        </select>
        <input :value="filterInput" class="filters__text-option" type="text">
      </div>
    </div>
    <hr class="filters__line">
    <Table :items="filteredProducts" :fields="fields">
      <template #cell(age)="{ value }">
        <b>{{ value }}</b>
      </template>
    </Table>
  </div>
</template>

<script setup>
import Table from '@/components/table'
import { computed, ref } from 'vue'
import products from '@/data/products'

const filterInput = ref('')
const filterNameOption = ref('')
const filterCompareOption = ref('')

const clearFilters = () => {
  filterInput.value = ''
  filterNameOption.value = ''
  filterCompareOption.value = ''
}

const fields = [
  { key: 'date', label: 'Дата' },
  { key: 'name', label: 'Название', sortable: true },
  { key: 'amount', label: 'Количество', sortable: true },
  { key: 'distance', label: 'Расстояние', sortable: true },
]

// const filters = reactive([
//   {
//     key: 'name',
//     label: 'Название',
//     options: computed(() => getFilterOptions('name')),
//   },
//   {
//     key: 'amount',
//     label: 'Количество',
//     options: computed(() => getFilterOptions('amount')),
//   },
//   {
//     key: 'distance',
//     label: 'Расстояние',
//     options: computed(() => getFilterOptions('distance')),
//   },
// ])

// const getFilterOptions = () => {
//   const options = {}
//   return Object.values(options)
// }

const filteredProducts = computed(() => {
  return products
})
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 200px;
  margin: 0 auto;
  padding: 10px 0 0 0;
}
.filters {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;


  grid-template-areas:
  "a a"
  "b c"
  "d d";

  &__clear {
    grid-area: a;
  }

  &__first-option {
    grid-area: b;
  }

  &__second-option {
    grid-area: c;
  }

  &__text-option {
    grid-area: d;
  }

  &__line {
    width: 350px;
    margin: 20px auto;
    border: .1px solid rgb(198, 193, 251);
  }
}
</style>
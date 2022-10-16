<template>
  <div class="container">
    <div class="wrapper">
      <div class="filters">
        <select v-model="filterNameOption" class="filters__first-option">
          <option
            v-for="{ name, value, id } in nameOptions"
            :value="value"
            :key="id"
          >
            {{ name }}
          </option>
        </select>
        <select v-model="filterParameter" class="filters__second-option">
          <option
            v-for="{ id, value, name } in filterParameters"
            :value="value"
            :key="id"
          >
            {{ name }}
          </option>
        </select>
        <input v-model="filterInput" class="filters__text-option" type="text">
        <button
          class="filters__clear"
          :disabled="false"
          @click="clearFilters()"
        >
          Clear Filters
        </button>
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
import { ref, watch } from 'vue'
import products from '@/data/products'
import { useDebouncedRef, filter } from '@/helpers'
import { fields, nameOptions, filterParameters } from '@/data'

const filterInput = useDebouncedRef('', 500)
const filterNameOption = ref(null)
const filterParameter = ref(null)
const filteredProducts = ref(products)

const clearFilters = () => {
  filterInput.value = ''
  filterNameOption.value = null
  filterParameter.value = null
  filteredProducts.value = products
}

watch(filterInput, newFilterInput => {
  if (filterNameOption.value && filterParameter.value) {
    filteredProducts.value = filter(filterNameOption.value, filterParameter.value, newFilterInput, products)
  }
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
  "b c"
  "d d"
  "a a";

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
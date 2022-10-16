const castComparer = (comparer) => (a, b, order) => comparer(a, b, order) * order

const defaultComparer = (a, b, order) => {
  if (a == null) return order
  if (b == null) return -order
  if (a < b) return -1
  if (a > b) return 1

  return 0
}

const sortArray = (order, arr, sortBy, comparer) => {
  if (!Array.isArray(arr)) {
    return arr
  }
  return arr.sort((a, b) => comparer(a[sortBy], b[sortBy], order))
}

const createNewSortInstance = opts => {
  const comparer = castComparer(opts.comparer)

  return arr => {
    const ctx = Array.isArray(arr) && !opts.inPlaceSorting
      ? arr.slice()
      : arr

    return {
      asc(sortBy) {
        return sortArray(1, ctx, sortBy, comparer)
      },
      desc(sortBy) {
        return sortArray(-1, ctx, sortBy, comparer)
      }
    }
  }
}

export const sort = createNewSortInstance({
  comparer: defaultComparer,
})

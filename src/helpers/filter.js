export const filter = (name, parameter, input, products) => {
  if (!input) return products
  switch(parameter) {
    case 'equal':
      return products.filter(product => product[name] === input)
    case 'contains':
      return products.filter(product => product[name].toString().startsWith(input))
    case 'greater':
      return products.filter(product => product[name] > input)
    case 'less':
      return products.filter(product => product[name] < input)
    default:
      return products
  }
}


const sortData = (array, method) => {
  const sortedArr = [...array].sort((a, b) => {
    return (
      method.order * (method.type === 'price' ? a.price - b.price : a.title.localeCompare(b.title))
      )
  })
  return sortedArr
}

export default sortData

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (element === val) {
      return i
    }
  }
  return -1
}

linearSearch(['a', 'c', 'g'], 'g')

function binarySearch(arr, val) {
  let min = 0
  let max = arr.length - 1
  let middle = Math.floor((min + max) / 2)
  while (arr[middle] !== val && min <= max) {
    console.log(middle)
    if (arr[middle] < val) {
      min = arr[middle] + 1
    } else if (arr[middle] > val) {
      max = arr[middle] - 1
    }

    middle = Math.floor((min + max) / 2)
  }
  if (arr[middle] === val) {
    return middle
  }
  return -1
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)

function naiveSearch(str_lng, str_shr) {
  count = 0
  for (let i = 0; i < str_lng.length; i++) {
    for (let j = 0; j < str_shr.length; j++) {
      if (str_shr[j] !== str_lng[i + j]) break
      if (j === str_shr.length - 1) count++
    }
  }
  return count
}

naiveSearch('akilahmed', 'la')

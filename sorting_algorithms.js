function bubbleSort(arr) {
  let noSwaps
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr, arr[j], arr[j + 1])
        //SWAP
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

bubbleSort([1, 2, 3, 4, 5, 4, 5, 6, 7])

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[index] > arr[j]) {
        index = j
      }
    }
    if (i !== index) {
      temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
  }
  return arr
}

selectionSort([23, 12, 56, 32, 3, 4, 14])

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

insertionSort([23, 12, 56, 32, 3, 4, 14])

function merge(arr1, arr2) {
  let arr = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i])
      console.log(arr1[i])
      i++
    } else {
      arr.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    arr.push(arr2[j])
    j++
  }

  return arr
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

mergeSort([1, 10, 15, 2, 14, 18, 100])

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)

  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)

    // Left
    quickSort(arr, left, pivotIdx - 1)

    // Right
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}

quickSort([70, 10, 15, 2, 14, 18, 100])

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

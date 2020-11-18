function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    const e1 = arr1[i]
    for (let j = 0; j < arr2.length; j++) {
      const e2 = arr2[j]

      if (e2 == e1 ** 2) {
        arr2.splice(j, 1)
        break
      }
    }
  }

  if (arr2.length === 0) {
    return true
  } else {
    return false
  }
}

function sameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }

    return true
  }
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }

  for (let key in frequencyCounter2) {
    if (!(key in frequencyCounter1)) {
      return false
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum < 0) {
      left++
    } else if (sum > 0) {
      right--
    }
  }
}

function countUniqueValues(arr) {
  let ptr1 = 0
  let uniqueValues = 1
  if (arr.length === 0) {
    return 0
  }
  for (let i = ptr1 + 1; i < arr.length; i++) {
    if (arr[ptr1] !== arr[i]) {
      ptr1 = i
      uniqueValues += 1
    }
  }
  return uniqueValues
}

function maxSubArraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
    console.log(tempSum)
  }

  return maxSum
}

// sameFrequency([1, 2, 3], [4, 1, 9])
// sameFrequency([1, 2, 3], [1, 9])
// sameFrequency([1, 2, 1], [4, 4, 1])

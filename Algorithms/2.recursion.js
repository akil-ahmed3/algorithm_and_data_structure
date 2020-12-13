// A function that calls itself

// Countdown
function countDown(num) {
  if (num <= 0) {
    console.log('All done')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

countDown(5)

// Factorial
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

factorial(5)

// Recursion Helper Method
function collectOddValues(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])

// Pure Recursion
function pureRecursion(arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(pureRecursion(arr.slice(1)))

  return newArr
}

function power(num, pow) {
  if (pow === 0) return 1
  return num * power(num, pow - 1)
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[0] * productOfArray(arr.slice(1))
}

function recursiveRange(num) {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}

function fib(num) {
  if (num === 2) return 1
}

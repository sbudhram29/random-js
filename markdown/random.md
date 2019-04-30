#### Find out if Array

arr.constructor === Array

Array.isArray(arr)

#### Find max or min

Math.max.apply(null, arr)
Math.min.apply(null, arr)

or with spread

Math.max(...arr)

#### Fibonacci Iteractive

#### Primes

#### Factorial

```
const factorial = n => n === 0 ? 1 : n * factorial(n-1)

####
```

#### Unique

```
const unique = str => Array.from(new Set(str.split(''))).join('')
```

#### Splice and slice

##### Originall array is affected

Array.splice(index) = keep everything after index
Array.splice(index,0, 'new') = add new to index location shift over rest
Array.splice(index,1,'new') = replace index with new

##### Originall array is not affected

Array.slice(index) = returns everything from index to end
Array.slice(index,end) = returns everything 2 to end not including end

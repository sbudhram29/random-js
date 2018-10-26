const arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(flattenDeep(val));
      } else {
        return acc.concat(val);
      }
    },

    []
  );
}
const flattenArr = flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
const flattenArr2 = flattenDeep([1, 2, 3, [1, 2, 3, [3, 2, 1]]]); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

console.log(flattenArr2);

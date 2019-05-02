const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

const flat = (arr) => [].concat(...arr);

const flatDeep = (arr) =>
  arr.reduce((res, curr) => {
    return Array.isArray(curr) ? res.concat(flatDeep(curr)) : res.concat(curr);
  }, []);

console.log(flatDeep(arr));

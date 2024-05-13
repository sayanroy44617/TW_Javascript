function customMap(arr, callback) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    resultArray.push(callback(arr[i], i, arr));
  }

  return resultArray;
}

function customFilter(arr, callback) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      resultArray.push(arr[i]);
    }
  }

  return resultArray;
}

function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function customReduce(arr, callback, initialVal) {
  let accumulator = initialVal === undefined ? arr[0] : initialVal;
  let idx = initialVal === undefined ? 1 : 0;

  for (let i = idx; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
}

let arr = [1, 2, 3, 4, 5, 6];

let mapArray = customMap(arr, (num) => (num += 1));

console.log("Printing the array returned by customMap method");

for (let i = 0; i < mapArray.length; i++) {
  console.log(mapArray[i]);
}

let filterArray = customFilter(arr, (num) => num % 2 === 0);

console.log("Printing the array returned by customfilter method");

for (let i = 0; i < filterArray.length; i++) {
  console.log(filterArray[i]);
}

console.log("Printing the array returned by customForEach method");

customForEach(arr, (item, index) =>
  console.log("The element at " + index + " is " + item)
);

let reduceResult = customReduce(
  arr,
  (accumulator, currentItem) => {
    return accumulator + currentItem;
  },
  0
);
console.log("The reducer result is : " + reduceResult);

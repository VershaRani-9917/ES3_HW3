// 1. Copy array and append an element
const copyAndAppend = (arr, element) => [...arr, element];
console.log(copyAndAppend(["apple", "orange"], "banana"));

// 2. Copy array and append an element
const copyAndAdd = (arr, element) => [...arr, element];
console.log(copyAndAdd([10, 20], 30));

// 3. Merge two arrays
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([10, 20], [30, 40, 50]));

// 4. Merge two arrays with order change
const mergeNameArrays = (arr1, arr2) => [...arr2, ...arr1];
console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));

// 5. Copy object and add a property
const copyPersonObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(
  copyPersonObject({ firstName: "Alice", age: 20 }, "lastName", "Johnson")
);

// 6. Copy object and add a property
const copyEmployeeObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(
  copyEmployeeObject(
    { employeeId: 243, name: "Bob", age: 20 },
    "department",
    "IT department"
  )
);

// 7. Merge two objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ x: "hello" }, { y: "world" }));

// 8. Copy object with modified properties
const modifyObjectProperties = (obj, newProps) => ({ ...obj, ...newProps });
console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 }));
console.log(
  modifyObjectProperties({ fruit: "apple", color: "red" }, { color: "green" })
);

// 9. Copy object with modified properties
const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 }));

// 10. Merge three arrays
const mergeThreeArrays = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));

// 11. Merge three arrays
const mergeThreeArray = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));

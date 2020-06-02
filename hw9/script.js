let second = {
    name: "Aleksey",
    arr: [1, 2, 3],
    obj: {
        name: "Aleksey",
        arr: [1, 2, 3]
    },
    arObj: [
        {
            name: "Aleksey",
            arr: [1, 2, 3]
        },
        {
            name: "Aleksey",
            arr: [1, 2, 3]
        }
    ]
}

function copy(first, second) {
    if (typeof second === "object") {
        for (let key in second) {
            if (Array.isArray(second[key])) {
                first[key] = copy([], second[key]);
            } else if (typeof second[key] === "object") {
                second[key] = copy({}, second[key]);
            } else {
                first[key] = second[key];
            }
        }
    }
    else {
        first = second
    } return first;
}

let a = [];
console.log(copy(a, [1, 2, 3]));
let b;
console.log(copy(b, 5));
let c;
console.log(copy(c, "something"));
let d = {};
console.log(copy(d, second));

// function sum () {
//     let a = 0;

//     return function (num) {
//         a += num;
//         return a;
//     };
// }

// let a = sum();

// console.log(a(10));

// console.log(a(20));

// console.log(a(30));

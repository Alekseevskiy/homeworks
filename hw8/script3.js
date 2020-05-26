const ar = [1, 2, 3, 4, 5];


function callback(element) {
    console.log(element);
  }
  
  function forEach(ar, cb) {
    for (let i = 0; i < ar.length; i++) {
      cb(ar[i]);
    }
  }
  
  forEach([ar], callback)


// function map


// function callback (arg) {
//     return arg - 5;
// }

// function map (ar, cb) {
//     const a = [];
//     for( let i = 0; i < ar.length; i++) {
//         const result = cb(ar[i]);
//         a.push(result)
//     } return a;
// }

// console.log (map([1,2,3,4,5,6,7,8], callback))


// function filter


// function callback(el) {
//     if (el.length > 5)
//         return true;
//     else
//         return false;
// }

// function filter(ar, cb) {
//     let a =[];
//     for (let i = 0; i < ar.length; i++) {
//         if(cb(ar[i]))a.push(ar[i]);
//     }
//     return a;
// }
// console.log(filter(["Aleksey", "Tom", "Jerry", "Kolya"], callback));

// function some

// function callback (el) {
//     if (el > 1) 
//         return true; 
//         else 
//         return false;
// }

// function some (ar, cb) {
//     let a = [];
//     for (let i = 0; i < ar.length; i++) {
//         if (cb(ar[i])) return true;
//     } return false
// }
// console.log (some(ar, callback))


// function every


// function callback (el) {
//     if (el > 3) 
//     return true;
//     else
//     return false
// }


// function every (ar, cb) {
//     let a = [];
//     for (let i = 0; i < ar.length; i++) {
//         if (!cb(ar[i])) return false
//     } return true
// }   console.log (every(ar, callback))

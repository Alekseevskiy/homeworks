const ar = [1, 2, 3, 4, 5];



function forEach (ar, callback) {
    for (i = 0; i < ar; i++);
    callback(i);
}



function map(ar, callback) {
    for (i = 0; i < ar; i++);
    return callback + 5
}

const a = ar.map(map);

console.log(a);



function filter (ar, callback) {
    for (i = 0; i < ar; i++);
    if (i >= 1) {
        return callback;
    }

}

const b = ar.filter(filter);

console.log (b)



function some(ar, callback) {
    for (i = 0; i < ar; i++);
    if (i / ar === 1) {
        return callback
    }
}

const c = ar.some(some);

console.log (c);



function every(ar, callback) {
    for (i = 0; i < ar; i++);
    if (i === 1) {
        return callback
    }
}

const d = ar.every(every); 

console.log (d)
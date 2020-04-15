function aaaaa (first, second) {
    let origin = {
        name: "Aleksey",
        surname: "Alekseevskiy",
        age: 25,
    }
    
    let copy = {};
    
    for (let key in origin) {
        copy[key] = origin[key];
    }
}console.log (aaaaa);


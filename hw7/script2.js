function copy (target, origin) {
    let origin = {
        name: "Aleksey",
        age: 25,
        surname: "Alekseevskiy",
    }
    // let target = origin;
    for (let target in origin) {
        alert (origin [target])
    }
}
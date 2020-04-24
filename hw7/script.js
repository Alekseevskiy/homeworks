let user = {
  name: "Aleksey",
  surname: "Alekseevskiy",
  age: 25
};

let user2 = {
  name: "Aleksey",
  surname: "Alekseevskiy",
  age: 25
};

function reception(first, second) {
  for (let key in first) {
    if (first[key] !== second[key]) {
      return false;
    }
  }

  return true;
}
console.log(reception(user, user2));



const user = {
  name: "Aleksey",
  surname: "Alekseevskiy",
  age: 25
};

function copy(target, origin) {
  for (const key in origin) {
    target[key] = origin[key];
    } 
  return target;  
  }
  
const userCopy = copy({}, user); 

console.log (user, userCopy);
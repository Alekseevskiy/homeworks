let user = {
    name: prompt ("name first?"),
    age: +prompt ("age first?"),
};
let user2 = {
    name: prompt ("name second?"),
    age: +prompt ("age second?"),
};

function comparison (first, second) {
    return user.name === user2.name && user.age ===user2.age 
}

let result = comparison (user, user2);
if (result) {
    console.log ("TRUE");
} else {
    console.log ("false");
}
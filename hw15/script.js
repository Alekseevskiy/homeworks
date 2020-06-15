function form(allInputs) {
    this.allInputs = allInputs;
};

form.prototype.render = function() {
    let container = document.createElement("form");
    container.classList.add("form");
    
    for (let input of this.allInputs) {
        let window = document.createElement ("input");
        window.classList.add("window", input);
        window.type = input;
        container.append(window);
    };
    
    document.body.append (container);

    const email = document.querySelector(".text");
    email.setAttribute ("placeholder", "enter email")

    const pass = document.querySelector(".password");
    pass.setAttribute ("placeholder", "enter password");

    const submit = document.querySelector(".submit");
    submit.setAttribute ("disabled", "true");

    email.addEventListener("input", this.emailValid.bind(this));
    pass.addEventListener("input", this.passValid.bind(this));
    container.addEventListener("submit", this.onSubmit.bind(this));
}

form.prototype.activeButton = function() {
    let email = document.querySelector(".text");
    let pass = document.querySelector(".password");
    let submit = document.querySelector(".submit");

    if (email.classList.contains("valid") && pass.classList.contains("valid"))
        submit.removeAttribute("disabled")
}

form.prototype.emailValid = function(event) {
    let validEmail = /[-.\w]+\@(\w+\.)+\w+/gi;

    if (validEmail.test(event.target.value)) {
        event.target.classList.remove("invalid");
        event.target.classList.add("valid");
        this.activeButton();
    } else {
        event.target.classList.add("invalid");
    };
};

form.prototype.passValid = function(event) {
    let validPass = /^(?=.*\d)(?=.*\w)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (validPass.test(event.target.value)) {
        event.target.classList.remove("invalid");
        event.target.classList.add("valid");
        this.activeButton();
    } else {
        event.target.classList.add("invalid");
    };
};

form.prototype.onSubmit = function() {
    event.preventDefault();
    let email = document.querySelector(".text");
    let pass = document.querySelector(".password");

    let user = `email: ${email.value}, \npassword: ${pass.value}`;
    alert(user);

    for (let i = 0; i < this.length - 1; i++) {
        let node = form.childNodes;
        node[i].value = '';
        node[i].classList.remove("valid");
    };
};

const Form = new form(["text", "password", "submit"]);
Form.render();
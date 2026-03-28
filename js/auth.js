const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.onclick = () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
};

signupTab.onclick = () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
};


loginForm.onsubmit = (e) => {
    e.preventDefault();

    const email = loginForm.querySelector("input[type='email']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    // Call API (from auth-api.js)
    loginUser({
        email: email,
        password: password
    });
};


signupForm.onsubmit = (e) => {
    e.preventDefault();

    const name = signupForm.querySelector("input[type='text']").value;
    const email = signupForm.querySelector("input[type='email']").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    signupUser({
        name: name,
        email: email,
        password: password
    });
};
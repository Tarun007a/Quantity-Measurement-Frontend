// BASE URL
const BASE_URL = "http://localhost:8080/api/v1/auth";

// SIGNUP API
async function signupUser(data) {
    try {
        const res = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const err = await res.text();
            throw new Error(err);
        }

        alert("Signup successful please login!");
        const result = await res.json();
        return result;

    } 
    catch (err) {
        alert("Signup failed: " + err.message);
    }
}

// LOGIN API
async function loginUser(data) {
    try {
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const err = await res.text();
            throw new Error(err);
        }

        const token = await res.text();

        // STORE TOKEN
        localStorage.setItem("token", token);

        // redirect to dashboard
        window.location.href = "dashboard.html";

    } 
    catch (err) {
        alert("Login failed: " + err.message);
    }
}
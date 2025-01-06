const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const signupFormContainer = document.getElementById("signupFormContainer");
const loginFormContainer = document.getElementById("loginFormContainer");

// SignUp Form Submission
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const response = await fetch("http://localhost:6000/api/v1/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const data = await response.json();
    alert(data.message);
  } catch (err) {
    console.error("Error:", err);
  }
});

// Login Form Submission
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("http://localhost:6000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    alert(data.message);
  } catch (err) {
    console.error("Error:", err);
  }
});

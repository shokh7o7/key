const loginForm = document.getElementById("loginForm");
const contactForm = document.getElementById("contactForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("loginName").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!name || !password) {
    alert("Please enter your name and password!");
    return;
  }

  document.querySelector(".login").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("welcomeText").textContent = `${name}, you are now logged in.`;
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset();
});

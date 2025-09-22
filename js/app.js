// Wait for the page to load
window.addEventListener("load", async () => {
  console.log("Initializing Clerk...");

  // Load Clerk SDK
  await Clerk.load();

  // If user is signed in, show greeting
  if (Clerk.user) {
    document.getElementById("welcome").innerHTML = `<h2>Hello, ${Clerk.user.firstName}!</h2>`;
    document.getElementById("sign-in").style.display = "none";
  } else {
    // Otherwise mount the sign-in form
    Clerk.mountSignIn(document.getElementById("sign-in"));
  }
});

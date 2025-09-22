// Wait for the page to load
window.addEventListener("load", async () => {
  console.log("App loaded, initializing Clerk...");

  // Load Clerk SDK
  await Clerk.load();

  // If a user is signed in, show their name
  if (Clerk.user) {
    document.body.innerHTML = `<h1>Hello, ${Clerk.user.firstName}!</h1>`;
  } else {
    // Otherwise, mount the sign-in form
    Clerk.mountSignIn(document.getElementById("sign-in"));
  }
});

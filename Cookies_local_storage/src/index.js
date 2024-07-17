function setCookies() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("firstname").value;
  document.cookie = `firstname=${name}; path=/`;
  document.cookie = `email=${email}; path=/`;
}

function showCookies() {
  const cookieSection = document.getElementById("cookie-section");
  const cookieP = document.createElement("p");
  cookieP.innerHTML = `Cookies: ${document.cookie}`;
  cookieSection.appendChild(cookieP);
}

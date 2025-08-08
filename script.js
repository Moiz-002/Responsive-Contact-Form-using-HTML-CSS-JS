const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const queryGeneral = document.getElementById("general-enquiry");
const querySupport = document.getElementById("support-request");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const submitButton = document.querySelector(".submit");

let toast = document.createElement("div");
toast.classList.add("toast");
toast.innerHTML = `<h1><img src="./images/icon-success-check.svg" alt="Success"> Message Sent!</h1>
<p>Thanks for completing the form. We'll be in touch soon!</p>`;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let boolean = validateForm();

  if (boolean) {
    document.body.append(toast);
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    consent.checked = false;
    if (queryGeneral.checked) {
      queryGeneral.checked = false;
    } else if (querySupport.checked) {
      querySupport.checked = false;
    }
    if(document.body.contains(toast)){
      setInterval(() => {
      document.body.removeChild(toast);
    }, 5000);
    }
  }
});

function validateForm() {
  let boolean = true;

  if (firstName.value.trim() === "") {
    firstName.nextElementSibling.classList.remove("hidden");
    firstName.nextElementSibling.setAttribute("aria-hidden", "false");
    boolean = false;
  } else {
    firstName.nextElementSibling.classList.add("hidden");
    firstName.nextElementSibling.setAttribute("aria-hidden", "true");
  }

  if (lastName.value.trim() === "") {
    lastName.nextElementSibling.classList.remove("hidden");
    lastName.nextElementSibling.setAttribute("aria-hidden", "false");
    boolean = false;
  } else {
    lastName.nextElementSibling.classList.add("hidden");
    lastName.nextElementSibling.setAttribute("aria-hidden", "true");
  }

  if (email.value.trim() === "") {
    email.nextElementSibling.classList.remove("hidden");
    email.nextElementSibling.setAttribute("aria-hidden", "false");
    boolean = false;
  } else if (
    !email.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
  ) {
    email.nextElementSibling.classList.remove("hidden");
    email.nextElementSibling.innerHTML = "Please enter a valid email address";
    email.nextElementSibling.setAttribute("aria-hidden", "false");
    boolean = false;
  } else {
    email.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.setAttribute("aria-hidden", "true");
  }

  if (message.value.trim() === "") {
    message.nextElementSibling.classList.remove("hidden");
    message.nextElementSibling.setAttribute("aria-hidden", "false");
    boolean = false;
  } else {
    message.nextElementSibling.classList.add("hidden");
    message.nextElementSibling.setAttribute("aria-hidden", "true");
  }

  if (!consent.checked) {
    const consentError = document.getElementById("consent-error");
    consentError.classList.remove("hidden");
    consentError.setAttribute("aria-hidden", "false");
    boolean = false;
  } else {
    const consentError = document.getElementById("consent-error");
    consentError.classList.add("hidden");
    consentError.setAttribute("aria-hidden", "true");
  }

  if (!queryGeneral.checked && !querySupport.checked) {
    const queryError = document.getElementById("query-type-error");
    queryError.classList.remove("hidden");
    queryError.setAttribute("aria-hidden", "false");
    boolean = false;
  } else {
    const queryError = document.getElementById("query-type-error");
    queryError.classList.add("hidden");
    queryError.setAttribute("aria-hidden", "true");
  }

  return boolean;
}
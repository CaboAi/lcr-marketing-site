(function () {
  "use strict";

  // Signups are emailed through Web3Forms (same key as the contact form).
  var WEB3FORMS_URL = "https://api.web3forms.com/submit";
  var WEB3FORMS_KEY = "a06d5803-4d0a-4be5-863b-a3814523ac3e";

  var MESSAGES = {
    en: {
      missingEmail: "Please enter your email address.",
      joining: "Joining...",
      success: "You're on the list! We'll email you when we launch.",
      error: "Something went wrong. Please try again in a moment."
    },
    es: {
      missingEmail: "Por favor ingresa tu correo electrónico.",
      joining: "Registrando...",
      success: "Ya estás en la lista. Te escribiremos cuando lancemos.",
      error: "Algo salió mal. Intenta de nuevo en un momento."
    }
  };

  function currentLang() {
    return document.documentElement.lang === "es" ? "es" : "en";
  }

  function t(key) {
    return MESSAGES[currentLang()][key];
  }

  function getRole(form) {
    var group = form.getAttribute("data-role-group");
    var picked = group
      ? document.querySelector('input[name="' + group + '"]:checked')
      : form.querySelector('input[name="role"]:checked');
    if (picked) return picked.value;
    var field = form.querySelector('[name="role"]');
    return field && field.value ? field.value : "renter";
  }

  function showMessage(form, message, isError) {
    var existing = form.parentNode.querySelector(".waitlist-msg");
    if (existing) existing.remove();

    var msg = document.createElement("p");
    msg.className = "waitlist-msg mt-3 w-full text-sm font-semibold " + (isError ? "text-red-500" : "text-green-600");
    msg.setAttribute("role", isError ? "alert" : "status");
    msg.textContent = message;
    form.insertAdjacentElement("afterend", msg);
  }

  function handleWaitlistSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var emailInput = form.querySelector('input[type="email"]');
    var submitBtn = form.querySelector('button[type="submit"]');
    var email = emailInput ? emailInput.value.trim() : "";

    if (!email) {
      showMessage(form, t("missingEmail"), true);
      return;
    }

    var role = getRole(form);
    var originalLabel = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t("joining");
    }

    fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: "New waitlist signup (" + role + ")",
        from_name: "Los Cabos Rental App Waitlist",
        email: email,
        role: role,
        language: currentLang(),
        page: window.location.pathname,
        botcheck: false
      })
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data && data.success) {
          showMessage(form, t("success"), false);
          if (emailInput) emailInput.value = "";
        } else {
          showMessage(form, t("error"), true);
        }
      })
      .catch(function () {
        showMessage(form, t("error"), true);
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        }
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form[data-waitlist]").forEach(function (form) {
      form.addEventListener("submit", handleWaitlistSubmit);
    });
  });
})();

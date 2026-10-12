(function () {
  "use strict";

  // Supabase configuration
  var SUPABASE_URL = "https://hbefkjibsxclwfoapsxj.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_Aid53grO86f2Df0BpHL46g_5mH26Alp";

  var MESSAGES = {
    en: {
      missingEmail: "Please enter your email address.",
      joining: "Joining...",
      success: "You're on the list! We'll email you when we launch.",
      duplicate: "You're already on the waitlist.",
      error: "Something went wrong. Please try again in a moment."
    },
    es: {
      missingEmail: "Por favor ingresa tu correo electrónico.",
      joining: "Registrando...",
      success: "Ya estás en la lista. Te escribiremos cuando lancemos.",
      duplicate: "Ya estás en la lista de espera.",
      error: "Algo salió mal. Intenta de nuevo en un momento."
    }
  };

  var supabaseClient = null;

  function getClient() {
    if (!supabaseClient && window.supabase) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return supabaseClient;
  }

  function t(key) {
    var lang = document.documentElement.lang === "es" ? "es" : "en";
    return MESSAGES[lang][key];
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

    var client = getClient();
    if (!client) {
      showMessage(form, t("error"), true);
      return;
    }

    var originalLabel = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t("joining");
    }

    client
      .from("waitlist")
      .insert([{ email: email, role: getRole(form) }])
      .then(function (result) {
        if (!result.error) {
          showMessage(form, t("success"), false);
          if (emailInput) emailInput.value = "";
        } else if (result.error.code === "23505") {
          showMessage(form, t("duplicate"), false);
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

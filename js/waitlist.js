(function () {
  "use strict";

  // Supabase configuration
  var SUPABASE_URL = "https://hbefkjibsxclwfoapsxj.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_Aid53grO86f2Df0BpHL46g_5mH26Alp";

  var supabaseClient = null;

  function getClient() {
    if (!supabaseClient && window.supabase) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return supabaseClient;
  }

  function showMessage(form, message, isError) {
    var existing = form.querySelector(".waitlist-msg");
    if (existing) existing.remove();

    var msg = document.createElement("p");
    msg.className = "waitlist-msg mt-3 text-sm font-semibold " + (isError ? "text-red-500" : "text-green-600");
    msg.textContent = message;
    form.appendChild(msg);

    if (!isError) {
      setTimeout(function () {
        if (msg.parentNode) msg.remove();
      }, 5000);
    }
  }

  function handleWaitlistSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var emailInput = form.querySelector('input[type="email"]');
    var roleInput = form.querySelector('input[name="role"]:checked') || form.querySelector('select[name="role"]');
    var submitBtn = form.querySelector('button[type="submit"]');

    var email = emailInput ? emailInput.value.trim() : "";
    var role = roleInput ? roleInput.value : "renter";

    if (!email) {
      showMessage(form, "Please enter your email address.", true);
      return;
    }

    var client = getClient();
    if (!client) {
      showMessage(form, "Thank you! We'll be in touch soon.", false);
      if (emailInput) emailInput.value = "";
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Joining...";
    }

    client
      .from("waitlist")
      .insert([{ email: email, role: role }])
      .then(function (result) {
        if (result.error) {
          if (result.error.code === "23505") {
            showMessage(form, "You're already on the waitlist!", false);
          } else {
            showMessage(form, "Something went wrong. Please try again.", true);
          }
        } else {
          showMessage(form, "You're on the list! We'll notify you when we launch.", false);
          if (emailInput) emailInput.value = "";
        }
      })
      .catch(function () {
        showMessage(form, "Something went wrong. Please try again.", true);
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Join Waitlist";
        }
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll("form[data-waitlist]");
    forms.forEach(function (form) {
      form.addEventListener("submit", handleWaitlistSubmit);
    });
  });

  window.handleWaitlistSubmit = handleWaitlistSubmit;
})();

(function () {
  "use strict";

  const resultDiv = document.querySelector("#result");
  // Function using fetch to POST to our API endpoint
  function inviteUser(data) {
    //document.querySelector("#result").innerHTML = "Please wait";
    resultDiv.classList.add("hidden");
    resultDiv.classList.remove("alert", "alert-warning");
    return fetch("/api/add-user", {
      body: JSON.stringify(data),
      method: "POST",
    }).then((res) => {
      console.log("response ", res);
      return res.json();
    });
  }

  // Todo data
  const args = {
    repo: "medenin",
    username: "ajeeshw3c",
    itemid: "15430157",
    purchase_code: "2638e479-70be-4e05-a1de-aca8c1dac8ba",
    permission: "pull",
  };

  const form = document.querySelector("form");
  const loaderDiv = document.querySelector(
    "form button[type='submit'] .animate-spin"
  );
  form.addEventListener("submit", handleForm);
  function handleForm(event) {
    event.preventDefault();
    if (form.checkValidity() === false) {
      form.classList.add("was-validated", "animate-shake");
      setTimeout(function () {
        form.classList.remove("animate-shake");
      }, 1000);
      event.stopPropagation();
      return false;
    }
    loaderDiv.classList.remove("hidden");
    const data = Object.fromEntries(new FormData(form));
    console.log(data);

    // create it!
    inviteUser(data)
      .then((res) => {
        console.log("API response", res);

        loaderDiv.classList.add("hidden");
        resultDiv.classList.remove("hidden");

        if (res.status == 200) {
          form.reset();
          resultDiv.classList.add("alert", "alert-success");
        }
        if (res.status == 204) {
          resultDiv.classList.add("alert", "alert-warning");
        }
        if (res.status == 400) {
          resultDiv.classList.add("alert", "alert-error");
        }
        resultDiv.innerHTML = res.message;
        // set app state
      })
      .catch((error) => {
        console.log("API error: ", error);
        resultDiv.innerHTML =
          "Something Went Wrong. Please see Console Error Log. ";
        loaderDiv.classList.add("hidden");
        resultDiv.classList.remove("hidden");
        resultDiv.classList.add("alert", "alert-error");
      });
  }
})();

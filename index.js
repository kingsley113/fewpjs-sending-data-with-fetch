// Add your code here
function submitData(userName, userEmail) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    }),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      renderUser(object);
    })
    .catch(function (error) {
      renderError(error.message);
      // renderUser(error.message);
    });
}

const body = document.querySelector("body");

function renderUser(user) {
  const p = document.createElement("p");
  p.innerHTML = user.id;
  // p.id = user.id;
  body.appendChild(p);
}

function renderError(message) {
  const p = document.createElement("p");
  p.innerHTML = message;
  body.appendChild(p);
}

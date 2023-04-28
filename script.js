function saveUser() {
  const save_btn = document.querySelector("#save_btn");
  save_btn.addEventListener("click", function () {
    let input_val = document.querySelector("#id_input").value;
    // alert(input_val);
    localStorage.setItem("user", input_val);
    checkLocal();
  });
}
function checkLocal() {
  if (localStorage.user) {
    document.querySelector("#h1").innerHTML = `
        Welcome Back ${localStorage.user}
        `;
  }
}
function deleteValue() {
  const clear_btn = document.querySelector("#clear_btn");
  clear_btn.addEventListener("click", function () {
    document.querySelector("#h1").innerHTML = `Welcome Back Guest`;
    localStorage.clear("user");
  });
}

const numberOfVisits = Number(localStorage.getItem("numberOfVisits"));
localStorage.setItem("numberOfVisits", numberOfVisits + 1);

const view_visitors = document.querySelector("#view_visitors");
view_visitors.addEventListener("click", function () {
  if (localStorage.numberOfVisits) {
    document.querySelector("#label2").innerHTML = `The number of visitors:
    ${localStorage.numberOfVisits}
    `;
  }
});
function deleteNumberOfvisitors() {
  const clear_btn2 = document.querySelector("#clear_btn2");
  clear_btn2.addEventListener("click", function () {
    document.querySelector("#label2").innerHTML = `The number of visitors: 0`;
    localStorage.clear("numberOfVisits");
  });
}

checkLocal();
saveUser();
deleteValue();
deleteNumberOfvisitors();

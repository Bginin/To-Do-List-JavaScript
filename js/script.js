const addTask = document.getElementById("button-addon2");
const removeTask = document.getElementById("btn-remove");

addTask.addEventListener("click", () => {
  const ulList = document.querySelector("ul");
  const input = document.getElementById("inputField");
  ulList.insertAdjacentHTML("afterbegin", `<p>${input.value}</p>`);
  input.value = "";
});

removeTask.addEventListener("click", () => {
  const lastItem = document.querySelector("p:last-child");
  lastItem.remove();
});

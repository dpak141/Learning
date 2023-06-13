let myLeads = [
  "https://www.google.com/",
  "https://facebook.com",
  "linkedin.com",
];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
    listItems += `
    <li>
        <a target= '_blank' href='${myLeads[i]}'>${myLeads[i]} </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();
  let allNamesDOMColllection = document.getElementsByClassName("name");

  for (let i = 0; i < allNamesDOMColllection.length; i++) {
    const currentName = allNamesDOMColllection[i].textContent.toLowerCase();
    console.log(currentName);

    if (currentName.includes(searchQuery)) {
      allNamesDOMColllection[i].style.display = "block";
    } else {
      allNamesDOMColllection[i].style.display = "none";
    }
  }
});

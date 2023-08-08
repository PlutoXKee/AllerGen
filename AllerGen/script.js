localStorage.removeItem("Diet");
let diet = JSON.parse(localStorage.getItem("Diet")) || [];
let favs = JSON.parse(localStorage.getItem("SavedHearts")) || [];
let favPlaces = JSON.parse(localStorage.getItem("FavPlaces")) || [];
let changed = [];

let selectMenu = document.getElementById("allergens0");
let preferenceDivs = document.getElementsByClassName("preference-container");
let hamburgerMenu = document.getElementById("hamburger-menu");
let hamburgerSubMenu = document.getElementById("hamburger-submenu");
let favContainers = document.getElementsByClassName("fav-container");

let hamburgerSubMenuState = 1;

function generateOptions(selectElement) {
  const options = [
    { value: "", label: "Please select" },
    { value: "peanuts", label: "Peanuts" },
    { value: "dairy", label: "Dairy" },
    { value: "treeNuts", label: "Tree Nuts" },
    { value: "eggs", label: "Eggs" },
    { value: "shellfish", label: "Shellfish" },
    { value: "wheat", label: "Wheat" },
    { value: "fish", label: "Fish" },
    { value: "soy", label: "Soy" },
  ];

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    selectElement.appendChild(optionElement);
  });
}

for (let i = 0; i < favContainers.length; i++) {
  if (favs[i] == 1) {
    let heart = favContainers[i].querySelector("#heart");
    heart.src = "../images/fav-icon.png";
  }
}

for (let i = 0; i < diet.length; i++) {
  let newSelectLabel = document.createElement("label");
  newSelectLabel.setAttribute("for", "allergen" + diet.length - 1);
  newSelectLabel.textContent = "Select a restriction:";
  preferenceDiv.appendChild(newSelectLabel);

  let newSelect = document.createElement("select");
  newSelect.setAttribute("name", "allergen" + diet.length - 1);
  newSelect.setAttribute("id", "allergen" + diet.length - 1);
  preferenceDiv.appendChild(newSelect);
}

for (let i = 0; i < preferenceDivs.length; i++) {
  preferenceDivs[i].addEventListener("change", function () {
    let selectedValue = this.querySelector("select").value;
    console.log(i);
    console.log(changed[i]);
    if (!changed[i] || changed[i] == undefined) {
      changed[i] = true;
      changed.push(1);
      diet.push(selectedValue);
      localStorage.setItem("Diet", JSON.stringify(diet));
      console.log("what");

      let newSelectLabel = document.createElement("label");
      newSelectLabel.setAttribute("for", "allergen" + diet.length - 1);
      newSelectLabel.textContent = "Select a restriction:";
      preferenceDivs[i].appendChild(newSelectLabel);
      let newSelect = document.createElement("select");
      newSelect.setAttribute("name", "allergen" + diet.length - 1);
      newSelect.setAttribute("id", "allergen" + diet.length - 1);
      preferenceDivs[i].appendChild(newSelect);
      generateOptions(newSelect);
    }
  });
}

hamburgerMenu.onclick = function () {
  if (hamburgerSubMenuState == 1) {
    hamburgerSubMenuState = 2;
    hamburgerSubMenu.style.display = "none";
  } else {
    hamburgerSubMenuState = 1;
    hamburgerSubMenu.style.display = "flex";
  }
};

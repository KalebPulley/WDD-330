const form1 = document.forms["search"];
const input = form1.elements.searchInput;

//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener("change", () => alert("changed"), false);

form1.addEventListener("submit", search, false);
input.value = "Search Here";
function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}

input.addEventListener(
  "focus",
  function () {
    if (input.value === "Search Here") {
      input.value = "";
    }
  },
  false
);

input.addEventListener(
  "blur",
  function () {
    if (input.value === "") {
      input.value = "Search Here";
    }
  },
  false
);
//hero starts here

const form = document.forms["hero"];
form.addEventListener("submit", makeHero, false);

function makeHero(event) {
  event.preventDefault(); // prevent the form from being submitted

  const hero = {}; // create an empty object

  hero.name = form.heroName.value; // create a name property based on the input field's value
  hero.realName = form.realName.value;

  hero.age = form.age.value;

  hero.city = form.city.value;

  hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
  alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
  return hero;
}

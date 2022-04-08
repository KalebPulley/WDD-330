import { loadview } from "./budget.js";
const BUDGET = "budgetLocal";
function getlLocal() {
  let budgetRaw = localStorage.getItem(BUDGET);
  let budgetList = [];
  console.log(budgetRaw + " this is what it is")
  if (budgetRaw) {
    budgetList = JSON.parse(budgetRaw);
  } else {
      localStorage.setItem(BUDGET, JSON.stringify(budgetList));
    }
  console.log(budgetList);
  return budgetList;
}
function saveLocal(item) {
  let original = getlLocal();
  original.push(item);
  localStorage.setItem(BUDGET, JSON.stringify(original));
  loadview();
}
function deleteItem(id) {

  const list = getlLocal();
  let newList = list.filter((transaction) => transaction.id != id);
  localStorage.setItem(BUDGET, JSON.stringify(newList));
  //loadview();
}

export {getlLocal, saveLocal, deleteItem};

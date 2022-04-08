/*this will be the handler module it relies on:
Storage (to handle saving and deleting data from storage)
Transaction (this will be the class that the data is stored as instances of)
Filter (to change results if filtered)
Catagories (to sum sending and income)
View (to populate the data in the trnsaction history and filter options)
*/
import { TRANSACTION } from "./Transaction.js";
import { getBallance, getExpences, getIncome } from "./totals.js";
import { buildTransactions, buildFilters, buildFilterItems } from "./view.js";
import { getlLocal, deleteItem, saveLocal } from "./storage.js";
import { getFunds, narrowList } from "./filter.js";
class BUDGET {
  constructor() {
    //populate data
    let lists = loadview();
    //let filters = buildFilterItems(getFunds(getlists()));
  }
}
async function loadview() {
  try {
    const response = await fetch("./backend/data.json");
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const fetchJson = await response.json();
      const bothLists = allLists(fetchJson);
      buildTransactions(bothLists);
      document.getElementById("save").addEventListener("click", saveData);
      const filters = buildFilters(getFunds(bothLists));
      document.getElementById("aside").innerHTML = "";
      document.getElementById("aside").appendChild(filters);
      document.getElementById("total").innerHTML = getBallance(bothLists);
      document.getElementById("spent").innerHTML = getExpences(bothLists);
      document.getElementById("income").innerHTML = getIncome(bothLists);
      return bothLists;
    }
  } catch (error) {
    console.log(error);
  }
}
function getValue(x) {
    const nodeValue = document.getElementById(x).value;
    return nodeValue;
}
async function filterCall(e){
    const button = e.currentTarget;
    try {
        const response = await fetch("./backend/data.json");
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          const fetchJson = await response.json();
          const bothLists = allLists(fetchJson);
          buildTransactions(narrowList(bothLists,  button.getAttribute("data-id")));
          return bothLists;
        }
      } catch (error) {
        console.log(error);
      }
}

function allLists(historic) {
  //get both lists
  const current = getlLocal();
  //adlists together
  let combined = historic.concat(current);
  return combined;
}
function sortList(list) {
  //sort by date
  let output = [];
  if (typeof list === typeof Array) {
    let sorted = list.sort((a, b) => {
      return a.id - b.id;
    });
    output = sorted;
  }
  return output;
}
function getlists() {
  return sortList(allLists());
}
function saveData() {
  //validate data
  try {
      const year = getValue("year");
      const month = getValue("month");
      const day = getValue("day");
      const fund = getValue("fund");
      const amount = getValue("amount");
      const comment = getValue("comment");
    typeof fund === typeof Text;
    typeof comment === typeof Text &&
      comment.length <= 200;
    typeof amount === typeof Number;
    let noDate = false;
    if (
      ((typeof year === typeof Number &&
        year <= 99 &&
        year >= 0) ||
        year === null) &&
      ((typeof month === typeof Number &&
        month <= 11 &&
        month >= 0) ||
        month === null) &&
      ((typeof day === typeof Number &&
        day <= 30 &&
        day >= 0) ||
        day === null)
    ) {
      noDate = true;
    }
    //create date object for the id
    if (noDate == true) {
      const now = new Date();
      const id = now.getMilliseconds();
      const newTrans = new TRANSACTION(id,`${now.getFullYear}/${now.getMonth + 1}/${now.getDay + 1}`,"home",100.50,"payday"
      );
      //save to local storage
    saveLocal(newTrans);
    }else{
        const now = new Date();
        const id = now.getMilliseconds();
        const newTrans = new TRANSACTION(
        id,`20${year}/${month}/${day}`,`${fund}`,parseFloat(amount),`${comment}`
      );
      saveLocal(newTrans);
    }

    
    
  } catch (error) {
    console.log(error);
  }
}
export { BUDGET, loadview, saveData, filterCall};

import { loadview, filterCall } from "./budget.js";
import { getFunds, narrowList } from "./filter.js";
import { deleteItem } from "./storage.js";
function buildFilterItems(list) {
    //make a ul for the funds
    let ul = document.createElement("ul");
    
    //make a li element for each fund type
    list.forEach(element => {
        const listItem = document.createElement("li");
        const newItem = document.createElement("button");
        newItem.innerHTML = `${element}`;
        newItem.addEventListener("click", narrowList(list, element));
        listItem.appendChild(newItem);
        ul.appendChild(listItem)
        
    });
    //return the ul with the lis inside
    return ul;
} 
function buildTransactions(transactions) {
    let transactionList = document.getElementById("dataSheet");
    transactionList.innerHTML = "";
    transactions.forEach(transaction => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${transaction.amount}: ${transaction.fund}: ${transaction.date}: ${transaction.comment}`
        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute('data-id', transaction.id)
        button.onclick = deleteItemCall;
        listItem.appendChild(button);
        transactionList.appendChild(listItem);
    })
}
function buildFilters(funds) {   
    const ul = document.createElement("ul");
    const header = document.createElement("li");
    header.innerHTML = "Filter";
    ul.appendChild(header);
    funds.forEach(fund => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${fund}`
        const button = document.createElement("button");
        button.innerHTML = "X";
        button.setAttribute('data-id', fund)
        button.classList.add("filter");
        button.onclick = filterCall;
        listItem.appendChild(button);
        ul.appendChild(listItem);
    })
    return ul;
}
function deleteItemCall(e){
    const button = e.currentTarget;
    deleteItem(button.getAttribute("data-id"));
    loadview();
}
export{
    buildFilterItems,
    buildTransactions,
    buildFilters
}
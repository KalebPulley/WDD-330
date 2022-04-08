function getBallance(transactions) {
    let output = 0;
    transactions.forEach(element => {
        output += element.amount
    });
    return output;
}
function getIncome(transactions) {
    let output = 0;
    transactions.forEach(element => {
        if (element.amount > 0){
        output += element.amount}
    });
    return output;
}
function getExpences(transactions) {
    let output = 0;
    transactions.forEach(element => {
        if (element.amount <= 0){
        output += element.amount}
    });
    return output;
}
export { getBallance, getExpences, getIncome };
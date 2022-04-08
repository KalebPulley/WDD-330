class TRANSACTION {
  //set values with constructor
  constructor(id, date, fund, amount, comment) {
    if(amount != ""){
      try {
      if (typeof id !== typeof 0) throw "Invalid id";
      if (typeof date !== typeof "") throw "Enter date as a string";
      if (typeof fund !== typeof "") throw "Enter fund type as a string";
      if (typeof amount != typeof 0) {
        if (typeof amount !== typeof "") {
          throw "Enter amount as a number";
        } else {
          this.amount = parseFloat(amount);
        }
      }
      if (typeof comment !== typeof "") throw "Enter comment as a string";
      if (!this.amount) {
        this.amount = amount;
      }
      this.id = id;
      this.fund = fund;
      this.date = date;
      this.comment = comment;
    } catch (error) {
      console.log(error);
    }}
  }
  toString(){
            return `{"date":"${this.date}", "amount":"${this.amount}", "fund":"${this.fund}", "comment":"${this.comment}" }`
  }
  getData(){
      return {"id":this.id, "date":this.date, "amount":this.amount, "fund":this.fund, "comment":this.comment }
  }
}
export { TRANSACTION };

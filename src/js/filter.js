//for narrowing the lists
export function narrowList(list, fund){
    let narrowed = [];
    list.forEach((element) => {
        if (element.fund == fund){
            narrowed.push(element)
        }
    });
    return narrowed;
}
export function getFunds(list){
    let funds = [];
    list.forEach(element => {
        if(funds.length != 0){
            let bool = true;
            funds.forEach(fund => {
                if(element.fund == fund){
                    bool = false;
                }
            })
            if (bool){
                funds.push(element.fund);
            }
        }else{
            funds.push(element.fund);
        }
        console.log(element.fund);
    });
    return funds;
}
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let isShopOpen = true;

let order = (time, work) => {

    return new Promise((resolve, reject)=>{

        if(isShopOpen){

            setTimeout(() => {
                resolve(work());  
            }, time);
  
        }else{
            reject( console.log("Shop is closed"));
        }

    });   
};

order (2000, ()=>{ console.log(`${stocks.Fruits[0]} was selected`) })

.then(()=>{

    return order(1000, ()=>{
      console.log(`${stocks.Liquid[0]} was selected`)
  })
})

.then(()=>{

   return order(0000, ()=>{
        
    console.log("Machine started")

    })

})

.then(()=>{
    return order(1000, ()=>{
        console.log(`${stocks.Liquid[0]} was selected`);

})

.then(()=>{
    return order(1000, ()=>{
        console.log(`${stocks.Holder[0]} was selected`);
}).

then(()=>{

    return order(1000, ()=>{
        console.log(`${stocks.Toppings[0]} was selected`);

}
).catch(()=>{

    console.log("customer left");
})

.finally(()=>{

    console.log("Shop close");
})
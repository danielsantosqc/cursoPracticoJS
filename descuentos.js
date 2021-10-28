function calculateDiscount (price, discount){
    let finalPrice = (price * (100 - discount)) / 100;    
    return finalPrice;
}

let price = 100;
const discount = 15;

finalPrice = calculateDiscount(price, discount);

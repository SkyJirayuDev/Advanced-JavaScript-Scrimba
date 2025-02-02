import { itemsBoughtArr } from '/itemsBoughtArr.js'

function calculateTotalCost(itemsBoughtArr, discount){
    const total = itemsBoughtArr.reduce((total, currentItem) => 
        total + currentItem.priceUSD, 0
        )
    return total - discount
}

console.log(calculateTotalCost(itemsBoughtArr, 10))
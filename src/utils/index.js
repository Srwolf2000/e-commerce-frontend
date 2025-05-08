/**
 * This function calculates total price of a new order 
 * @param {Array} products 
 * @returns {number} total price
 */

export const totalPrice = (products)=>{
    let sum = products.reduce((prev,product)=>prev + product.price,0);
    return sum

}
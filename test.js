const { log } = console;

const priceCheck = (products, productPrices, productSold, soldPrice) => {
  const productsArr = [];
  let result = 0;
  products.forEach((product, index) => productsArr.push({product, price: productPrices[index]}));
  log(productsArr);
  productSold.forEach((product, index) => {
    const realPrice = productsArr.filter(pr => pr.product === product).price;
    if(soldPrice[index] !== realPrice){
    result += 1;
    }
  })
  return result;
}

const products=['rice', 'sugar', 'wheat', 'cheese'];
const productPrices=[16.89, 56.92, 20.89, 345.99];
const productSold=['rice', 'cheese'];
const soldPrice=[18.99, 400.89];

log(priceCheck(products, productPrices, productSold, soldPrice));


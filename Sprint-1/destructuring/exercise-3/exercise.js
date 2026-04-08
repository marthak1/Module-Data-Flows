let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
function orders(orderItems) {
  // let total = 0;
  console.log("QTY    ITEM    TOTAL");
  orderItems.forEach(({ quantity, itemName, unitPricePence }) => {
    console.table(`${quantity}   ${itemName}     ${unitPricePence}`);
  });
}

orders(order);
console.table(order)
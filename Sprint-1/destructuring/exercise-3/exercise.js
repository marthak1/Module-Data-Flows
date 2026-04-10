let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
function orders(orderItems) {
  const header = `${"QTY".padEnd(5)}${"ITEM".padEnd(20)}${"TOTAL (£)".padStart(
    10
  )}`;
  console.log(header);
  orderItems.forEach(({ quantity, itemName, unitPricePence }) => {
    const totalPounds = ((quantity * unitPricePence) / 100).toFixed(2);
    const row = `${String(quantity).padEnd(5)}${itemName.padEnd(
      20
    )}${totalPounds.padStart(10)}`;
    console.log(row);
  });
  const grandTotal = orderItems.reduce((sum, { quantity, unitPricePence }) => {
    return sum + quantity * unitPricePence;
  }, 0);
  console.log(`Total: £${(grandTotal / 100).toFixed(2)}`);
}

orders(order);

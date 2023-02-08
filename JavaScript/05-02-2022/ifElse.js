// billAmount = 60000.00;
// discount = 0.05;
// finalAmount = billAmount - (billAmount * discount);

// if (billAmount >= 50000.00) {
//     console.log("Discount Applied! Your Final Amount is Rs.", finalAmount)
// } else {
//     console.log("Discount not Applied")
// }

billAmount = 3000.00;
discount = 0.05;


if (billAmount >= 5000.00) {
    console.log("10% Discount Applied!");
    discount = 0.10;
} else if (billAmount >= 4000.00) {
    console.log("5% Discount Applied!");
    discount = 0.05;
} else if (billAmount >= 3000.00) {
    console.log("3% Discount Applied!");
    discount = 0.03;
} else {
    console.log("No Discount Applied!");
    discount = 0;
}

finalAmount = billAmount - (billAmount * discount);
console.log("Your final bill is:", finalAmount);
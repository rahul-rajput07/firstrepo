// function calculateDiscount(finalBill) {
//   let discount = 0;
//   if (finalBill >= 10000) {
//     discount = 10;
//   } else if (finalBill >= 5000) {
//     discount = 5;
//   } else if (finalBill >= 2500) {
//     discount = 2;
//   } else {
//     discount = 0;
//   }
//   return discount;
// }

// let totalDiscount = calculateDiscount(9000);
// console.log("The total discount is : " + totalDiscount + "%");

// function calculateFinalBill(finalDiscount, billAmount) {
//   finalAmount = billAmount - (finalDiscount * billAmount) / 100;

//   return finalAmount;
// }
// let finalBillAmount = calculateFinalBill(totalDiscount, 20000);
// console.log("The final bill amount is : Rs." + finalBillAmount);

// Write a function that displays the day of the week
// 0 Sunday
// 1 Monday
// .. 6 Saturday

function dayOfTheWeek(input) {
  let day;
  if (input == 0) {
    day = "Sunday";
  } else if (input == 1) {
    day = "Monday";
  } else if (input == 2) {
    day = "Tuesday";
  } else if (input == 3) {
    day = "Wednesday";
  } else if (input == 4) {
    day = "Thursday";
  } else if (input == 5) {
    day = "Friday";
  } else if (input == 6) {
    day = "Saturday";
  }
  return day;
}

console.log("Today is " + dayOfTheWeek(5));

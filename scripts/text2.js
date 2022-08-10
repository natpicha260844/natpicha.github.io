let inputnumber;
let average;
let number = 0;
let arrayNumber = [];
list = readNumber(inputnumber, arrayNumber);

function readNumber(inputnumber, arrayNumber) {
  this.inputnumber = inputnumber;
  this.arrayNumber = arrayNumber;

  do {
    inputnumber = Number(prompt("Enter an integer (a negative to quite):"));
    if (inputnumber > 0 && number >= 0) {
      number += 1;
      arrayNumber.push(inputnumber);

    } else if (inputnumber < 0 && number <= 0) {
      arrayNumber.push(0);
    }
  } while (inputnumber > 0 || isNaN(inputnumber));
  return this.arrayNumber;
}

function display(list) {
  let sumArraylist = 0;
  let number2 = 0;
  for (i = 0; i < number; i++) {
    sumArraylist += list[i];
    number2 += i;
  }
  this.sumArraylist = sumArraylist;
  this.number2 = number2;
  this.average1 = function () {
    this.average = sumArraylist / number2;
    return this.average;
  };
}

let a = new display(list, average);

if (list[0] == 0) {
  alert(
    "For the list that is empty, " +
      "the average is " + 0 +
      ", the minimum is " +
      Math.min.apply(Math, arrayNumber) +
      ", and the maximum is " +
      Math.max.apply(Math, arrayNumber)
  );
} else {
  alert(
    "For the list " +
      arrayNumber +
      ", the average is " +
      a.average1().toFixed(2) +
      ", the minimum is " +
      Math.min.apply(Math, arrayNumber) +
      ", and the maximum is " +
      Math.max.apply(Math, arrayNumber)
  );
}

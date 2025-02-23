let monthNum = 2;
let res;

switch (monthNum) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    res = "31 days";
    break;
  case 2:
    res = "28/29 days";
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    res = "30 days";
    break;
  default:
    res = "Invalid input! Please enter month number between 1-12.";
}

console.log(res);

let weekDay = 18;
let res;

switch(weekDay){
  case 1 :
    res = "Monday"
    break;
  case 2 : 
    res = "Tuesday"
    break;
  case 3 :
    res = "Wednesday"
    break;
  case 4 : 
    res = "Thursday"
    break;
  case 5 :
    res = "Friday"
    break;
  case 6 :
    res = "Saturday"
    break;
  case 7 : 
    res = "Sunday"
    break;
  default:
    res = "Invalid input! Please enter week number between 1-7."
}

console.log(res);
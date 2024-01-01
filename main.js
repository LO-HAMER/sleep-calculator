const getSleepHours = day => {
switch(day){
  case 'monday':
  return 8
  break;
    case 'tuesday':
  return 7
  break;
    case 'wednesday':
  return 7
  break;
    case 'thursday':
  return 5
  break;
    case 'friday':
  return 8
  break;
    case 'saturday':
  return 7
  break;
    case 'sunday':
  return 8
  break;

  default:
  return 'Error'
}
};

const getActualSleepHours = () => 
  getSleepHours('monday')
  +  getSleepHours('tuesday')
  +  getSleepHours('wednesday')
  +  getSleepHours('thursday')
  +  getSleepHours('friday')
  +  getSleepHours('saturday')
  +  getSleepHours('sunday');

const getIdealSleepHours = () =>{
  const idealHours = 8;
return idealHours * 7
};

const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours){
console.log("you've got the perfect amount of sleep");
}
if (actualSleepHours > idealSleepHours){
console.log("you've got more sleep than needed");
}
if (actualSleepHours < idealSleepHours){
console.log("you should get some rest");
}
};

console.log(getActualSleepHours('monday'))
console.log(getIdealSleepHours(7.5))
console.log(getSleepHours('monday'));

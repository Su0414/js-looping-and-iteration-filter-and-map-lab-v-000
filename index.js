// Code your solution here:
const drivers = {}

function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function (driver) {
   return driver.revenue > amount;
 });
}

function driverNamesWithRevenueOver(drivers, amount){
  return driversWithRevenueOver(drivers, amount).map(function (driver){
    return driver.name;
  });
 }

function exactMatch(drivers, list){
  return drivers.filter(function (driver) {
    let flag = false
     for (const key in list){
<<<<<<< HEAD
          flag = driver[key] === list[key]
=======
          flag = driver[key] === list[key]            
>>>>>>> 1f392e6a04a30ab05d463b3fa37674ec03928adc
        }
        return flag
    });
}

function exactMatchToList(drivers, list){
  return exactMatch(drivers, list).map(function (driver){
    return driver.name;
  }
);
}

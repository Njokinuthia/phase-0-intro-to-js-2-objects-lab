const employee = {
  name:"Sam",
  streetAddress:"11 Broadway",
}

const beforeEach = function () {
  for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
};
// fucntion one
function updateEmployeeWithKeyAndValue(obj,key,value){
  return {...obj,[key]:value};
}
//function  two
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
  beforeEach()
  obj[key]=value;
  return obj;
}
// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","njoki"))

// three
// four
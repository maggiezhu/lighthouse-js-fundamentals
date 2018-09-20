function howManyHundreds(number){
  var remainder = number % 100;
  number = number - remainder;
  var result = number / 100;
  return result;
}
let obj = {
  a:0,
  b:0
};
obj.a = 1;
console.log(obj);
function ageCalculator(name, yearOfBirth, currentYear){
  if (currentYear >= yearOfBirth){
    var result = currentYear - yearOfBirth;
  }
  return name + ' is ' + result + " years old."
}
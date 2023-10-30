/* HW 1

let country = 'Italy';
console.log(country);
let continent = 'Europe';
console.log(continent);
let population = 59.1;
console.log(population);
let isIsland = false;
console.log(isIsland);
let countryDescription = 'The ${coutry} is located in ${continent}, ${population} million people live there.';
console.log(countryDescription); */

/* HW 2

let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.89;

let sarahBMI = weightSarah / heightSarah ** 2;
console.log(sarahBMI);
if (sarahBMI < 18.5) {
            console.log('Sarah is underweight.')
}
else if (sarahBMI >= 18.5 && sarahBMI <=25); {
        console.log('Sarah's weight is normal.')
}

let bobBMI = weightBob / heightBob ** 2;
console.log(bobBMI);
if (bobBMI < 18.5 || bobBMI > 25) {
      console.log('Bob is underweight or overweight.')
}
else {
      console.log('Bob's weught is normal.')
}*/

/* HW 3

let number = 7;
console.log(number % 2 ? 'odd' : 'even')


let isLoggedIn = false;
console.log(isLoggedIn ? 'Hello,try again')

let book = 130;
let numberBook = 100;
let isAvailable = true;
console.log(isAvailable ? '${book * numberBook} lei' : 'Sorry. this item is out of stock')

let year = 2023;
console.log(year % 4==0 ? '2023 is a Leap Year' : '2023 is not a Leap Year')

let country = 'is';
switch (country){
      case 'md':
            console.log('Republic of Moldova')
            break
      case 'ita':
            console.log('Italy')
            break
      case 'grc':
            console.log('Greece')
            break
      case 'ua':
            console.log('Ukraine')
            break
      case 'no':
            console.log('Norway');
            break
      case 'tur' :
            console.log('Turkey');
            break
}

let grade = 60;
switch (true) {
      case grade >=97 && grade <=100 :
            console.log('Congratulations, you have an A+ grade')
            break
      case grade >=93 && grade <=96 :
            console.log('Congratulations, you have an A grade')
            break
      case grade  >=90 && grade <=92 :
            console.log('You have an A- grade')
            break
      case grade >=80 && grade <=89 :
            console.log('You have an B grade')
            break
      case grade >=70 && grade <=79 :
            console.log('You have an C grade')
            break
      case grade >=60 && grade <=69 :
            console.log('You have an D grade')
            break
      case grade >=0 && grade <=59 :
            console.log('You Failed the exam')
            break
}


function tellFurtune (n, z, y, x) {
console.log('You will be ${x} in ${y}, and will get married to ${z} and you will have ${n} kids')
}
tellFortune (1, 'Anna', 'Moldova' , 'a model')
tellFortune (2, 'Dmitrii', 'Italy' , 'a driver')
tellFortune (3, 'Hans', 'Germany' , 'a photographer')


function calculatedDogAge (age) {
      let dogAge = age * 7;
      console.log('Your dog is ${dogAge} years old in Dog Years.')
}
calculatedDogAge (3)
calculatedDogAge(5)
calculatedDogAge(7)*/

/* HW 4

const fruits = []
fruits.push('apple', 'banana', 'orange')
console.log(fruits.lenght)
console.log(fruits)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.shift ()
console.log(numbers)

const colors = ['red', 'green', 'blue', 'yellow']
console.log(colors)
console.log(colors.indexOf('green'))
console.log(colors.includes('orange'))

const names = ['John', 'Jane', 'Mike', 'Jennifer']
names.unshift('David')
console.log(names.indexOf('Mike'))
console.log(names)

const numbers = [2, 4, 6, 8, 10]
console.log(numbers.includes(5))
numbers.push(12)
console.log(numbers)

const months = ['January', 'February', 'March', April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(months.slice(6, -1))
const monthsFilter = months.filter((word) => word.lenght > 5)
console.log(monthsFilter)
console.log(monthsFilter.join('-'))

months.sort()
console.log(months)

const result = months.filter((word) => word.lenght > 3)
console.log(result)*/

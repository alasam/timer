// Variables assigned from command line
const arg = process.argv.slice(2);

// convert string numbers into numbers or NaN if they aren't already numbers
const convert = arg => arg.map(Number)
let newArr = convert(arg)

// timer1 function goes through parameter and filters through numbers, then converts to milliseconds for timeout.
const timer1 = function(arr) {

  for (list of arr) { // goes through each item in the array

    if (arr.length > 0) { // checks if length is below 0 or NaN
      if (isNaN(list) || list < 0) {
    
      } else { // all else, play sound after seconds
        setTimeout(() => {
          process.stdout.write('\x07');
        }, list * 1000); // adds 50ms to timer after every letter

      }
    }
  }
  // return with new line
  return console.log('');
}

timer1(newArr);
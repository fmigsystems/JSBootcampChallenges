/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) {
  if(num1 > num2) return num1
  else if(num2 > num3) return num2
  else return num3
}

// write a function named addUnknown that takes up to 5 arguments and adds them together
function addUnknown(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
  return num1 + num2 + num3 + num4 + num5 
}

// Write a function that accepts a number as an argument. return the string 'even' if it is an even nummber and 'odd' if it is an odd number
function evenOrOdd(num) {
  if( (num % 2) == 0)
  {
		return "even"
	}
  else return "odd"
}

function operator(num1, num2, num3)
{
	if( (num1 + num2) == num3 )
   {
     return "plus"
	}
   else if( num1 - num2 == num3 )
   {
     return "minus"
	}
	else if( num1 * num2 == num3 )
   {
		return "multiply"
	}
	else if( num1 / num2 == num3 )
	{
		return "divide"
	}	
	else return null
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};

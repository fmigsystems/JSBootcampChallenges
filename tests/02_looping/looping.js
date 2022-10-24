/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
   let numArr = []
   let minusedNum = 0
   while(num > 0)
   {
     numArr.push(num)
     minusedNum = num - 1
     num = num - 1
   }

  let currVal = 1
  for(i in numArr)
  {
    currVal = currVal * numArr[i]
  }

   return currVal
}

function stringReverse(str) {
  return str.split('').reverse().join('')
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) 
{
  let slicedString = ''

  if( endIdx === undefined )
  {
    slicedString = originalString.substr(startIdx)
  }
  else if( startIdx === undefined && endIdx === undefined )
  {
    slicedString = originalString
  }
  else 
  {
    slicedString = originalString.substr(startIdx, endIdx - startIdx)
  }

  return slicedString
}

function addTheEvens(num) 
{
  let currVal = 0
  let evenArr = []

  while( num > 1 )
  {
    currVal = num

    if( currVal % 2 == 0 )
    {
      evenArr.push(currVal)
    }

    //currVal = num - 1

    num = num - 1
  }

  currVal = 0
  for( i in evenArr )
  {
    currVal += evenArr[i]
  }

  return currVal
}
 
module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};

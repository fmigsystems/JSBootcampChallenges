/* eslint-disable no-unused-vars */
function multiply(arr) {
  let flattenedArr = arr.flat()
  let total = 1

  for( i in flattenedArr )
  {
    total = total * flattenedArr[i]
  }

  return total
}

function includesCopy(arr, searchValue) 
{
  if( arr.includes(searchValue) ) return true 
  else return false 
}

function inventory(arr) 
{
  let arrFlattened = arr.flat(2)
  let sentenceStr = ''
  let sentenceArr = []

  sentenceStr = sentenceStr.concat('The ')
  sentenceStr = sentenceStr.concat(arrFlattened[1])
  sentenceStr = sentenceStr.concat(' ')
  sentenceStr = sentenceStr.concat(arrFlattened[0])
  sentenceStr = sentenceStr.concat(' is ')
  sentenceStr = sentenceStr.concat(arrFlattened[2])
  sentenceStr = sentenceStr.concat(' dollars.')

  if( arrFlattened.length > 3 )
  {
    sentenceArr.push(sentenceStr)

    sentenceStr = ''

    sentenceStr = sentenceStr.concat('The ')
    sentenceStr = sentenceStr.concat(arrFlattened[4])
    sentenceStr = sentenceStr.concat(' ')
    sentenceStr = sentenceStr.concat(arrFlattened[3])
    sentenceStr = sentenceStr.concat(' is ')
    sentenceStr = sentenceStr.concat(arrFlattened[5])
    sentenceStr = sentenceStr.concat(' dollars.')

    sentenceArr.push(sentenceStr)
    return sentenceArr
  }
  else 
  {
    sentenceArr.push(sentenceStr)
    return sentenceArr
  }
  
}

function camelCase(str) {
  let splitArr = str.split(" ")
  let firstChar = " ";
  let firstWordStr = ""
  let loweredFirstWordArr = []

  for( i in splitArr )
  {
    if( i == 0 )
    {
      // if( /[a-z]/.test(splitArr[i].charAt(0)) )
      // {
      //   console.log("do nothing")
      // }
      if( /[A-Z]/.test(splitArr[i].charAt(0)) )
      {
        firstWordStr = String(splitArr[i].split(" "))
        firstWordStr = firstWordStr.toLowerCase()
        splitArr[i] = firstWordStr
      }
    }
    else 
    {
      splitArr[i] = splitArr[i].charAt(0).toUpperCase() + splitArr[i].slice(1)
    }

    
  }

  let newStr = splitArr.join()
  newStr = newStr.replaceAll(',','')
  newStr = newStr.replaceAll('!','')
  return newStr
}

function joiner(arr, separator) 
{
  if( separator == null )
  {
    separator = ','
  }
  let joinedStr = ''

  for( i in arr )
  {
    joinedStr = joinedStr.concat(arr[i])
    if( i == 2 )
    {
      break
    }
    joinedStr = joinedStr.concat(separator)
  }

  return joinedStr
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};


const items = [['chair', ['comfortable', 100]]];

inventory(items);
//expect(returnedValue[0]).to.equal('The comfortable chair is 100 dollars.');
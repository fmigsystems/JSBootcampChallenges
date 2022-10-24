/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) 
{
  delete obj[prop] 
  
  //console.log(obj)
  return obj
}

function numObjectProps(obj) 
{
  let count = Object.keys(obj).length
  return count
}

function shoppingCart(cart) 
{
  let total = 0
  let sampleProp = ''

  for(i in cart)
  {
    // console.log(Object.values(cart[i])[1])
    total += Object.values(cart[i])[1]
  }

  return total
}

function compareObjects(obj1, obj2) 
{
  if(JSON.stringify(obj1) === JSON.stringify(obj2)) return true
  else return false 
}

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};

function doubler(arr) {
  
  const arrDouble = arr.map(element => {
    return element * 2
  });

  return arrDouble
}

function mapCap(arr) 
{
  const capArr = arr.map(element => {
    return element.toUpperCase();
  });
  
  return capArr
}

function canRideTheRide(objArr) 
{
  //let resultsArr = []

  const resultsArr = objArr.map(element => {
    if( element.age > 16 )
    {
      return element.name + " can ride the ride"
    }
    else 
    {
      return "Sorry, " + element.name + " cannot ride the ride"
    }
  });

  // for( i in objArr )
  // {
  //   if( objArr[i].age > 16 )
  //   {
  //     resultsArr.push(objArr[i].name + " can ride the ride")
  //   }
  //   else 
  //   {
  //     resultsArr.push("Sorry, " + objArr[i].name + " cannot ride the ride")
  //   }
  // }

  return resultsArr
}

function indAndVal(varArr) 
{
  //const arr = []

  const arr = varArr.map((element, index) => {
    return { 
      index: index, 
      value: element 
    }
  })

  // for( i in varArr )
  // {
  //   arr.push({index: i, value: varArr[i]})
  // }

  return arr 
}

function filterEvens(arr) 
{
  const evenArr = arr.filter(element => {
    if( element % 2 == 0) return element 
  })

  return evenArr
}

function gmailSearch(emailArr) 
{
  const gmailArr = emailArr.filter(element => {
    if( element.match("@gmail")) return element 
  })

  return gmailArr 
}

function getCart(cartArr) 
{
  let num = 0
  let initialVal = 0

  num = cartArr.reduce((accumulator, cartItem) => {
    //if(cartItem['price'] < 100)
    //{
      return cartItem.price < 100 ? accumulator + cartItem.price : accumulator
    //}
  }, initialVal)
  
  // for( i in cartArr )
  // {
  //   if(cartArr[i].price < 100)
  //   {
  //     num += cartArr[i].price 
  //   }
  // }

  return num
}

function findGreater(arr) 
{
   const randomClass = {}
   const randomObj = Object.create(randomClass)

  // return randomObj

  const obj = arr.find( element => {
    //element.price > 100 ? element : randomObj  
    if( element.price > 100 ) return element 
  })

  return obj
}

module.exports = {
  doubler,
  mapCap,
  canRideTheRide,
  indAndVal,
  filterEvens,
  gmailSearch,
  getCart,
  findGreater,
};


const cart = [
  { item: 'robot', price: 50 },
  { item: 'basketball', price: 25 },
  { item: 'monitor', price: 299 },
  { item: 'mouse', price: 100 },
  { item: 'Toyota camry', price: 20000 },
];

findGreater(cart)

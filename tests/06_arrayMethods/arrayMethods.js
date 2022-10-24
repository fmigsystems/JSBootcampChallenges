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

function indAndVal() 
{

}

function filterEvens() {

}

function gmailSearch() {

}

function getCart() {

}

function findGreater() {

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





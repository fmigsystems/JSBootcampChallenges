/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const greet = {
    firstName : "myString",

    sayHello() 
    {
        return ("Hello, I'm " + this.firstName)
    }
};

const calc = 
{    
    total : 0,

    add(num)
    {
        return total += num
    },

    subtract(num) 
    {
        return total -= num
    },

    clear()
    {
        total = 0
    }
};

export default { greet, calc };


/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.

house.areas.livingRoom.items.push('dining table');
console.log(house.areas.livingRoom);

// (2) Add a stove to the kitchen.

house.areas.kitchen.items.push('stove');
console.log(house.areas.kitchen.items);

// (3) Remove the washing machine from bedroomOne.

house.areas.bedroomOne.items.pop();
console.log(house.areas.bedroomOne.items);

// (4) Change the color of the car to blue.

house.garage.car.color= 'blue';
console.log(house.garage.car.color);


// (5) Add a another car to the garage with a honk function.


house.garage.newCar = { color: 'yellow',
                        wheels: 4,
                        honk2 : function(Bip){ alert("Beep")}
};

 

// (6) Make the new car honk.

console.log(house.garage.newCar.honk2);


// (7) If the house has a garden, console.log the name of the flower.
 
if (house.garden[0] === true){
    console.log(house.garden[1])
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function

    house.areas.kitchen.items.splice(1,1,'new chair');
    console.log(house.areas.kitchen.items);

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

const NbrOfAreas = Object.keys(house.areas);
console.log(NbrOfAreas);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.

for (let i = 0; i < Object.values(house.areas).items.length; i++)
{
  for (let j = 0; j < Object.values(house.areas)[i].items.length; j++)
  {
    if (Object.values(house.areas)[i].items[j] === 'bed'){
        console.log(Object.values(house.areas)[i].items[j].length)
    }
}
}




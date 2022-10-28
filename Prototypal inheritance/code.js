 let animal={
    eats:true,
    walk(){
        console.log('Animal Walk');
    }
};

let rabbit ={
    jumps:true,
    __proto__:animal
};

let longEar = {
    earLength:10,
    __proto__:rabbit
};




// longEar.walk();
// console.log(longEar.jumps);

//Writing doesn't use prototype***************************************
//write/deleteoperatins work directly with object
 
let animal = {
    eats:true,
    walk(){
        //this willnot be modified

    }
};

let rabbit = {
    __proto__:animal
}
rabbit.walk = function(){
    console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk();


 let user = {
    name:"Krishnam",
    surname:"Upadhyay",

    set fullName(value){
        [this.name,this.surname]= value.split(" ");

    },

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__:user,
    isAdmin:true
}

//setters triggers!
admin.fullName = "Aditi";
console.log(admin.fullName);
console.log(user.fullName);



//This expample

 let animal = {
    walk(){
        if(!this.isSleeping){
            console.log('I walk');
        }
    },
    sleep(){
        this.isSleeping=true;
    }
};

let rabbit = {
    name:"WhiteRabbit",
    __proto__:animal
};
//modifies rabbit.isSleeping

// rabbit.sleep();
// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);

//for...in loop
 let animal ={
    eats:true,
    eyecolor:'red',
    speed:'slow'
};
let rabbit = {
    jumps:true,
    __proto__:animal
};

//object.key only returns ownkeys

console.log(Object.keys(rabbit));

//for ..in loops over both own and inherited keys
for(let prop in rabbit){
    console.log(prop);
}

// we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key)****************************

 let animal ={
    eats:true,
    eyecolor:'red',
    speed:'slow'
};
let rabbit = {
    jumps:true,
    __proto__:animal
};

for(let prop in rabbit){
    let isOwn= rabbit.hasOwnProperty(prop);
    if(isOwn){
        console.log(`our:${prop}`);
    }else{
        console.log(`Inherited:${prop}`);
    }
}

//Task 1***************************************************


//1.the code that creates a pair of objects, then modifies them.


 let animal = {
    jumps:null
};
let rabbit ={
    __proto__:animal,
    jumps:true
}

console.log(rabbit.jumps);//true
delete rabbit.jumps;//deletes jump property in rabbit object
console.log(rabbit.jumps)//null
delete animal.jumps;//delete jump property in animal object
console.log(rabbit.jumps)//undefined


//Task2 ************************************************
 
let head ={
    glasses:1
};
let table = {
    pen:3,
    __proto__:head
};
let bed = {
    sheet:1,
    pillow:2,
    __proto__:table
};
let pockets ={
    money:2000,
    __proto__:bed
};

console.log(pockets.pen);


//Q1=>Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head.
//Q2=>Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
//anwer will be head.glasses caust its its own  property and it doesn't have tosearch it in its porotype objects

//TASK 3 *********************************************
//Why are both hamsters full?

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    stomach: [],
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // we have defined its own stomach now its showing its local stomack

  


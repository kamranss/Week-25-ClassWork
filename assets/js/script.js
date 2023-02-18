


let arr = [1,2,3,4,5]
    
function incrementArr(arr) {

    for (let i = 0; i < arr.length; i++) {
        
       arr[i] =  arr[i] +5;
    }
    return arr;

}


console.log(incrementArr(arr));


/* normal Function */
function NewArr(array){
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] +4);
        
    }
    return newArr;
}


/* Call back */
function NewArr(array, cb){
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(cb(array[i] +4));
        
    }
    return newArr;
}

console.log(newArr([1,2,3]), n=> n+20);


let arrDemention = [1,2,[1,2,3,4]];

console.log(arrDemention[2,1]);


// Foreach, map, filter, reduce

/* foreach for arr  -> forrach accepts arrow function */
let numbers = [1,2,3,4,5,6]
/* item is evry time value next one can be index */
numbers.forEach(item=>{
    console.log(item);
})

// for each accepts two parametr value and index
numbers.forEach((item,index)=>{
    console.log(index+ "==>" +value);
})

// foreach accepts 3 paramets value, index, and array itself
numbers.forEach((item,index,numbers)=>{
    console.log(index+ "==>" +value);
})

numbers.forEach((item,index,numbers)=>{
    console.log(numbers);
})

// map is a method for walking throught array index and perform some actions
let newNumbers =  numbers.map((value,index,numbers)=>{value+5});
console.log(newNumbers);

let newNumbers2 = numbers.map((value,index,numbers)=>({val:value}));
console.log(newNumbers2);

// filter if you want to delete or take any element from existing array you can use filter arrr
// It is commonly used in node js and react
// You can create new array from existing but include your desired values
let newNumbers3 = numbers.filter(value=> value>2);

// reduce is used to get total sum of the values of the existing array but we can use it in different scenarios
// we can use prev and nex names instead of total and value  
// in this logic prev stands for previous value of the array and next is next value of the array
// reduce function can take two parameter 
//first is function second is some value and it will take this value and sum to given variable 
let sum = numbers.reduce((total, value)=> total+=value);

let sum2= numbers.reduce((prev,next)=> {prev+=nex}, 10);

let users =[
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300}
]

let sumSalary = users.filter(user=> user.salary>200).reduce((prev,nect)=>prev.salary+=nex.salary);



var employee = {
    name : "ram",
    age : 40,
    location:{
        city:"b'lore",
        pin:20009
    }
}
//shallow copying cloning object
var newemployee = Object.assign({},employee)
 
//newemployee.age = 90 // this will change both object
console.log(employee)
console.log(newemployee)
//deep copying 
var clonedemployee = Object.assign({},JSON.parse(JSON.stringify(employee)))
clonedemployee.location.city ='chennai';
console.log({},employee)
console.log(clonedemployee)


// clone an array speard operator
numbers = [1,2,3,4]
clonednumber = [100, 22, ...numbers]
console.log(clonednumber)
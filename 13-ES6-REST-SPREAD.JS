function test(a,b,...args)// rest operator ...args, at the last
{
    console.log(a)
    console.log(b)
    console.log(args)// stores value in a array collection [3,4,5,6]
    //with test (1,2,numbers) it will return arrary of array [[3,4,5,6]]
}
var numbers = [3,4,5,6]
//test(1,2,numbers)

test(1,2,...numbers)
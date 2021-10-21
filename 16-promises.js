function add(a,b){
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(a+b);
            }, 1000);
    })
}

add(2,3).then((res)=>{
console.log(res)
}).catch((err)=>{
    console.log(err)
})
class foo{
    constructor(id,name){
        this.id =id;
        this.name = name;
    }

    printfoodetails(){
        console.log(`ID : ${this.id} name : ${this.name}`)
    }
    
}

const myfoo = new foo(46090341,'deepanshu')
myfoo.printfoodetails()


class employee {
    constructor(){
        console.log('employee invoked')
    }
}

class manager extends employee{
    constructor(){
        super()
        console.log('manager invoked')
    }
}

new manager()
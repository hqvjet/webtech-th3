class PrimaryNumber{
    constructor(input) {
        this.input = input
    }

    isPrimaryNumber(){
        const sqrt = Math.sqrt(this.input)
        if(this.input === 2 || this.input === 3 || this.input === 5)
            return true
        if(this.input === 1 || this.input % 2 === 0 || this.input % 3 === 0 || this.input % 5 === 0)
            return false
        for(let i = 5; i < sqrt; i += 6){
            if(this.input % i === 0 || this.input % (i+2) === 0)
                return false
        }
        return true
    }
}

module.exports = PrimaryNumber


class PerfectNumber{

    getSumOfDivisor(input) {
        const sqrt = Math.sqrt(input)
        let sum = 1;
        for(let i = 2; i <= sqrt; ++i)
            if(input % i === 0){
                if(input / i === i)
                    sum += i
                else
                    sum += input/i + i
            }

        return sum
    }

    constructor(input) {
        this.input = input
    }

    isPerfectNumber(){
        const sum = this.getSumOfDivisor(this.input)
        return this.input === sum;
    }
}

module.exports = PerfectNumber